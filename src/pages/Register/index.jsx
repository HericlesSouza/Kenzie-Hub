import { useState } from "react";
import Logo from "../../assets/Kenzie_Hub.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { StyledDiv, StyledForm, StyledInputMask } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import 'animate.css';

export const Register = () => {
  const [registerError, setRegisterError] = useState(false);
  const navigate = useNavigate();

  const userRegister = async (infoUser) => {
    const id = toast.loading("Por favor espere...");
    try {
      await api.post("/users", infoUser);

      toast.update(id, {
        render: "Conta criada com sucesso!",
        type: "success",
        isLoading: false,
        theme: "dark",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        navigate("/");
      }, 3400);
    } catch (error) {
      if (error.response.data.message === "Email already exists") {
        setRegisterError(true);
        toast.update(id, {
          render: "Endereço de e-mail já existe!",
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
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const submit = async (data) => {
    setRegisterError(false);
    delete data.passwordConfirmed;
    await userRegister(data);
    reset({
      password: "",
      passwordConfirmed: "",
    });
  };

  return (
    <StyledDiv className="container animate__animated animate__bounceInLeft">
      <div>
        <img src={Logo} alt="Kenzie Hub Logo" />
        <Link to={"/"}>Voltar</Link>
      </div>
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <h2>Crie sua conta</h2>
        <span>Rápido e grátis, vamos nessa</span>
        <label htmlFor="name">Nome</label>
        <Input
          id={"name"}
          type={"text"}
          placeholder={"Digite aqui seu nome"}
          register={register("name")}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <label htmlFor="email">Email</label>
        <Input
          id={"email"}
          type={"email"}
          placeholder={"Digite aqui seu email"}
          register={register("email")}
        />
        {registerError && (
          <p className="error">Endereço de e-mail já existe!</p>
        )}
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label htmlFor="password">Senha</label>
        <Input
          id={"password"}
          type={"password"}
          placeholder={"Digite aqui sua senha"}
          register={register("password")}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <label htmlFor="passwordConfirmed">Confirmar senha</label>
        <Input
          id={"passwordConfirmed"}
          type={"password"}
          placeholder={"Digite aqui sua senha novamente"}
          register={register("passwordConfirmed")}
        />
        {}
        {errors.passwordConfirmed && (
          <p className="error">{errors.passwordConfirmed.message}</p>
        )}

        <label htmlFor="bio">Bio</label>
        <Input
          id={"bio"}
          type={"text"}
          placeholder={"Fale sobre você"}
          register={register("bio")}
        />
        {errors.bio && <p className="error">{errors.bio.message}</p>}

        <label htmlFor="contact">Contato</label>
        <StyledInputMask placeholder="(XX) XXXXX-XXXX" mask=" (99) 99999-9999" maskChar="_" {...register("contact")}/>
        {errors.contact && <p className="error">{errors.contact.message}</p>}
        
        <label htmlFor="course_module">Selecionar módulo</label>
        <Select id={"course_module"} register={register("course_module")}>
          <option value="" hidden>
            Selecionar
          </option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </Select>
        {errors.course_module && (
          <p className="error">{errors.course_module.message}</p>
        )}

        <Button type={"submit"} color={"btnPrimary"} size={"medium"}>
          Cadastrar
        </Button>
      </StyledForm>
    </StyledDiv>
  );
};
