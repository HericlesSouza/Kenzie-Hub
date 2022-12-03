import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Kenzie_Hub.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { StyledDiv, StyledForm } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { api } from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [registerError, setRegisterError] = useState(false);
  const navigate = useNavigate();

  const userLogin = async (infoUser) => {
    const id = toast.loading("Por favor espere...");
    try {
      const request = await api.post("/sessions", infoUser);

      toast.update(id, {
        render: "Login efetuado com sucesso!",
        type: "success",
        isLoading: false,
        theme: "dark",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(request)
      setTimeout(() => {
        navigate("/dashboard");
      }, 1400);
    } catch (error) {
  
        setRegisterError(true);
        toast.update(id, {
          render: "Ops! Algo deu errado!",
          type: "error",
          isLoading: false,
          theme: "dark",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      
    }
  };

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
    await userLogin(data);
    reset({
      password: "",
    });
    console.log(data);
  };

  return (
    <StyledDiv className="container">
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
