import {
  GridProjects,
  TechLogoDesc,
  H2,
  ProjectsSection,
} from "./StylesProyect";

import { projects } from "../../assets/img/index";
import { imgtech } from "../../assets/img/index";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import Card from "./CardProjects";

function Projects() {
  const [text, count] = useTypewriter({
    words: ["Projects"],
    delaySpeed: 2000,
  });
  return (
    <ProjectsSection
    
    >
      <H2
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
      >
        {text}
        <Cursor cursorColor="#00FF40" />
      </H2>
      <GridProjects
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Card
          repository={"https://github.com/CristyCanalla/ilcane/tree/main/peliqueria%20canina"}
          url={"https://peluqueriailcane.netlify.app/"}
          projects={projects.ilcane}
          imgtech={imgtech.html}
          imgtech2={imgtech.css}
          imgtech3={imgtech.js}
          imgtech4={imgtech.bootstrap}
          description={
            "Dog grooming website"
          }
        ></Card>
        <Card
          repository={"https://github.com/CristyCanalla/Tic-Tac-Toe/tree/main/tic-tac-toe-main"}
          url={"https://tictactoevirtual.netlify.app/"}
          projects={projects.tictactoe}
          imgtech={imgtech.js}
          imgtech2={imgtech.css}
          imgtech3={imgtech.html}
          imgtech4={imgtech.vscode}
          description={
            "Tic-Tac-Toe"
          }
        ></Card>
        <Card
          repository={"https://github.com/CristyCanalla/Calcultator4.0"}
          url={"https://calculatorvirtual.netlify.app/"}
          projects={projects.calculator}
          imgtech={imgtech.html}
          imgtech2={imgtech.css}
          imgtech3={imgtech.sass}
          imgtech4={imgtech.js}
          description={
            "Calculator"
          }
        ></Card>
        <Card
          repository={"https://github.com/CristyCanalla/virtualcode"}
          url={"https://virtual-code.netlify.app/"}
          projects={projects.virtualcode}
          imgtech={imgtech.html}
          imgtech2={imgtech.css}
          imgtech3={imgtech.js}
          imgtech4={imgtech.git}
          description={
            "Virtual Code website"
          }
        ></Card>
      </GridProjects>
    </ProjectsSection>
  );
}

export default Projects;
