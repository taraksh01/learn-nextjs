import Card from "@/app/component/cards";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <div>Notification</div>
      <Link href={"/complex-dashboard/archive"}>archive notifications</Link>
    </Card>
  );
}
