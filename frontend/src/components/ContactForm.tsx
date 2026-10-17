"use client";
import type { FormEvent } from "react";
export default function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const f = new FormData(event.currentTarget),
      subject = `Website inquiry: ${f.get("subject")}`,
      body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`;
    window.location.href = `mailto:info@bsolymps.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <h2>Prepare an inquiry</h2>
      <label htmlFor="name">Full name</label>
      <input id="name" name="name" autoComplete="name" required />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <label htmlFor="subject">Subject</label>
      <input id="subject" name="subject" required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required />
      <button type="submit">Open email draft</button>
      <small>
        This opens your email app with the message addressed to
        info@bsolymps.com. Send it from your email app to complete the inquiry.
      </small>
    </form>
  );
}
