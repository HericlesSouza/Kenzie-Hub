import { AiOutlinePlus } from "react-icons/ai";
import { StyledDiv } from "./style";
import { Button } from "../../components/Button";
import Logo from "../../assets/Kenzie_Hub.svg";
import { ListTechnologies } from "../../components/ListTechnologies";

export const Dashboard = () => {
  return (
    <StyledDiv>
      <header>
        <div className="container">
          <img src={Logo} alt="Logo Kenzie Hub" />
          <Button color={"btnGreyDark"} size={"small"} width={"max-content"}>
            Sair
          </Button>
        </div>
      </header>
      <section>
        <div className="container">
          <h1>Olá, Samuel Leão</h1>
          <p>Primeiro módulo (Introdução ao Frontend)</p>
        </div>
      </section>
      <section className="container">
        <div>
          <h2>Tecnologias</h2>
          <Button color={"btnGreyDark"} size={"small"} width={"max-content"}>
            +
          </Button>
        </div>
        <ListTechnologies />
      </section>
    </StyledDiv>
  );
};
