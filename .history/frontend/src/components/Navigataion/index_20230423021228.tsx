import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/bookslist">About</Link>
        </li>
        <li>
          <Link href="/q">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation