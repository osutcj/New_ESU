import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

// Animations
const slideInAnimation = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const twinkleAnimation = keyframes`
  0%, 100% {
    opacity: 0.14;
  }
  50% {
    opacity: 0.28;
  }
`;

const driftAnimation = keyframes`
  from {
    background-position: 0 0, 24px 10px, 68px 22px, 110px 6px;
  }
  to {
    background-position: 140px 0, 164px 10px, 208px 22px, 250px 6px;
  }
`;

// Styled Components
const Navbar = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  box-sizing: border-box;
  background: ${({ $scrolled }) =>
    $scrolled
      ? "linear-gradient(135deg, rgba(15, 12, 41, 0.96), rgba(48, 43, 99, 0.94), rgba(36, 36, 62, 0.96))"
      : "linear-gradient(135deg, rgba(15, 12, 41, 0.82), rgba(48, 43, 99, 0.78), rgba(36, 36, 62, 0.82))"};
  height: 78px;
  color: #ffffff;
  z-index: 500;
  overflow: hidden;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: background 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
  font-family: 'Poppins', sans-serif;
  box-shadow: ${({ $scrolled }) =>
    $scrolled
      ? "0 8px 24px rgba(7, 30, 70, 0.32)"
      : "0 6px 18px rgba(15, 12, 41, 0.18)"};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle, rgba(255, 255, 255, 0.9) 0 1px, transparent 1.4px),
      radial-gradient(circle, rgba(196, 181, 253, 0.7) 0 0.8px, transparent 1.2px),
      radial-gradient(circle, rgba(147, 197, 253, 0.72) 0 1px, transparent 1.4px),
      radial-gradient(circle, rgba(255, 255, 255, 0.55) 0 0.7px, transparent 1px);
    background-size: 180px 60px;
    opacity: 0.2;
    pointer-events: none;
    animation: ${twinkleAnimation} 6.5s ease-in-out infinite, ${driftAnimation} 26s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(167, 139, 250, 0.1), transparent 35%, transparent 65%, rgba(96, 165, 250, 0.1)),
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.08), transparent 0 16%),
      radial-gradient(circle at 78% 40%, rgba(167, 139, 250, 0.08), transparent 0 18%);
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 0 20px 0 72px;
    height: 74px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  a img {
    width: 176px;
    height: 60px;
    filter: drop-shadow(0 0 7px rgba(139, 92, 246, 0.28));
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin-left: auto;
  gap: 20px;
  font-size: 22px;
  text-decoration: none;
  padding: 0;
  margin-right: 5%;

  a {
    color: #ddd6fe;
    text-decoration: none;
    transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.3s ease;
    text-shadow: 0 0 8px rgba(139, 92, 246, 0.18);

    &:hover {
      color: #ffffff;
      text-shadow: 0 0 6px rgba(167, 139, 250, 0.45), 0 0 14px rgba(167, 139, 250, 0.28);
      transform: translateY(-1px);
    }
  }

  li {
    margin: 0 15px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1050px) {
    li:not(:last-child) {
      display: none;
    }
  }
`;

const MenuButton = styled.div`
  cursor: pointer;
  position: fixed;
  top: 15px;
  left: 5%;
  z-index: 1000;
  opacity: 1;
  font-family: 'Poppins', sans-serif;
`;

const Bar = styled.div<{ $isOpen: boolean; $barNumber: 1 | 2 | 3 }>`
  width: 35px;
  height: 5px;
  background-color: #f8f7ff;
  margin: 6px 0;
  box-shadow: 0 0 8px rgba(167, 139, 250, 0.22);
  transition: transform 0.4s, background-color 0.6s ease-in-out, opacity 0.4s, box-shadow 0.3s ease;

  ${MenuButton}:hover & {
    background-color: #d8ccff;
    box-shadow: 0 0 10px rgba(167, 139, 250, 0.35);
  }

  ${({ $isOpen, $barNumber }) => {
    if ($barNumber === 1 && $isOpen) {
      return css`transform: translate(0, 11px) rotate(-45deg);`;
    }
    if ($barNumber === 2 && $isOpen) {
      return css`opacity: 0;`;
    }
    if ($barNumber === 3 && $isOpen) {
      return css`transform: translate(0, -11px) rotate(45deg);`;
    }
    return "";
  }}
`;

const Sidenav = styled.div<{ $isOpen: boolean }>`
  height: 100vh;
  width: ${({ $isOpen }) => ($isOpen ? "22%" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(160deg, rgba(15, 12, 41, 0.98), rgba(48, 43, 99, 0.98), rgba(36, 36, 62, 0.98));
  overflow: hidden;
  transition: width 0.5s ease;
  padding-top: 0;
  z-index: 500;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 12px 0 30px rgba(7, 30, 70, 0.3);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle, rgba(255, 255, 255, 0.8) 0 1px, transparent 1.35px),
      radial-gradient(circle, rgba(196, 181, 253, 0.7) 0 0.85px, transparent 1.15px),
      radial-gradient(circle, rgba(147, 197, 253, 0.68) 0 1px, transparent 1.35px);
    background-size: 150px 54px;
    opacity: 0.16;
    pointer-events: none;
    animation: ${twinkleAnimation} 7s ease-in-out infinite, ${driftAnimation} 28s linear infinite;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding-top: 0;
    align-items: center;
    text-align: center;
    width: ${({ $isOpen }) => ($isOpen ? "100vw" : "0")};
  }

  @media (min-width: 768px) and (max-width: 1050px) {
    width: ${({ $isOpen }) => ($isOpen ? "35vw" : "0")};
  }
`;

const SidenavLink = styled.a<{ $isOpen: boolean; $index: number }>`
  padding: 8px 8px 8px 32px;
  padding-left: 20%;
  text-decoration: none;
  font-size: 30px;
  color: #d1c4ff;
  display: block;
  transition: color 0.4s ease-in-out, opacity 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-20px)")};
  transition-delay: ${({ $isOpen, $index }) => ($isOpen ? `${$index * 0.05}s` : "0s")};
  white-space: nowrap;
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.35);

  ${({ $isOpen, $index }) =>
    $isOpen &&
    css`
      animation: ${slideInAnimation} 0.4s ease-out forwards;
      animation-delay: ${$index * 0.05}s;
    `}

  &:hover {
    color: #ffffff;
    text-shadow: 0 0 8px #a78bfa, 0 0 20px rgba(167, 139, 250, 0.8);
  }

  @media (max-width: 768px) {
    font-size: 6vw;
    padding: 2vh 0;
    padding-left: 0;
  }
