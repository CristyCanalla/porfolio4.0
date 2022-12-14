import logo from "../../assets/img/MELOGO.png";
import { LogoSeb, FooterSection  } from "./StylesFooter";

function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <FooterSection>
      <div>
        <LogoSeb src={logo} alt="" />
      </div>
      <div>
        <h3>Made with love 🖤</h3>
        
      </div>
    </FooterSection>
  );
}

export default Footer;
