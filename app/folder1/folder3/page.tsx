import Link from "next/link";

export default function Folder3Page() {
  return (
    <div>
      <div>Folder 3</div>
      <Link href={"/folder1/folder4"}>folder4</Link>
    </div>
  );
}
