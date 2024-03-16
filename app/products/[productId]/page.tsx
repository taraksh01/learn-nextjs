export default function ProductDetailsPage({
  params,
}: {
  params: { productId: string };
}) {
  return <div>Product details page {params.productId}</div>;
}
