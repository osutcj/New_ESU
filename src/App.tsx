import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    background: #fff;
  }
`;

// Hero Section
const HeroSection = styled.section`
  position: relative;
  background-image: url('/assets/images/Banner Page/MainPage.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
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

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-45px);

  @media (max-width: 768px) {
    transform: translateY(-30px);
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

const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fac82d;
  color: #073B7F;
  font-weight: 700;
  padding: 18px 34px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.01em;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-bottom: 30px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 34px rgba(0, 0, 0, 0.22);
  }
`;

const MainWrap = styled.main`
  background-color: #ffffff;
  margin: 0;
  padding: 0;
`;

// Ce este ESU Section
const CeESU = styled.section`
  max-width: 70%;
  margin: 60px auto;
  text-align: justify;
  font-family: 'Poppins', sans-serif;
  padding: 0 20px;
`;

const CeESUTitle = styled.h2`
  color: #fac82d;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3vh;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.2);

  @media (max-width: 767px) { font-size: 1.6rem; }
  @media (min-width: 768px) and (max-width: 950px) { font-size: 1.8rem; }
  @media (min-width: 951px) and (max-width: 1500px) { font-size: 2.1rem; }
`;

const CeESUDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #073B7F;
  margin-bottom: 20px;

  @media (max-width: 767px) { font-size: 0.9rem; }
  @media (min-width: 768px) and (max-width: 950px) { font-size: 1rem; }
`;

// Counters Section
const CountersSection = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, rgba(40, 32, 90, 0.95), rgba(72, 61, 139, 0.92), rgba(52, 52, 110, 0.95));
  color: white;
  padding: 50px 20px;
  margin-bottom: 1.5%;

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
`;

const CountersContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CounterItem = styled.div`
  flex: 1;
  min-width: 200px;
`;

const CounterNumber = styled.span`
  font-size: 2.7rem;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 1800px) { font-size: 2.4rem; }
  @media (max-width: 1500px) { font-size: 2.2rem; }
  @media (max-width: 950px) { font-size: 1.8rem; }
  @media (max-width: 768px) { font-size: 1.6rem; }
`;

const CounterLabel = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 600;
  color: #fac82d;
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;

  @media (max-width: 1800px) { font-size: 1.7rem; }
  @media (max-width: 1500px) { font-size: 1.4rem; }
  @media (max-width: 950px) { font-size: 1.2rem; }
  @media (max-width: 768px) { font-size: 0.9rem; }
`;

// Video Section
const VideoSection = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, rgba(15, 12, 41, 0.98), rgba(48, 43, 99, 0.96), rgba(36, 36, 62, 0.98));
  padding: 3vh 0;

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
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin: 0 auto 8vh auto;
  max-width: 70vw;
  border-radius: 15px;

  iframe,
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%) rotate(-90deg);
    transform-origin: center center;
    object-fit: cover;
  }
`;

const VideoTitle = styled.h2`
  color: #fac82d;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3vh;
  padding-top: 3vh;

  @media (max-width: 767px) { font-size: 1.6rem; }
`;

// Slideshow Section
const SlideshowSection = styled.section`
  padding: 20px 0 60px 0;
`;

const SlideshowContainer = styled.div`
  position: relative;
  max-width: 70vw;
  margin: 5vh auto 8vh auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
`;

const Slide = styled.div<{ $active: boolean; $direction: 'left' | 'right' | 'center' }>`
  width: 100%;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  display: ${({ $active }) => ($active ? "block" : "none")};

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
`;

const SlideArrow = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 28px;
  font-weight: bold;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  user-select: none;
  z-index: 3;
  text-align: center;
  transition: color 0.4s ease-in-out, background 0.4s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #073E7F;
    color: #fac82d;
  }

  @media (max-width: 1800px) { width: 52px; height: 52px; line-height: 52px; font-size: 24px; }
  @media (max-width: 1500px) { width: 45px; height: 45px; line-height: 45px; font-size: 20px; }
  @media (max-width: 950px) { width: 38px; height: 38px; line-height: 38px; font-size: 18px; }
  @media (max-width: 768px) { width: 32px; height: 32px; line-height: 32px; font-size: 16px; }
`;

const PrevArrow = styled(SlideArrow)`
  left: 20px;
`;

const NextArrow = styled(SlideArrow)`
  right: 20px;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 4;
`;

const Dot = styled.span<{ $active: boolean }>`
  display: inline-block;
  width: 30px;
  height: 4px;
  margin: 5px 4px;
  background-color: ${({ $active }) => ($active ? "#FAC82D" : "rgba(255, 255, 255, 0.5)")};
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.4s ease;
`;

