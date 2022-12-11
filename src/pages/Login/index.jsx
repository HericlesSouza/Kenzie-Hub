import { Link } from "react-router-dom";
import Logo from "../../assets/Kenzie_Hub.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { StyledDiv, StyledForm } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { useState, useEffect } from "react";
import "animate.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Login = () => {
  const { navigate, userLogin, registerError, setRegisterError, userLogged } =
    useContext(UserContext);

  const [checkUserLogged, setCheckUserLogged] = useState(false);

  useEffect(() => {
    if (userLogged) {
      setCheckUserLogged(true);
    }
    if (checkUserLogged) {
      navigate("/dashboard");
    }
    setRegisterError(false);
  }, [checkUserLogged]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "submit",
    resolver: yupResolver(loginSchema),
  });

  const submit = async (data) => {
    setRegisterError(false);
    registerError;
    await userLogin(data);
    reset({
      password: "",
    });
  };

  return (
    <StyledDiv className="container animate__animated animate__bounceInLeft">
      <img src={Logo} alt="Kenzie Hub Logo" />
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <Input
          id={"email"}
          type={"text"}
          placeholder={"Digite aqui seu email"}
          register={register("email")}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label htmlFor="password">Senha</label>
        <Input
          id={"password"}
          type={"password"}
          placeholder={"Digite aqui sua senha"}
          register={register("password")}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        {registerError && <p className="error">Email e/ou senha inválidos.</p>}

        <Button color={"btnPrimary"} size={"medium"}>
          Entrar
        </Button>
        <span>Ainda não possui uma conta?</span>
        <Link to={"/register"}>Cadastre-se</Link>
      </StyledForm>
    </StyledDiv>
  );
};
