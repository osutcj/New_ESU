import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Hero Section
const HeroSection = styled.section`
  position: relative;
  background-image: url('/assets/images/Banner Page/Echipa.jpg');
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

  @media (max-width: 1800px) { font-size: 5.2rem; line-height: 1.3; }
  @media (max-width: 1500px) { font-size: 4.4rem; line-height: 1.3; }
  @media (max-width: 950px) { font-size: 3.8rem; line-height: 1.25; }
  @media (max-width: 768px) { font-size: 2.6rem; line-height: 1.2; padding: 0 10px; }
`;

const MainWrap = styled.main`
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const TeamSection = styled.section`
  padding: 20px 0;
`;

// Team Member Card
const TeamCard = styled.div`
  width: 75vw;
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, rgba(40, 32, 90, 0.95), rgba(72, 61, 139, 0.92), rgba(52, 52, 110, 0.95));
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  font-family: 'Poppins', sans-serif;
  margin: 30px auto;
  min-height: 300px;
  flex-wrap: wrap;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle, rgba(255, 255, 255, 0.9) 0 1px, transparent 1.4px),
      radial-gradient(circle, rgba(196, 181, 253, 0.7) 0 0.8px, transparent 1.2px),
      radial-gradient(circle, rgba(147, 197, 253, 0.72) 0 1px, transparent 1.4px);
    background-size: 180px 60px;
    opacity: 0.12;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 950px) {
    flex-direction: column;
    height: auto;
    padding: 15px;
    margin-bottom: 20px;
    margin-top: 30px;
  }
`;

const LeftSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;

  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const Photo = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  margin-bottom: 30px;
  overflow: hidden;
  background: linear-gradient(145deg, #1a5fb4, #0d3a73);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fac82d;
  font-size: 3rem;
  font-weight: bold;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 40px;

  a {
    color: white;
    font-size: 25px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #fac82d;
    }
  }

  @media (max-width: 950px) {
    margin-bottom: 3vh;
  }
`;

const RightSection = styled.div`
  width: 40%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  color: #ffffff;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 30px;
    margin-top: -5%;
    font-family: 'Poppins', sans-serif;
    text-align: center;
  }

  h3 {
    font-size: 1.3rem;
    color: #FAC82D;
    margin-bottom: 5%;
    margin-top: -10px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    opacity: 1;
    font-family: 'Poppins', sans-serif;
    text-align: justify;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding-left: 0;

    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.2rem; }
    p { font-size: 1rem; }
  }

  @media (min-width: 768px) and (max-width: 950px) {
    width: 100%;
    text-align: center;
    padding-left: 0;

    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.2rem; }
  }

  @media (min-width: 950px) and (max-width: 1500px) {
    h2 { font-size: 1.6rem; }
    h3 { font-size: 1.1rem; }
    p { font-size: 0.85rem; }
  }

  @media (min-width: 1500px) and (max-width: 1800px) {
    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.2rem; }
    p { font-size: 1rem; }
  }
`;

const ExtraRightSection = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
    height: auto;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

