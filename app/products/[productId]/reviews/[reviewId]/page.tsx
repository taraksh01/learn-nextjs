import { notFound } from "next/navigation";

export default function ProductReviewPage({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 500) {
    return notFound();
  }
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
}
