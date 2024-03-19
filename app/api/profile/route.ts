import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const nextheader = headers();
  console.log(nextheader.get("user-agent"));
  console.log(requestHeaders.get("application-type"));

  return new Response("Profile");
}
