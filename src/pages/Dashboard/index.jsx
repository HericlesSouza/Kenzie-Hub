import { StyledDiv } from "./style";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Kenzie_Hub.svg";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import "animate.css";

export const Dashboard = () => {
  const [infoUser, setInfoUser] = useState({});
  const [checkUserLogged, setCheckUserLogged] = useState(true);
  const navigate = useNavigate();
  const userLogged = JSON.parse(localStorage.getItem("@userLogged"));

  useEffect(() => {
    if (!userLogged) {
      setCheckUserLogged(false);
    }
    if (!checkUserLogged) {
      navigate("/");
    }
  }, [checkUserLogged]);

  useEffect(() => {
    if (userLogged) {
      const checkUser = async () => {
        try {
          const request = await api.get(`/users/${userLogged.id}`);
          setInfoUser(request.data);
        } catch (error) {
          console.log(error);
        }
      };
      checkUser();
    }
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <StyledDiv className="animate__animated animate__bounceInLeft">
      <header>
        <div className="container">
          <img src={Logo} alt="Logo Kenzie Hub" />
          <Link to={"/"} onClick={() => clearLocalStorage()}>
            Desconectar
          </Link>
        </div>
      </header>
      <section>
        <div className="container">
          <h1>Olá, {infoUser.name}</h1>
          <p>{infoUser.course_module}</p>
        </div>
      </section>
      <section className="container">
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </section>
    </StyledDiv>
  );
};
