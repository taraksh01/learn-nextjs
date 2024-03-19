export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Hello from API",
      timme: new Date().toLocaleTimeString(),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
