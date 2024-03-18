import { comments } from "./data";

export async function GET(request: Request) {
  return Response.json(comments);
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
