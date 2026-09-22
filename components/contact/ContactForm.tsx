"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form handling logic can be added here (e.g. API call, validation)
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
    </form>
  );
}
