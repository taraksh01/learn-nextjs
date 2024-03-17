import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  return { title: `Product details ${params.productId}` };
}

export default function ProductDetailsPage({ params }: Props) {
  return <div>Product details page {params.productId}</div>;
}
