"use client";

export default function ReviewError({
  error,
  reset,
}: {
  error: Error;
  reset(): void;
}) {
  return (
    <div>
      Error: {error.message}
      <button onClick={reset} className="border border-white p-1 rounded m-2">
        Try again
      </button>
    </div>
  );
}
