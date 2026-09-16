export function GET() {
  return new Response(
    "google-site-verification: googlee7e1f8a7c74191d5.html",
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
}
