"use client";

import { useState } from "react";

// Short consultation request for the program pages. Not connected to a form tool yet, like ContactForm.
export default function QuickConsultForm({ program }: { program: string }) {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="qf-done" role="status">
        <h3>Thank you.</h3>
        <p className="tbd">[Preview only: this form is not connected yet. Once a form tool is chosen, requests will be delivered to the team.]</p>
      </div>
    );
  return (
    <form
      className="qf"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input type="hidden" name="type" value={program} />
      <label>First name<input name="first" autoComplete="given-name" required /></label>
      <label>Last name<input name="last" autoComplete="family-name" required /></label>
      <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
      <label>Zip code<input name="zip" inputMode="numeric" autoComplete="postal-code" /></label>
      <label className="full">Email<input name="email" type="email" autoComplete="email" /></label>
      <button className="btn btn-ink full" type="submit">Book my free consultation</button>
      <p className="qf-fine full">We will call to set a time that suits you. By submitting you agree we may contact you about your project.</p>
    </form>
  );
}
