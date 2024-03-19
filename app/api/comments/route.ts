import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams;
  const query = search.get("query");

  const filteredComments = query
    ? comments.filter((comment) =>
        comment.text.toLowerCase().includes(query.toLowerCase())
      )
    : comments;
  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  const newComment = {
    id: comments.length + 1,
    ...data,
  };
  console.log(newComment);
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