// Team member data
const teamMembers = [
  {
    name: "Călin Bogdan-Secară ",
    role: "Coordonator",
    quote: "Pentru mine ESU nu este doar un simplu proiect, ESU este locul în care eu mi-am dat seama că să spui “DA” când îți apare în cale o oportunitate este singurul lucru corect de făcut. Pentru mine această experiență se simte deja ca acasă, iar dacă ar trebui să descriu tabăra aș spune exact asa: “ESU NU POATE FI POVESTIT, POATE FI DOAR TRĂIT”",
    photo: "/assets/images/Echipa/Calin.jpeg",
    icon: "/assets/images/Forme/mana.png",
    facebook: "https://www.facebook.com/profile.php?id=100005923397549",
    instagram: "https://www.instagram.com/secaracalin?igsh=MXF3MDY1Z25veWdobA==&utm_source=qr",
  },
  {
    name: "Ormindean Vlad-Cosmin",
    role: "Responsabil BC",
    quote: "Nu m-aș fi gândit că, acum doi ani, atunci când am fost voluntar, cele două săptămâni petrecute în tabăra de vară ESU îmi vor lăsa atât de multe emoții, trăiri și amintiri frumoase. Este o experiență pe care trebuie să o vezi cu ochii tăi ca să o poți înțelege cu adevărat.",
    photo: "/assets/images/Echipa/Vlad.jpeg",
    icon: "/assets/images/Forme/glob.png",
    facebook: "https://www.facebook.com/share/1Qt3rsg3aP/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/__vld._?igsh=MThybG00M3V6N21hYw%3D%3D&utm_source=qr",
  },
  {
    name: "Bugnar Daria-Iulia",
    role: "Secretar",
    quote: "Două săptămâni la ESU mi-au resetat tot ce credeam că știu despre facultate, oameni și viitor. A fost și va rămâne cea mai frumoasă experiență. Nu se poate explica în cuvinte, ci trebuie trăită. E locul perfect să descoperi ce ți se potrivește și să-ți creezi amintiri și prietenii care devin parte din tine, dincolo de vară.",
    photo: "/assets/images/Echipa/Daria.jpg",
    icon: "/assets/images/Forme/ochi.png",
    facebook: "https://www.facebook.com/daria.bugnar.9",
    instagram: "https://www.instagram.com/daria.bugnar?igsh=bmttMTVocmp2dDV5&utm_source=qr",
  },
  {
    name: "Neacşu Andreea-Mihaela",
    role: "Co-coordonator",
    quote: "Pentru mine nu au fost doar două săptămâni de vară la ESU, ci un moment care m-a schimbat pe interior și mi-a creat amintiri pe care nu le voi putea uita niciodată. Nu există suficiente cuvinte să explici ce înseamnă ESU cu adevărat, din această cauză trebuie să îl trăiești. Totuși  există un singur cuvânt prin care aș putea descrie acest proiect: “ACASĂ”.",
    photo: "/assets/images/Echipa/Teky.jpg",
    icon: "/assets/images/Forme/luna.png",
    facebook: "https://www.facebook.com/share/1DKhsdjDsP/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/andreea_teky?igsh=MXA1cmFybjM1ajkxeg==&utm_source=qr",
  },
  {
    name: "Secară Diana-Gabriela",
    role: "Co-coordonator",
    quote: "M-am aventurat in universul ESU pe cont propriu, insa nu aveam idee ca aceasta tabără imi va dărui o nouă versiune a mea și ca ma transforma in cele mai frumoase moduri. Am avut de învățat din fiecare moment și de la fiecare persoana, iar toate experiențele cumulate mi-au colorat vara și sufletul. ESU este și va fi mereu pentru mine sinonim cu “Acasă”.",
    photo: "/assets/images/Echipa/Diana.jpeg",
    icon: "/assets/images/Forme/stea.png",
    facebook: "https://www.facebook.com/share/1DL4LaanCR/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/dia.secara?igsh=MXViMjNkMnFjOWpodg%3D%3D&utm_source=qr",
  },
  {
    name: "Cîrtiță Bianca-Yolanda",
    role: "Co-coordonator",
    quote: "Când am completat formularul pentru a fi voluntar nu mă gândeam că niște oameni cu care voi petrece 2 săptămâni îmi vor schimba percepția asupra unei “simple tabere de vară”, pentru că ESU nu e doar atât. ESU este o experiență care nu poate fi descrisă în cuvinte, trebuie trăită. ESU înseamnă prietenie, amintiri, legături care se mențin peste ani.",
    photo: "/assets/images/Echipa/Bia.jpg",
    icon: "/assets/images/Forme/fluture.png",
    facebook: "https://www.facebook.com/share/1BtvPJWoFR/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/bianca_cirtita?igsh=MXFpa2hrY2szMXExZA==&utm_source=qr",
  },
  {
    name: "Dumitrean Denis-Andrei",
    role: "Responsabil Activități",
    quote: "Nu credeam niciodată că o tabără de vară ar putea deveni o experiență de viață pe care nu o voi uita niciodată. Am cunoscut o mulțime de oameni noi, cu personalități diferite, dar cu un scop comun: de a accepta o nouă provocare. ESU reprezintă contextul perfect de a crea legături reale cu persoane noi, de a-ți îmbunătăți aptitudinile și de a deveni cea mai bună versiune a ta, alături de cei mai faini oameni.",
    photo: "/assets/images/Echipa/Denis.jpg",
    icon: "/assets/images/Forme/clepsidra.png",
    facebook: "https://www.facebook.com/profile.php?id=100040343001602",
    instagram: "https://www.instagram.com/denis._071?igsh=MWVtejAwYTJ0eTNqeQ==",
  },
  {
    name: "Armean Andrei",
    role: "Responsabil Activități",
    quote: "ESU nu este doar o tabără, este un loc din care pleci cu totul alta persoana. În acele doua saptamani mi-am dat seama ca aveam un gol în suflet pe care fiecare provocare, fiecare amintire, fiecare emoție au reușit să-l umple. Nu poti sa intelegi dacă nu ai fost aici și nu poți sa mai uiți dacă ai fost aici. Asta e ESU!",
    photo: "/assets/images/Echipa/Andrei.jpeg",
    icon: "/assets/images/Forme/bagheta.png",
    facebook: "https://www.facebook.com/share/1DntSzm8pC/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/andrei.armean/",
  }
 
];

const Echipa = () => {
  return (
    <>
      <Header />
      <MainWrap>
        <HeroSection>
          <HeroTitle>
            <span className="line1">MEET THE ESU</span><br />
            <span className="line2">TEAM</span>
          </HeroTitle>
        </HeroSection>

        <TeamSection>
          {teamMembers.map((member, index) => (
            <TeamCard key={index}>
              <LeftSection>
                <Photo>
                  <img src={member.photo} alt={member.name} />
                </Photo>
                <SocialLinks>
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </SocialLinks>
              </LeftSection>

              <RightSection>
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <p><i>"{member.quote}"</i></p>
              </RightSection>

              <ExtraRightSection>
                <img src={member.icon} alt="Icon" />
              </ExtraRightSection>
            </TeamCard>
          ))}
        </TeamSection>

        <Footer />
      </MainWrap>
    </>
  );
};

export default Echipa;
