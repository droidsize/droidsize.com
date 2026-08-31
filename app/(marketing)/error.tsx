"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center px-4">
      <h2 className="mb-5 text-center text-4xl font-semibold">
        Something went wrong.
      </h2>
      <button
        type="button"
        onClick={reset}
        className="min-h-11 rounded-full bg-[var(--site-inverse)] px-6 py-3 font-semibold text-[var(--site-inverse-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        Try again
      </button>
    </div>
  );
}
