import { Alert, StyledDiv, Trash } from "./style";
import { Link } from "react-router-dom";
import Logo from "../../assets/Kenzie_Hub.svg";
import { useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import "animate.css";
import { Button } from "../../components/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { ModalCreateTechnologies, ModalEditTechnologies } from "./Modals";

export const Dashboard = () => {
  const [infoUser, setInfoUser] = useState({});
  const [checkUserLogged, setCheckUserLogged] = useState(true);
  const {
    listTechnologies,
    modalCreate,
    setModalCreate,
    modalEdit,
    openModalEditTechnologies,
  } = useContext(TechContext);
  const { userLogged, navigate, clearLocalStorage} = useContext(UserContext);

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
        }
      };
      checkUser();
    }
  }, []);

  return (
    <StyledDiv className="animate__animated animate__fadeInLeftBig">
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
        <div>
          <h2>Tecnologias</h2>
          <Button
            click={() => setModalCreate(true)}
            type="button"
            color="btnGreyDark"
            width="32"
          >
            <AiOutlinePlusCircle size={"30px"} />
          </Button>
          {modalCreate && <ModalCreateTechnologies />}
        </div>
        {listTechnologies.length === 0 ? (
          <div className="no-technologies">
            <Alert/>
            <h1>
              Não conseguimos encontrar nenhuma tecnologia cadastrada.
            </h1>
          </div>
        ) : (
          <div className="div-list-technologies">
            {modalEdit && <ModalEditTechnologies />}
            <ul>
              {listTechnologies &&
                listTechnologies.map((element) => {
                  return (
                    <li
                      key={element.id}
                      id={element.id}
                      className="animate__animated animate__fadeInLeft"
                      onClick={openModalEditTechnologies}
                    >
                      <h2>{element.title}</h2>
                      <div>
                        <span>{element.status}</span>
                        <button>
                          <Trash />
                        </button>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </section>
    </StyledDiv>
  );
};
