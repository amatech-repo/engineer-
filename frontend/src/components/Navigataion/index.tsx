import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Navigation = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const level = 10; // 自分のレベルを仮に10とする

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav>
      <BurgerMenu onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </BurgerMenu>
      <ul className={showMenu ? "show" : ""}>
        <li>
          <LogoContainer>
            <Logo src="/enginner-plus-plus.png" alt="Enginner++" />
            <Level>Lv. ???</Level>
          </LogoContainer>
        </li>
        <li>
          <Link href="/" passHref>
            <NavLink pathName={router.pathname} href="/">
              ホーム
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="/materials" passHref>
            <NavLink>教材一覧</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/questions" passHref>
            <NavLink>質問一覧</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/timeline" passHref>
            <NavLink>タイムライン</NavLink>
          </Link>
        </li>
        <LogoutButton>sign out</LogoutButton>
      </ul>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    margin: 10px 0;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    padding: 10px;

    ul {
      flex-direction: column;
      align-items: center;
      display: none;
      margin-top: 50px;
    }

    ul.show {
      display: flex;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const Logo = styled.img`
  height: 70px;
  width: 70px;
`;

const Level = styled.span`
  font-size: 14px;
  margin-top: 5px;
`;

interface BurgerMenuProps {
  showMenu?: boolean;
}

const BurgerMenu = styled.div<BurgerMenuProps>`
  display: none;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin-bottom: 5px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 800px) {
    display: flex;
  }

  div:nth-child(1) {
    transform: ${({ showMenu }) => (showMenu ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)")};
  }

  div:nth-child(2) {
    opacity: ${({ showMenu }) => (showMenu ? "0" : "1")};
  }

  div:nth-child(3) {
    transform: ${({ showMenu }) => (showMenu ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)")};
  }
`;

interface NavLinkProps {
  pathName?: string;
  href?: string;
}

const NavLink = styled.a<NavLinkProps>`
  text-decoration: none;
  color: ${({ pathName, href }: NavLinkProps) => (href === pathName ? "#23aaff" : "#fff")};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #23aaff;
  }
`;

const LogoutButton = styled.button`
  margin-top: 2rem;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  display: block;
  width: 95%;
  text-align: center;
  border-radius: 10px;

  &:hover {
    background-color: white;
    color: black;
  }
`;
