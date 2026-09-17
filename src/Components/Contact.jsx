import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const companyEmail = "pixelmint.org@gmail.com";
  const formspreeEndpoint = "https://formspree.io/f/xzezpywj";

  const handleCopy = () => {
    navigator.clipboard.writeText(companyEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-3 bg-slate-950 p-6 rounded-2xl border border-slate-800">
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-white mb-3">Let's Build Together</h2>
        <p className="text-slate-400">Have a project, bug fix, or custom AI application request? Reach out directly.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-8 space-y-8">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Official Email</p>
              <p className="text-base sm:text-lg text-lg font-bold text-white break-all">{companyEmail}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={handleCopy}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold rounded-xl transition flex items-center gap-2 border border-slate-700"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>

        {submitted && (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-center font-medium">
            Thank you! Your message has been sent successfully to Pixelmint.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 text-sm"
            />
            <input 
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 text-sm"
            />
          </div>
          <textarea 
            rows="4" 
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project or requirement..." 
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 text-sm"
          ></textarea>
          <button 
            type="submit" 
            className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl transition shadow-lg shadow-emerald-500/10"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}