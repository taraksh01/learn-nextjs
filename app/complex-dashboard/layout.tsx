"use client";

import React, { useState } from "react";

export default function DashboardLayout({
  children,
  user,
  notification,
  revenue,
  login,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)} className="border p-1">
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      {isLoggedIn ? (
        <>
          <div>{children}</div>
          <div className="flex">
            <div className="flex flex-col">
              <div>{user}</div>
              <div>{revenue}</div>
            </div>
            <div className="flex">{notification}</div>b
          </div>
        </>
      ) : (
        <div>{login}</div>
      )}
    </div>
  );
}
