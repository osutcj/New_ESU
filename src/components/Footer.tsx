import styled, { keyframes } from "styled-components";

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

// Footer styled components
const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, rgba(15, 12, 41, 0.98), rgba(48, 43, 99, 0.98), rgba(36, 36, 62, 0.98));
  color: #ffffff;
  padding: 24px 0;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 -8px 24px rgba(7, 30, 70, 0.18);

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
    opacity: 0.18;
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

  @media (max-width: 900px) {
    padding: 18px 0;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;
    gap: 15px;
    padding: 10px 0;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 60px;
  color: #d6d0ef;
  font-size: 20px;
  margin-top: -10px;

  img {
    max-width: 125px;
    filter: drop-shadow(0 0 7px rgba(139, 92, 246, 0.28));
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  a:hover img {
    transform: translateY(-1px);
    filter: drop-shadow(0 0 10px rgba(167, 139, 250, 0.35));
  }

  @media (max-width: 900px) {
    gap: 30px;
    img {
      max-width: 120px;
    }
  }
`;

const FooterSocial = styled.div`
  a {
    color: #ddd6fe;
    font-size: 22px;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.3s ease;
    text-shadow: 0 0 8px rgba(139, 92, 246, 0.18);

    &:hover {
      color: #ffffff;
      text-shadow: 0 0 6px rgba(167, 139, 250, 0.45), 0 0 14px rgba(167, 139, 250, 0.28);
      transform: translateY(-1px);
    }

    @media (max-width: 900px) {
      font-size: 22px;
      margin: 0 8px;
    }
  }
`;

const FooterDivider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.5), rgba(147, 197, 253, 0.45), transparent);
  margin: 20px auto;
  width: 90%;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
  color: #d6d0ef;
  font-size: 14px;
  margin-top: -10px;

  a {
    color: inherit;
    transition: color 0.3s ease, text-shadow 0.3s ease;

    &:hover {
      color: #ffffff;
      text-shadow: 0 0 6px rgba(167, 139, 250, 0.4);
    }
  }

  img {
    max-width: 140px;
    filter: drop-shadow(0 0 7px rgba(139, 92, 246, 0.24));
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 0;

    img {
      max-width: 100px;
    }
  }
`;

const FooterContact = styled.div`
  padding-bottom: 5px;
  text-align: justify;

  b {
    color: #ffffff;
  }

  h3 {
    color: #ffffff;
    text-align: center;
    margin-left: 0px;
    font-size: 130%;
    margin-bottom: 15px;
    text-shadow: 0 0 6px rgba(167, 139, 250, 0.28);
  }

  p {
    margin: 8px 0;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #ffffff;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLogo>
          <a href="https://www.utcluj.ro/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/Logo-uri/UTalb.png" alt="UT Logo" />
          </a>
          <a href="https://osut.org/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/Logo-uri/OSUT alb.png" alt="OSUT Logo" />
          </a>
        </FooterLogo>
        <FooterSocial>
          <a href="https://www.facebook.com/engineering.summer.university" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/engineering.summer.university" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@esu.osut" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="mailto:esu.osutcluj@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </FooterSocial>
      </FooterContent>
      <FooterDivider />
      <FooterBottom>
        <a href="https://esu.osut.org/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/Logo-uri/ESU_logo.png" alt="ESU Logo" />
        </a>
        <FooterContact>
          <h3>Contact:</h3>
          <p><b>Vlad Cosmin Ormindean - Responsabil BC</b></p>
          <p>Număr de telefon: <i> 0743135003</i></p>
          <p>Email: <a href="mailto:vlad.ormindean@osutcluj.com">vlad.ormindean@osutcluj.com</a></p>
          <p><b>Călin-Bogdan Secară - Coordonator</b></p>
          <p>Număr de telefon: <i>0734785227</i></p>
          <p>Email: <a href="mailto:calin.secara@osutcluj.com">calin.secara@osutcluj.com</a></p>
        </FooterContact>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
