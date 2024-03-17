"use client";

import { notFound } from "next/navigation";

function getRandom(num: number) {
  return Math.floor(Math.random() * num);
}

export default function ProductReviewPage({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = getRandom(2);
  if (random == 1) throw new Error("Error loading review");
  if (parseInt(params.reviewId) > 500) {
    return notFound();
  }
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
}
