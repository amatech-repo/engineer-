import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <ul className={showMenu ? "show" : ""}>
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="/bookslist">教材一覧</Link>
        </li>
        <li>
          <Link href="/questions">質問</Link>
        </li>
        <li>
          <Link href="/timeline">タイムライン</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
