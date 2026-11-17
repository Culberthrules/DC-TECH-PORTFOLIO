"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "sending" | "success" | "error";

const OPPORTUNITIES = [
  "Freelance or contract project",
  "Full-time role",
  "Something else",
];

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setState("error");
      setErrorMsg("Enter your name, a valid email address, and a message.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      setErrorMsg("Enter a valid email address.");
      return;
    }

    if (name.length > 120 || email.length > 320 || formData.type.length > 80 || message.length > 5000) {
      setState("error");
      setErrorMsg("One or more fields are too long. Please shorten your message.");
      return;
    }

    setState("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name,
          email,
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setState("success");
      setFormData({ name: "", email: "", type: "", message: "" });
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass =
    "w-full bg-lift border border-rim rounded-lg px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-teal transition-colors duration-200";

  return (
    <section
      id="contact"
      className="bg-surface border-t border-rim px-6 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1fr] gap-14 md:gap-20">
          <div>
            <p className="text-sm text-soft mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Get in touch
            </h1>

            <p className="text-soft text-base leading-relaxed mb-8 max-w-md">
              Have a project in mind, need a hand with a website, or just want
              to say hello? Send me a message.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:culberthdamasus@gmail.com"
                className="flex items-center gap-3 text-sm text-soft hover:text-ink transition-colors group"
              >
                <span className="font-mono text-teal group-hover:opacity-75 transition-opacity">→</span>
                <span>culberthdamasus@gmail.com</span>
              </a>
              <a
                href="https://github.com/Culberthrules"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-soft hover:text-ink transition-colors group"
              >
                <span className="font-mono text-teal group-hover:opacity-75 transition-opacity">→</span>
                <span>github.com/Culberthrules</span>
              </a>
              <a
                href="https://www.linkedin.com/in/damasus-culberth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-soft hover:text-ink transition-colors group"
              >
                <span className="font-mono text-teal group-hover:opacity-75 transition-opacity">→</span>
                <span>www.linkedin.com/in/damasus-culberth</span>
              </a>
            </div>

          </div>

          <div>
            {state === "success" ? (
              <div className="h-full flex flex-col justify-center text-center py-16">
                <p className="text-3xl font-semibold text-ink mb-3">Message sent</p>
                <p className="text-soft text-sm">
                  Thanks for getting in touch. I&apos;ll reply as soon as I can.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-8 font-mono text-xs text-teal hover:opacity-75 transition-opacity mx-auto"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs text-muted mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      maxLength={120}
                      autoComplete="name"
                      placeholder="Your name"
                      className={inputClass}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((f) => ({ ...f, name: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs text-muted mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      maxLength={320}
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={inputClass}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((f) => ({ ...f, email: e.target.value }))
                      }
                    />
                  </div>
                </div>

                {/* Opportunity type */}
                <div>
                  <label
                    htmlFor="contact-type"
                    className="block font-mono text-xs text-muted mb-1.5"
                  >
                    What&apos;s this about?
                  </label>
                  <select
                    id="contact-type"
                    className={`${inputClass} appearance-none cursor-pointer`}
                    required
                    value={formData.type}
                    onChange={(e) =>
                      setFormData((f) => ({ ...f, type: e.target.value }))
                    }
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {OPPORTUNITIES.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs text-muted mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    maxLength={5000}
                    rows={5}
                    placeholder="Tell me a little about what you need."
                    className={`${inputClass} resize-none`}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((f) => ({ ...f, message: e.target.value }))
                    }
                  />
                </div>

                {/* Error */}
                {state === "error" && (
                  <p
                    role="alert"
                    className="font-mono text-xs text-red-400"
                  >
                    {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="w-full h-12 bg-teal text-canvas text-sm font-semibold rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state === "sending" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
