import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerNav = styled(motion.div)`
  position: fixed;
  z-index: 10;
  left: 50%;
  top: 90%;
  @media (min-width: 728px) {
    left: 49%;
    top: 89%;
  }
  @media (max-width: 600px ) {
    display: none;
      
  }
  transform: translate(-50%, -50%);
  width: 400px;
  height: 90px;
  background: #E0E0F8;
  border-radius: 18px;
  padding: .8rem .5rem;
  align-items: center;
  justify-content: center;
  @media (min-width: 600px) {
    width: 600px;
    height: 90px;
    
  }
  @media (min-width: 759px) {
    height: 70px;

  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  @media (min-width: 768px) {
  margin-top: 0;
      
  }
`;
export const Enlace = styled.a`
display: flex;
align-items: center;
justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.1rem;
    margin-right: 1rem;
    background-image: linear-gradient(
    to right,
    #0B0B3B 0%,
    #0B0719 100%);
    background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  :before{
  content: '';
  background: rgb(239, 160, 5);
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}
:hover {
 background-position: 0;
}
:hover::before{
  width: 100%;
}

`;
