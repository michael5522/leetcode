import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">
        we hit a brickw aall
      </h2>
      <p>WE could not find the page you were l00king for.</p>
      <p>Go back to the <Link href="/tickets">tickets </Link></p>
    </main>
  )
}
