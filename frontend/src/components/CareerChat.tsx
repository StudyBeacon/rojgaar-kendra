// src/components/CareerChat.jsx

import React, { useState, useRef } from "react";
import axios from "axios";
import "./CareerChat.css"; // ✅ Make sure this is imported

const CareerChat = () => {
  const [topic, setTopic] = useState("resume");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!message.trim()) return;
    setLoading(true);
    setChat((prev) => [...prev, { user: message }]);
    setMessage("");
    scrollToBottom();

    try {
      const { data } = await axios.post("/api/career-help", {
        message,
        topic,
      });
      setChat((prev) => [...prev, { bot: data.reply }]);
    } catch (err) {
      setChat((prev) => [
        ...prev,
        { bot: `Error: ${err.response?.data?.error || err.message}` },
      ]);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="career-chat-page">
      <div className="career-chat">
        <h2>Frontend Career Coach</h2>

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
            <p className="typing">Ask me anything about your career…</p>
          ) : (
            chat.map((c, i) => (
              <div key={i} className={c.user ? "msg-user" : "msg-bot"}>
                <span>{c.user || c.bot}</span>
              </div>
            ))
          )}
          {loading && <div className="typing">Bot is typing...</div>}
          <div ref={bottomRef} />
        </div>

        <div className="input-area">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type your question..."
          />
          <button onClick={handleSend} disabled={loading}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerChat;