"use client";

import { FormEvent, useState } from "react";

const programmeOptions = [
  { value: "maths", label: "Mathematics · Classes 6–10 (Offline)" },
  { value: "science", label: "Science · Classes 9–10 (Offline)" },
  { value: "class-8", label: "All subjects · Class 8 (Offline)" },
  { value: "vedic", label: "Vedic Maths crash course" },
];

const learningModes = {
  academy: ["Academy tuition · Offline"],
  vedic: ["Vedic Maths · Offline", "Vedic Maths · Online"],
};

export default function EnquiryForm() {
  const [selectedProgramme, setSelectedProgramme] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const availableModes = selectedProgramme === "vedic"
    ? learningModes.vedic
    : selectedProgramme
      ? learningModes.academy
      : [];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.toString().trim() || "Parent";
    const phone = data.get("phone")?.toString().trim() || "Not provided";
    const programmeValue = data.get("programme")?.toString() || "";
    const programme = programmeOptions.find((option) => option.value === programmeValue)?.label || "Not selected";
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
          <select
            name="programme"
            required
            value={selectedProgramme}
            onChange={(event) => {
              setSelectedProgramme(event.target.value);
              setSelectedMode("");
            }}
          >
            <option value="" disabled>Select programme</option>
            {programmeOptions.map((programme) => <option key={programme.value} value={programme.value}>{programme.label}</option>)}
          </select>
        </label>
        <label>
          Learning mode
          <select name="mode" required value={selectedMode} disabled={!selectedProgramme} onChange={(event) => setSelectedMode(event.target.value)}>
            <option value="" disabled>{selectedProgramme ? "Select mode" : "Select programme first"}</option>
            {availableModes.map((mode) => <option key={mode}>{mode}</option>)}
          </select>
        </label>
      </div>
      <button type="submit" aria-describedby="enquiry-note">Send enquiry on WhatsApp <span aria-hidden="true">→</span></button>
      <small id="enquiry-note">No payment or commitment required.</small>
    </form>
  );
}
