import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SocialCard, GridSocial, ContactTitle, SectionContact } from "./StylesContact";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
function Contact() {
  const [text, count] = useTypewriter({
    words: ["Contact"],
    delaySpeed: 2000,
  });
  return (
    <SectionContact>
    <ContactTitle>
      {text}
    <Cursor />
    </ContactTitle>
    <GridSocial id="contact">
        <a target='blank' href="https://www.linkedin.com/in/mcgdeveloper">
       <SocialCard CardBg="Linkedin">
          <FaLinkedin color="white" size={50} />
       </SocialCard>
        </a>
        <a target='blank' href="mailto:mcgfullstackdeveloper@gmail.com">
      <SocialCard CardBg="Gmail">
          <SiGmail color="white" size={50} />
      </SocialCard>
        </a>
        <a target='blank' href="https://github.com/CristyCanalla">
      <SocialCard CardBg="Github">
          <FaGithub color="white" size={50} />
      </SocialCard>
        </a>
     
        <a target='blank' href="https://wa.link/q1bnvv">
      <SocialCard CardBg="WhatsApp">
          <FaWhatsappSquare color="white" size={50} />
          
      </SocialCard>
        </a>
    </GridSocial>
    </SectionContact>
  );
}

export default Contact;
