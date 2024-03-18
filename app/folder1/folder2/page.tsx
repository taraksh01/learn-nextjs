import Link from "next/link";

export default function Folder2Page() {
  return (
    <div>
      <div>Folder2 page</div>
      <Link href={"/folder1"}>folder1</Link>
    </div>
  );
}
