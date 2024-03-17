"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("ordering product");
    router.push("/");
  };
  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick}>order now</button>
    </>
  );
}
