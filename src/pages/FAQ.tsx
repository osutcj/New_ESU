import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Hero Section
const HeroSection = styled.section`
  position: relative;
  background-image: url('/assets/images/Banner Page/FAQ.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

const HeroTitle = styled.h1`
  color: #ffffff;
  font-size: 6rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  margin: 0;
  line-height: 1.4;

  .line1 { margin-bottom: 0.5em; }
  .line2 { margin-top: 0; }

  @media (max-width: 1800px) { font-size: 5.2rem; }
  @media (max-width: 1500px) { font-size: 4.4rem; }
  @media (max-width: 950px) { font-size: 3.8rem; }
  @media (max-width: 768px) { font-size: 2.6rem; padding: 0 10px; }
`;

const MainWrap = styled.main`
  background-color: #ffffff;
  margin: 0;
  padding: 0;
`;

// FAQ Section
const FaqSection = styled.section`
  background: #fff;
  padding: 50px 10%;
  font-family: 'Poppins', sans-serif;
`;

const FaqContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const FaqItem = styled.div<{ $active: boolean }>`
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, rgba(28, 22, 68, 0.96), rgba(58, 50, 120, 0.94), rgba(42, 42, 90, 0.96));
  border-radius: 15px;
  margin-bottom: 25px;
  box-shadow: 0 6px 16px rgba(92, 78, 176, 0.24);
  transition: transform 0.2s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle, rgba(255, 255, 255, 0.95) 0 1px, transparent 1.4px),
      radial-gradient(circle, rgba(196, 181, 253, 0.85) 0 0.8px, transparent 1.2px),
      radial-gradient(circle, rgba(147, 197, 253, 0.82) 0 1px, transparent 1.4px);
    background-size: 180px 60px;
    opacity: 0.22;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const FaqQuestion = styled.button`
  width: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  border: none;
  color: #fff;
  font-size: 1.4rem;
  padding: 20px 3%;
  text-align: left;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: rgba(250, 200, 45, 0.92);
    color: #073B7F;
  }
`;

const FaqArrow = styled.span<{ $active: boolean }>`
  transition: transform 0.4s ease-in-out;
  transform: ${({ $active }) => ($active ? "rotate(180deg)" : "none")};
`;

const FaqAnswer = styled.div<{ $active: boolean }>`
  position: relative;
  background: linear-gradient(160deg, rgba(108, 94, 190, 0.94), rgba(138, 123, 220, 0.9), rgba(114, 114, 190, 0.94));
  color: #fff;
  padding: ${({ $active }) => ($active ? "20px" : "0 20px")};
  max-height: ${({ $active }) => ($active ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s ease-in-out;
  font-family: 'Poppins', sans-serif;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle, rgba(255, 255, 255, 0.9) 0 1px, transparent 1.4px),
      radial-gradient(circle, rgba(196, 181, 253, 0.72) 0 0.8px, transparent 1.2px),
      radial-gradient(circle, rgba(147, 197, 253, 0.72) 0 1px, transparent 1.4px);
    background-size: 180px 60px;
    opacity: 0.16;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  a {
    color: #fff;
    text-decoration: underline;
    transition: color 0.3s;
    &:hover { color: #fac82d; }
  }

  p {
    margin: 0;
    line-height: 1.6;
  }
`;

// FAQ data
const faqData = [
  {
    question: "Unde? Când? Cine?",
    answer: "Cluj-Napoca, perioada 18 iulie - 1 august 2026 și o mulțime de oameni faini.",
  },
  {
    question: "Cât este prețul taberei?",
    answer: "Taxa de participare este în valoare de 750 de lei.",
  },
  {
    question: "Trebuie să am o anumită vârstă?",
    answer: "Tabăra este destinată elevilor de clasa a XI-a.",
  },
  {
    question: "Unde o să fim cazați?",
    answer: "Cazarea se va face într-unul dintre căminele din Campusul Studențesc Observator, iar în cameră vor sta câte 4 persoane alese aleatoriu.",
  },
  {
    question: "De ce acte am nevoie pentru a mă înscrie?",
    answer: "link:/ESU2026",
    isLink: true,
  },
  {
    question: "Cum se va face repartizarea în camere? Pot sta cu cine vreau în cameră?",
    answer: "Repartizarea în camere se va realiza aleatoriu, în funcție de gen.",
  },
  {
    question: "Contează pe ce profil sunt?",
    answer: "Nu, experiența ESU este aceeași pentru toate ramurile.",
  },
  {
    question: "După ce criterii se va face selecția pe facultăți?",
    answer: "Criterile de selecție pentru admiterea în tabără sunt: alegerea făcută în formularul de înscriere, diplome/certificate ce atestă interesul în ramura respectivă alegerii și argumentarea din formular privind motivul alegerii ramurii.",
  },
  {
    question: "Cum aflăm dacă am fost acceptați în tabără?",
    answer: "Răspunsul o să fie postat atât pe site prin intermediul listelor preliminare/finale, cât și prin intermediul unui apel telefonic.",
  },
  {
    question: "Unde se face înscrierea?",
    answer: "Înscrierea se face prin formularul de înscriere disponibil pe pagina ESU 2026.",
  },
  {
    question: "Pot pleca mai repede din tabără dacă am și alte chestii planificate dinainte?",
    answer: "Da, doar în prezența unui părinte/tutore legal, pentru maxim 24 de ore.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <MainWrap>
        <HeroSection>
          <HeroTitle>
            <span className="line1">FREQUENTLY ASKED</span><br />
            <span className="line2">QUESTIONS</span>
          </HeroTitle>
        </HeroSection>

        <FaqSection>
          <FaqContainer>
            {faqData.map((item, idx) => (
              <FaqItem key={idx} $active={activeIndex === idx}>
                <FaqQuestion onClick={() => toggleFaq(idx)}>
                  <b>{item.question}</b>
                  <FaqArrow $active={activeIndex === idx}>▼</FaqArrow>
                </FaqQuestion>
                <FaqAnswer $active={activeIndex === idx}>
                  {item.isLink ? (
                    <p>Tot procesul necesar înscrierii îl găsești <Link to="/ESU2026" style={{ color: "#fff", textDecoration: "underline" }}>aici</Link>.</p>
                  ) : (
                    <p>{item.answer}</p>
                  )}
                </FaqAnswer>
              </FaqItem>
            ))}
          </FaqContainer>
        </FaqSection>

        <Footer />
      </MainWrap>
    </>
  );
};

export default FAQ;
