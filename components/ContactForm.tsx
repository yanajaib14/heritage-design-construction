"use client";

import { useState } from "react";
import { CITIES } from "@/lib/site";

const TYPES = [
  "Custom kitchen remodel",
  "10-Day Kitchen Program",
  "Cabinet refacing",
  "Bathroom remodel",
  "Fast Bath",
  "Whole-home remodel",
  "Commercial / tenant improvement",
  "Design services",
  "Not sure yet",
];

// Consultation request. Not connected to a form or scheduling tool yet: the owner still has to choose one.
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="form-done" role="status">
        <h3 style={{ fontSize: 28, marginBottom: 10 }}>Thank you.</h3>
        <p className="tbd" style={{ whiteSpace: "normal" }}>
          [Preview only: this form is not connected yet. Once a form tool is chosen, requests will be delivered to the team.]
        </p>
      </div>
    );
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label>Name<input name="name" autoComplete="name" required /></label>
      <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" /></label>
      <label>
        City
        <select name="city" defaultValue="">
          <option value="" disabled>Choose your city</option>
          {CITIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
          <option>Other</option>
        </select>
      </label>
      <label className="full">
        Project type
        <select name="type" defaultValue="">
          <option value="" disabled>What are you planning?</option>
          {TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="full">Tell us about your project<textarea name="message" /></label>
      <label className="full">
        Where would you like to meet?
        <select name="where" defaultValue="Showroom">
          <option>Showroom</option>
          <option>In my home</option>
          <option>Either</option>
        </select>
      </label>
      <div className="full btns" style={{ alignItems: "center" }}>
        <button className="btn btn-ink btn-xl" type="submit">Request my consultation →</button>
        <span className="note">Prefer to talk? Call (360) 557-3444.</span>
      </div>
    </form>
  );
}
