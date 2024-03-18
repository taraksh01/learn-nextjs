import Link from "next/link";

export default function InterceptedFolder2() {
  return (
    <div>
      <div>(.) Intercepted folder 2</div>
      <Link href={"/folder1"}>folder1</Link>
    </div>
  );
}
