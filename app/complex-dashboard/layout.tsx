import React from "react";

export default function DashboardLayout({
  children,
  user,
  notification,
  revenue,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{user}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex">{notification}</div>
      </div>
    </div>
  );
}
