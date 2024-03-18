import Link from "next/link";

export default function InterceptedFolder3() {
  return (
    <div>
      <div>(..) Intercepted 1 level folder</div>
      <Link href={"/folder1/folder4"}>folder4</Link>
    </div>
  );
}
