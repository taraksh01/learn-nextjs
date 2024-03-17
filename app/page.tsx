import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Homepage</h1>
      <Link href={"/products"}>view products</Link>
    </div>
  );
}
