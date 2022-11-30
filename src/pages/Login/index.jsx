import Logo from "../../assets/Kenzie_Hub.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { StyledDiv, StyledForm } from "./style";
export const Login = () => {
  return (
    <StyledDiv className="container">
      <img src={Logo} alt="Kenzie Hub Logo" />
      <StyledForm>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <Input
          id={"email"}
          type={"text"}
          placeholder={"Digite aqui seu email"}
        />
        <label htmlFor="password">Senha</label>
        <Input
          id={"password"}
          type={"password"}
          placeholder={"Digite aqui sua senha"}
        />
        <Button color={"btnPrimary"} size={"medium"}>Entrar</Button>
        <span>Ainda não possui uma conta?</span>
        <Button color={"btnGreyLight"} size={"medium"}>Cadastre-se</Button>
      </StyledForm>
      <p></p>
    </StyledDiv>
  );
};
