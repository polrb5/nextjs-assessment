import Link from "next/link";

export default function Header() {
  return (
    <header className="d-flex">
      <h1> Header</h1>
      <button>
        <Link className="btn" href="/about">
          About
        </Link>
      </button>
    </header>
  );
}
