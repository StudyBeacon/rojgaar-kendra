import React, { useState } from 'react';
import { jsPDF } from 'jspdf';


const initialEducation = [{ degree: '', institution: '', year: '' }];
const initialExperience = [{ jobTitle: '', company: '', years: '', description: '' }];
const initialProjects = [{ name: '', link: '', description: '' }];

export default function ResumeBuilder() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    objective: '',
    education: initialEducation,
    experience: initialExperience,
    skills: '',
    projects: initialProjects,
  });
  const [errors, setErrors] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDynamicChange = (section, idx, e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = prev[section].map((item, i) =>
        i === idx ? { ...item, [name]: value } : item
      );
      return { ...prev, [section]: updated };
    });
  };

  const addDynamicField = (section, template) => {
    setForm((prev) => ({ ...prev, [section]: [...prev[section], { ...template }] }));
  };

  const removeDynamicField = (section, idx) => {
    setForm((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== idx),
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!form.objective.trim()) newErrors.objective = 'Career Objective is required';
    if (!form.education[0].degree.trim()) newErrors.education = 'At least one education entry is required';
    if (!form.experience[0].jobTitle.trim()) newErrors.experience = 'At least one experience entry is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 15;
    doc.setFontSize(22);
    doc.text(form.fullName, 10, y);
    doc.setFontSize(12);
    y += 8;
    doc.text(`Email: ${form.email}`, 10, y);
    y += 7;
    doc.text(`Phone: ${form.phone}`, 10, y);
    y += 7;
    if (form.linkedin) {
      doc.text(`LinkedIn: ${form.linkedin}`, 10, y);
      y += 7;
    }
    if (form.github) {
      doc.text(`GitHub: ${form.github}`, 10, y);
      y += 7;
    }
    y += 2;
    doc.setFontSize(16);
    doc.text('Career Objective', 10, y);
    y += 7;
    doc.setFontSize(12);
    doc.text(form.objective, 10, y, { maxWidth: 190 });
    y += 12;
    doc.setFontSize(16);
    doc.text('Education', 10, y);
    y += 7;
    doc.setFontSize(12);
    form.education.forEach((edu) => {
      doc.text(`${edu.degree} - ${edu.institution} (${edu.year})`, 12, y);
      y += 7;
    });
    y += 2;
    doc.setFontSize(16);
    doc.text('Work Experience', 10, y);
    y += 7;
    doc.setFontSize(12);
    form.experience.forEach((exp) => {
      doc.text(`${exp.jobTitle} at ${exp.company} (${exp.years})`, 12, y);
      y += 6;
      doc.text(exp.description, 14, y, { maxWidth: 180 });
      y += 8;
    });
    y += 2;
    doc.setFontSize(16);
    doc.text('Skills', 10, y);
    y += 7;
    doc.setFontSize(12);
    doc.text(form.skills, 12, y);
    y += 8;
    doc.setFontSize(16);
    doc.text('Projects', 10, y);
    y += 7;
    doc.setFontSize(12);
    form.projects.forEach((proj) => {
      doc.text(`${proj.name} (${proj.link})`, 12, y);
      y += 6;
      doc.text(proj.description, 14, y, { maxWidth: 180 });
      y += 8;
    });
    doc.save(`resume_${form.fullName.replace(/\s+/g, '_')}.pdf`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowPreview(true);
    }
  };

  const ResumePreview = () => (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{form.fullName}</h2>
      <div className="text-sm text-gray-600 mb-2">
        <span>{form.email}</span> | <span>{form.phone}</span>
      </div>
      <div className="text-sm text-blue-600 mb-2">
        {form.linkedin && <span className="mr-2">LinkedIn: {form.linkedin}</span>}
        {form.github && <span>GitHub: {form.github}</span>}
      </div>
      <section className="mb-4">
        <h3 className="font-semibold">Career Objective</h3>
        <p>{form.objective}</p>
      </section>
      <section className="mb-4">
        <h3 className="font-semibold">Education</h3>
        <ul>
          {form.education.map((edu, i) => (
            <li key={i}>{edu.degree} - {edu.institution} ({edu.year})</li>
          ))}
        </ul>
      </section>
      <section className="mb-4">
        <h3 className="font-semibold">Work Experience</h3>
        <ul>
          {form.experience.map((exp, i) => (
            <li key={i} className="mb-2">
              <div className="font-medium">{exp.jobTitle} at {exp.company} ({exp.years})</div>
              <div className="text-sm">{exp.description}</div>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-4">
        <h3 className="font-semibold">Skills</h3>
        <p>{form.skills}</p>
      </section>
      <section>
        <h3 className="font-semibold">Projects</h3>
        <ul>
          {form.projects.map((proj, i) => (
            <li key={i} className="mb-2">
              <div className="font-medium">{proj.name} <a href={proj.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{proj.link}</a></div>
              <div className="text-sm">{proj.description}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Smart Resume Builder</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* --- Input fields (same as before) --- */}
          {/* ... skipped for brevity since you already pasted them correctly ... */}
          {/* --- Buttons --- */}
          <div className="flex gap-4 mt-6">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Generate Resume</button>
            {showPreview && (
              <button type="button" onClick={generatePDF} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Download Resume</button>
            )}
          </div>
        </form>
        {showPreview && <ResumePreview />}
      </div>
    </div>
  );
}
