"use client";

import { FormEvent } from "react";

export default function EnquiryForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.toString().trim() || "Parent";
    const phone = data.get("phone")?.toString().trim() || "Not provided";
    const programme = data.get("programme")?.toString() || "Not selected";
    const mode = data.get("mode")?.toString() || "Not selected";
    const message = `Hello Brilliant Minds Academy, I am ${name}. Contact number: ${phone}. I would like to enquire about ${programme}. Preferred mode: ${mode}. Please share batch details.`;
    const whatsappUrl = `https://wa.me/918847588165?text=${encodeURIComponent(message)}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!whatsappWindow) window.location.assign(whatsappUrl);
  }

  return (
    <form className="enquiryForm" onSubmit={handleSubmit}>
      <div className="formHeading">
        <span>Quick enquiry</span>
        <strong>We&apos;ll continue on WhatsApp.</strong>
      </div>
      <label>
        Parent / student name
        <input name="name" type="text" autoComplete="name" maxLength={80} placeholder="Enter your name" required />
      </label>
      <label>
        Contact number
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          pattern="[0-9+() -]{7,18}"
          maxLength={18}
          placeholder="Enter your phone number"
          required
        />
      </label>
      <div className="formRow">
        <label>
          Programme
          <select name="programme" required defaultValue="">
            <option value="" disabled>Select programme</option>
            <option>Mathematics · Classes 6–10 (Offline)</option>
            <option>Science · Classes 9–10 (Offline)</option>
            <option>All subjects · Class 8 (Offline)</option>
            <option>Vedic Maths crash course</option>
          </select>
        </label>
        <label>
          Learning mode
          <select name="mode" required defaultValue="">
            <option value="" disabled>Select mode</option>
            <option>Academy tuition · Offline</option>
            <option>Vedic Maths · Offline</option>
            <option>Vedic Maths · Online</option>
            <option>Need guidance</option>
          </select>
        </label>
      </div>
      <button type="submit" aria-describedby="enquiry-note">Send enquiry on WhatsApp <span aria-hidden="true">→</span></button>
      <small id="enquiry-note">No payment or commitment required.</small>
    </form>
  );
}
