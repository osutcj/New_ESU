import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Hero Section
const HeroSection = styled.section`
  position: relative;
  background-image: url('/assets/images/Banner Page/DespreNoi.jpg');
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

// Content Section
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
  padding-bottom: 8vh;

  @media (max-width: 767px) { font-size: 0.9rem; }
  @media (min-width: 768px) and (max-width: 950px) { font-size: 1rem; }
`;

const ResponsiveHighlight = styled.b`
  color: #FAC82D;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.2);
  font-weight: 700;
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 767px) { font-size: 1.2rem; }
  @media (min-width: 768px) and (max-width: 950px) { font-size: 1.4rem; }
  @media (min-width: 951px) and (max-width: 1500px) { font-size: 1.6rem; }
`;

// background section
const VideoBackground = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  background: linear-gradient(160deg, rgba(40, 32, 90, 0.95), rgba(72, 61, 139, 0.92), rgba(52, 52, 110, 0.95));
  height: auto;
  padding-bottom: 10vh;
  padding-top: 6vh;

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
    opacity: 0.16;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(167, 139, 250, 0.1), transparent 35%, transparent 65%, rgba(96, 165, 250, 0.1));
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const CeESUDescription2 = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #ffffff;
  max-width: 70%;
  margin: 0 auto;
  text-align: justify;
  padding: 0 20px;

  @media (max-width: 767px) { font-size: 0.9rem; }
  @media (min-width: 768px) and (max-width: 950px) { font-size: 1rem; }
`;

const CeESUMotto = styled.h2`
  color: #fac82d;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.2);
  margin-top: 30px;

  @media (max-width: 767px) { font-size: 1.6rem; }
  @media (min-width: 768px) and (max-width: 950px) { font-size: 1.8rem; }
  @media (min-width: 951px) and (max-width: 1500px) { font-size: 2.1rem; }
`;

// Slideshow
const SlideshowContainer = styled.div`
  position: relative;
  max-width: 70vw;
  margin: 5vh auto 8vh auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
`;

const Slide = styled.div<{ $active: boolean }>`
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

// Testimonials images
const testimonialImages = [
  "/assets/images/Testimoniale/testimoniale-01.png",
  "/assets/images/Testimoniale/testimoniale-02.png",
];

const DespreNoi = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n: number) => {
    let newIndex = slideIndex + n;
    if (newIndex >= testimonialImages.length) newIndex = 0;
    if (newIndex < 0) newIndex = testimonialImages.length - 1;
    setSlideIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <>
      <Header />
      <MainWrap>
        <HeroSection>
          <HeroTitle>DESPRE NOI</HeroTitle>
        </HeroSection>

        <CeESU>
          <CeESUDescription>
            <ResponsiveHighlight>Engineering Summer University</ResponsiveHighlight> nu este doar o simplă tabără de vară, ci o experiență care îți schimbă ritmul, perspectiva și, poate, chiar planurile de viitor. Timp de două săptămâni, ieși din rutina de zi cu zi și intri într-un mediu complet nou, unde fiecare zi aduce ceva diferit. Alături de elevi de clasa a XI-a din toată țara, ajungi să faci parte dintr-o comunitate plină de energie, curiozitate și dorință de a descoperi mai mult.
            <br /><br />
            Pe parcursul acestor zile, vei simți cum e să trăiești ca un student: vei sta în cămin, vei împărți experiențe cu oameni noi și vei lega prietenii care, adesea, continuă și după finalul taberei. Atmosfera de campus, serile petrecute împreună, glumele, provocările și momentele spontane sunt cele care transformă totul într-o amintire de neuitat.
            <br /><br />
            Activitățile sunt gândite astfel încât să nu simți că „înveți” în sensul clasic, ci mai degrabă că explorezi. Vei descoperi lucruri noi prin experiențe practice, vei lucra în echipă, vei participa la provocări interactive și vei avea ocazia să interacționezi cu domenii cu care poate nu le-ai mai luat în calcul până acum. Totul se întâmplă într-un mod dinamic, relaxat și prietenos, unde accentul cade pe curiozitate și implicare, nu pe presiune.
            <br /><br />
            În același timp, vei ieși din zona de confort fără să-ți dai seama. Fie că este vorba de a cunoaște oameni noi, de a vorbi în fața altora sau de a încerca activități complet diferite, fiecare zi te ajută să devii mai încrezător și mai deschis.
          </CeESUDescription>
        </CeESU>

        <VideoBackground>
          <CeESUDescription2>
            Engineering Summer University înseamnă, în esență, experiență: oameni, emoții, energie și amintiri. Este genul de vară pe care nu doar o trăiești, ci o povestești mai departe. Dacă vrei să simți cum e să faci parte dintr-o astfel de comunitate și să ai două săptămâni care chiar contează, acesta e momentul să îți dai frâu liber la experimentat în perioada 18 iulie - 1 august și să ni te alături în povestea ce urmează scrisă!
          </CeESUDescription2>
          <CeESUMotto>Dive into the journey of a lifetime!</CeESUMotto>
        </VideoBackground>

        <CeESU>
          <CeESUTitle>Uite ce au zis foștii participanți despre ESU</CeESUTitle>
        </CeESU>

        <SlideshowContainer>
          {testimonialImages.map((img, idx) => (
            <Slide key={idx} $active={slideIndex === idx}>
              <img src={img} alt={`Testimonial ${idx + 1}`} />
            </Slide>
          ))}
          <PrevArrow onClick={() => plusSlides(-1)}>❮</PrevArrow>
          <NextArrow onClick={() => plusSlides(1)}>❯</NextArrow>
          <DotsContainer>
            {testimonialImages.map((_, idx) => (
              <Dot
                key={idx}
                $active={slideIndex === idx}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </DotsContainer>
        </SlideshowContainer>

        <Footer />
      </MainWrap>
    </>
  );
};

export default DespreNoi;
