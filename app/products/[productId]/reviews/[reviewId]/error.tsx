"use client";

export default function ReviewError({ error }: { error: Error }) {
  return <div>Error: {error.message}</div>;
}
