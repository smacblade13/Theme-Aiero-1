"use client";

import { useState } from "react";

import { site } from "@/data/site";

type Status = "idle" | "opened";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const url =
      `mailto:${site.contact.email}` +
      `?subject=${encodeURIComponent(subject || "Website enquiry")}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = url;
    setStatus("opened");
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <h2>Get in Touch</h2>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Full name"
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
      />
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Subject"
        required
      />
      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder="Write your message..."
        required
        defaultValue=""
      />
      <button type="submit" className="ibt-btn ibt-btn-outline">
        <span>Send message</span>
        <i className="icon-arrow-top" aria-hidden />
      </button>
      {status === "opened" && (
        <p role="status" className="contact-form-status">
          Opening your email app… if nothing happens, email us directly at{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
        </p>
      )}
    </form>
  );
}
