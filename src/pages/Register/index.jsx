import Logo from "../../assets/Kenzie_Hub.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { StyledDiv, StyledForm } from "./style";

export const Register = () => {
  return (
    <StyledDiv className="container">
      <div>
        <img src={Logo} alt="Kenzie Hub Logo" />
        <Button color={"btnGreyDark"} size={"small"} width={"max-content"}>
          Voltar
        </Button>
      </div>
      <StyledForm>
        <h2>Crie sua conta</h2>
        <span>Rápido e grátis, vamos nessa</span>
        <label htmlFor="name">Nome</label>
        <Input id={"name"} type={"text"} placeholder={"Digite aqui seu nome"} />
        <label htmlFor="email">Email</label>
        <Input
          id={"email"}
          type={"email"}
          placeholder={"Digite aqui seu email"}
        />
        <label htmlFor="password">Senha</label>
        <Input
          id={"password"}
          type={"password"}
          placeholder={"Digite aqui sua senha"}
        />
        <label htmlFor="passwordConfirmed">Confirmar senha</label>
        <Input
          id={"passwordConfirmed"}
          type={"password"}
          placeholder={"Digite aqui sua senha novamente"}
        />
        <label htmlFor="bio">Bio</label>
        <Input id={"bio"} type={"text"} placeholder={"Fale sobre você"} />
        <label htmlFor="contact">Contato</label>
        <Input
          id={"contact"}
          type={"text"}
          placeholder={"Opção de contato"}
        />
        <label htmlFor="module">Selecionar módulo</label>
        <Select id={"module"}>
          <option value="">Primeiro módulo</option>
          <option value="">Segundo módulo</option>
        </Select>
        <Button color={"btnPrimary"} size={"medium"}>
          Cadastrar
        </Button>
      </StyledForm>
    </StyledDiv>
  );
};
