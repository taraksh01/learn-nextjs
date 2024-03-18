import Link from "next/link";

export default function Folder4Page() {
  return (
    <div>
      <div>folder 4</div>
      <Link href={"/folder1/folder3"}>folder3</Link>
      <Link href={"/about"}>about</Link>
      <Link href={"/profile"}>profile</Link>
    </div>
  );
}
