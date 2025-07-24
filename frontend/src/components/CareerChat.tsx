import React, { useState, useRef } from "react";
import axios from "axios";
import "./CareerChat.css";

const CareerChat = () => {
  const [topic, setTopic] = useState("resume");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // Scrolls the chat to the latest message
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Sends the user message to the backend
  const handleSend = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setChat((prev) => [...prev, { role: "user", text: message }]);
    setMessage("");
    scrollToBottom();

    try {
      const { data } = await axios.post("http://localhost:5000/api/career-help", {
        message,
        topic,
      });

      setChat((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (err) {
      setChat((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            `❌ Error: ` + (err.response?.data?.error || "Could not connect to server."),
        },
      ]);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  // Handles Enter to send, Shift+Enter for multiline
  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="career-chat-page">
      <div className="career-chat">
        <h2>💬 Frontend Career Coach</h2>

        <select
          className="topic-select"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value="resume">Resume Help</option>
          <option value="interview">Interview Tips</option>
          <option value="general">General Advice</option>
        </select>

        <div className="chat-window">
          {chat.length === 0 ? (
            <p className="typing">Ask me anything about your tech career…</p>
          ) : (
            chat.map((c, i) => (
              <div key={i} className={c.role === "user" ? "msg-user" : "msg-bot"}>
                <span>{c.text}</span>
              </div>
            ))
          )}
          {loading && <div className="typing">Bot is typing...</div>}
          <div ref={bottomRef} />
        </div>

        <div className="input-area">
          <input
            autoFocus
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type your question..."
            disabled={loading}
          />
          <button onClick={handleSend} disabled={loading || !message.trim()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerChat;