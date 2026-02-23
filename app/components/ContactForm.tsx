"use client";

import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = () => {
    const err: Record<string, string> = {};
    if (!name.trim()) err.name = "Name is required";
    if (!email.trim()) err.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = "Enter a valid email";
    if (!message.trim()) err.message = "Message is required";
    return err;
  };

  const errors = validate();
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    if (!isValid) return;
    setStatus("submitting");
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#E8E5E0] bg-white px-4 py-3 text-[#1B1B1B] placeholder:text-[#9A9590] focus:border-[#BF822E] focus:outline-none focus:ring-2 focus:ring-[#BF822E]/20 transition-colors";
  const labelClass = "mb-1.5 block text-sm font-medium text-[#1B1B1B]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name <span className="text-[#BF822E]">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
          placeholder="Your name"
          className={inputClass}
          aria-required
          aria-invalid={touched.name && !!errors.name}
        />
        {touched.name && errors.name && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email <span className="text-[#BF822E]">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          placeholder="you@example.com"
          className={inputClass}
          aria-required
          aria-invalid={touched.email && !!errors.email}
        />
        {touched.email && errors.email && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          Phone <span className="text-[#9A9590] text-xs font-normal">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
          placeholder="+971 50 123 4567"
          className={inputClass}
          aria-invalid={touched.phone && !!errors.phone}
        />
        {touched.phone && errors.phone && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message <span className="text-[#BF822E]">*</span>
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          placeholder="How can we help?"
          rows={5}
          className={`${inputClass} resize-y min-h-[120px]`}
          aria-required
          aria-invalid={touched.message && !!errors.message}
        />
        {touched.message && errors.message && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {status === "success" && (
        <div className="rounded-xl bg-[#BF822E]/10 border border-[#BF822E]/30 px-4 py-3 text-[#5A4A2A]" role="status">
          Thanks for reaching out. We&apos;ll get back to you within 24–48 hours.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-red-700" role="alert">
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full py-3.5 px-6 font-semibold text-white shadow-md transition-all duration-200 hover:opacity-95 disabled:opacity-70 disabled:cursor-not-allowed"
        style={{ background: "linear-gradient(to bottom, #D99F4F, #BF822E)" }}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
