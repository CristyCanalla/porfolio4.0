import avatar from "../../assets/img/source.gif";
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { ImGithub } from "react-icons/im";
import { Container, Centered, Logo, Bg, P, SocialIcons, A } from "./StylesHero";
import NavBar from "../NavBar/NavBar";

export function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi! I´m Cristina Gómez",
      "Welcome to my porfolio",
      "<enjoy>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <Container id="home">
      <Bg></Bg>
      <Centered>
        <Logo src={avatar} alt="smile" />
        <div>
          <h1>
            <span>{text}</span>
            <Cursor cursorColor="#946e26" />
          </h1>
        </div>
      
        <SocialIcons
          initial={{ x: 0, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <A target="blank" href="https://www.linkedin.com/in/mcgdeveloper">
            <FaLinkedin size={50} style={{ color: "#fff" }} />
          </A>
          <A target="blank" href="https://wa.link/q1bnvv">
            <FaWhatsappSquare size={50} style={{ color: "#fff" }} />
          </A>
          <A target="blank" href="https://github.com/CristyCanalla">
            <ImGithub size={45} style={{ color: "#fff" }} />
          </A>
        </SocialIcons>
      </Centered>
      <NavBar />
    </Container>
  );
}