// Slideshow images
const slideshowImages = [
  "/assets/images/Main Page/1.jpg",
  "/assets/images/Main Page/2.jpg",
  "/assets/images/Main Page/3.jpg",
  "/assets/images/Main Page/4.jpg",
  "/assets/images/Main Page/5.jpg",
  "/assets/images/Main Page/6.jpg",
  "/assets/images/Main Page/7.JPG",
  "/assets/images/Main Page/8.jpg",
];

// Counter Hook
const useCounter = (end: number, duration: number, start: number = 0) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const range = end - start;
    const step = Math.abs(Math.floor(duration / range));
    const increment = end > start ? 1 : -1;

    const timer = setInterval(() => {
      countRef.current += increment;
      setCount(countRef.current);
      if (countRef.current === end) {
        clearInterval(timer);
      }
    }, step);

    return () => clearInterval(timer);
  }, [end, duration, start]);

  return count;
};

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const participantsCount = useCounter(2200, 4000, 1700);
  const volunteersCount = useCounter(700, 4000, 200);
  const daysCount = useCounter(14, 8000, 0);

  const plusSlides = (n: number) => {
    let newIndex = slideIndex + n;
    if (newIndex >= slideshowImages.length) newIndex = 0;
    if (newIndex < 0) newIndex = slideshowImages.length - 1;
    setSlideIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainWrap>
        <HeroSection>
          <HeroContent>
            <HeroButton
              href="https://docs.google.com/forms/d/e/1FAIpQLScfyu9j-1PWNBMg-1QIfnpbfs6H0Ph4RHy2BQHGXTpAwYx22A/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              Înscrie-te acum
            </HeroButton>
            <HeroTitle>
              <span className="line1">ENGINEERING SUMMER</span><br />
              <span className="line2">UNIVERSITY</span>
            </HeroTitle>
          </HeroContent>
        </HeroSection>

        <CeESU>
          <CeESUTitle>Ce este Engineering Summer University?</CeESUTitle>
          <CeESUDescription>
            Prin proiectul Engineering Summer University, aflat la a XII-a ediție, Organizația Studenților din  Universitatea Tehnică din Cluj-Napoca îți oferă ocazia să experimentezi viața de student într-un mod interactiv și plin de distracție! Timp de 2 săptămâni, poți participa la cursuri și ateliere. 
            <br /><br />
            Înveți să lucrezi în echipă,  explorezi campusul universitar și descoperi cum este să înveți alături de viitorii tăi colegi. Pe lângă toate acestea, te așteaptă și multe activități distractive, jocuri, seri tematice și momente de neuitat alături de oameni faini.
            </CeESUDescription>
        </CeESU>

        <CountersSection>
          <CountersContainer>
            <CounterItem>
              <CounterNumber>{participantsCount}+</CounterNumber>
              <CounterLabel>Participanți</CounterLabel>
            </CounterItem>
            <CounterItem>
              <CounterNumber>{volunteersCount}+</CounterNumber>
              <CounterLabel>Voluntari</CounterLabel>
            </CounterItem>
            <CounterItem>
              <CounterNumber>{daysCount}</CounterNumber>
              <CounterLabel>Zile</CounterLabel>
            </CounterItem>
          </CountersContainer>
        </CountersSection>

        <VideoSection>
          <VideoTitle>Aftermovie ESU 2025</VideoTitle>
          <VideoContainer>
            <video controls width="100%" height="100%">
              <source src="/videos/aftermovie2025.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoContainer>
        </VideoSection>

        <SlideshowSection>
          <CeESU>
            <CeESUTitle>Iată ce înseamnă să fii participant la ESU</CeESUTitle>
          </CeESU>
          <SlideshowContainer>
            {slideshowImages.map((img, idx) => (
              <Slide
                key={idx}
                $active={slideIndex === idx}
                $direction="center"
              >
                <img src={img} alt={`ESU Slide ${idx + 1}`} />
              </Slide>
            ))}
            <PrevArrow onClick={() => plusSlides(-1)}>❮</PrevArrow>
            <NextArrow onClick={() => plusSlides(1)}>❯</NextArrow>
            <DotsContainer>
              {slideshowImages.map((_, idx) => (
                <Dot
                  key={idx}
                  $active={slideIndex === idx}
                  onClick={() => goToSlide(idx)}
                />
              ))}
            </DotsContainer>
          </SlideshowContainer>
        </SlideshowSection>

        <Footer />
      </MainWrap>
    </>
  );
}

export default App;
