import Card from "@/app/component/cards";
import Link from "next/link";

export default function ArchiveNotifications() {
  return (
    <Card>
      <div>Archived Notification</div>
      <Link href={"/complex-dashboard"}>default</Link>
    </Card>
  );
}
