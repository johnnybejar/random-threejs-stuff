import { Link } from "wouter";

function Header() {
  return (
    <>
      <ul id="navbar">
        <li className="nav-item">
          <Link href="/globe">Globe</Link>
        </li>
        <li className="nav-item">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