`;

const SidenavInscriere = styled.a<{ $isOpen: boolean }>`
  display: none !important;

  @media (max-width: 768px) {
    display: inline-flex !important;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ffffff, #e9ddff);
    color: #2d1f63;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    padding: 20px 30px;
    font-size: 1.3rem;
    border-radius: 30px;
    text-decoration: none;
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.25);
    margin: 30px auto 0 auto;
    width: fit-content;
    max-width: 85%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-20px)")};
    transition: opacity 0.3s ease, transform 0.3s ease;
    transition-delay: ${({ $isOpen }) => ($isOpen ? "0.3s" : "0s")};
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Acasă", external: false },
    { href: "/about", label: "Despre noi", external: false },
    { href: "/echipa", label: "Echipa", external: false },
    { href: "/ESU2026", label: "ESU 2026", external: false },
    { href: "/faq", label: "FAQ", external: false },
    { href: "https://mega.nz/folder/FMI0AAQC#nS9Z07iHl0qte4vJ580rGg", label: "Galerie", external: true },
  ];

  return (
    <>
      <Navbar $scrolled={isScrolled}>
        <Logo>
          <a href="/">
            <img src="/assets/images/Logo-uri/ESU_logo_header.png" alt="ESU Logo" />
          </a>
        </Logo>
        <NavLinks>
          <li>
            <a href="https://www.facebook.com/engineering.summer.university" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/engineering.summer.university/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@esu.osut" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
          </li>
          
        </NavLinks>
      </Navbar>

      <MenuButton onClick={toggleNav}>
        <Bar $isOpen={isOpen} $barNumber={1} />
        <Bar $isOpen={isOpen} $barNumber={2} />
        <Bar $isOpen={isOpen} $barNumber={3} />
      </MenuButton>

      <Sidenav $isOpen={isOpen}>
        {navLinks.map((link, index) => (
          link.external ? (
            <SidenavLink
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              $isOpen={isOpen}
              $index={index}
            >
              <b>{link.label}</b>
            </SidenavLink>
          ) : (
            <SidenavLink
              key={link.href}
              as={Link}
              to={link.href}
              $isOpen={isOpen}
              $index={index}
              onClick={() => setIsOpen(false)}
            >
              <b>{link.label}</b>
            </SidenavLink>
          )
        ))}
        <SidenavInscriere
          href="/assets/documente/Liste finale.pdf"
          target="_blank"
          rel="noopener noreferrer"
          $isOpen={isOpen}
        >
          Liste finale
        </SidenavInscriere>
      </Sidenav>
    </>
  );
};

export default Header;
