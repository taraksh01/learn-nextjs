import Link from "next/link";

export default function ProductPage() {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <h1>List of products</h1>
      <ul>
        <li>
          <Link href={"/products/1"}>product 1</Link>
        </li>
        <li>
          <Link href={"/products/2"}>product 2</Link>
        </li>
        <li>
          <Link href={"/products/3"} replace>
            product 3
          </Link>
        </li>
      </ul>
    </div>
  );
}
