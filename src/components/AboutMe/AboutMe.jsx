import photo from "../../assets/img/me.jpeg";
import {
  Main,
  AboutGrid,
  Img,
  AboutMeTitle,
  Dowload,
  P,
  Photo,
  InfoContainer,
  FromSpan,
} from "./AboutMeStyles";
function AboutMe() {
  return (
    <Main
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 3 }}
    >
      <AboutGrid>
        <Photo>
          <Img src={photo} alt="" />
        </Photo>
        <InfoContainer>
          <AboutMeTitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            About me
          </AboutMeTitle>
          <P
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            My name is Cristina Gómez, I am currently working in the frontend area but I have a fullstack profile. I am a proactive, dynamic, sociable and
           responsible person who has the ability to learn new
           things quickly. I have an intermediate level of English
          (B1). I am currently focused on growing professionally
          in my career and as a person.
          </P>
          <P
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            <FromSpan>From:</FromSpan> Rosario, Argentina
          </P>
          <Dowload
            target="blank"
            href="https://drive.google.com/file/d/1WPiafhQ6vpeCnWwP_RSWlGRwwh5d5jba/view?usp=sharing"
          >
            Download Cv
          </Dowload>
        </InfoContainer>
      </AboutGrid>
    </Main>
  );
}

export default AboutMe;
