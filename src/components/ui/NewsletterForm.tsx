"use client";

import { useId, useState } from "react";

import { ArrowRight, Check } from "./Icons";

type Status = "idle" | "error" | "success";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      return;
    }
    // TODO: send `email` to your newsletter provider (e.g. via a Route Handler).
    setStatus("success");
    e.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <p role="status" className="flex items-center gap-3 rounded-full bg-white/10 px-6 py-4 text-[0.9375rem]">
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-leaf text-ink">
          <Check className="size-3.5" />
        </span>
        You’re on the list. Check your inbox to confirm.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor={`${id}-email`} className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:rounded-full sm:bg-white/10 sm:p-1.5 sm:ring-1 sm:ring-white/15 sm:focus-within:ring-white/40">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          aria-invalid={status === "error"}
          aria-describedby={`${id}-hint`}
          onChange={() => status === "error" && setStatus("idle")}
          className="h-12 min-w-0 flex-1 rounded-full bg-white/10 px-5 text-[0.9375rem] text-white ring-1 ring-white/15 placeholder:text-white/40 focus:outline-none focus-visible:ring-white/40 sm:bg-transparent sm:ring-0 sm:focus-visible:ring-0"
        />
        <button
          type="submit"
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-leaf px-6 text-[0.9375rem] font-medium text-ink transition-colors duration-300 hover:bg-white"
        >
          Subscribe
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
      <p
        id={`${id}-hint`}
        aria-live="polite"
        className={status === "error" ? "mt-3 px-1 text-sm text-[#ffb4a8]" : "mt-3 px-1 text-sm text-white/50"}
      >
        {status === "error"
          ? "Please enter a valid email address."
          : "Free, weekly. Unsubscribe anytime — we never share your email."}
      </p>
    </form>
  );
}
