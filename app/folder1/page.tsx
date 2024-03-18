import Link from "next/link";

export default function Folder1Page() {
  return (
    <div>
      <div>Folder 1 page</div>
      <Link href={"/folder1/folder2"}>folder2</Link>
      <Link href={"/folder1/folder3"}>folder3</Link>
      <Link href={"/folder1/folder4"}>folder4</Link>
    </div>
  );
}
