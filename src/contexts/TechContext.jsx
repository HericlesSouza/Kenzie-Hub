import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { userLogged } = useContext(UserContext);
  const [listTechnologies, setListTechnologies] = useState([]);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [technologySelected, setTechnologySelected] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await api.get(`/users/${userLogged.id}`);
        setListTechnologies(request.data.techs);
      } catch (error) {}
    })();
  }, [modalCreate, modalEdit]);

  const createTechnologies = async (data) => {
    const id = toast.loading("Por favor espere...");
    try {
      api.defaults.headers.common.authorization = `Bearer ${userLogged.token}`;
      await api.post("/users/techs", data);

      toast.update(id, {
        render: "Tecnologia cadastrada com sucesso!",
        type: "success",
        isLoading: false,
        theme: "dark",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setModalCreate(false);
    } catch (error) {
      toast.update(id, {
        render: "Está tecnologia já foi cadastrada!",
        type: "error",
        isLoading: false,
        theme: "dark",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const openModalEditTechnologies = (event) => {
    const actualTechnology = listTechnologies.find((element) => {
      return element.id === event.currentTarget.id;
    });

    setTechnologySelected(actualTechnology);
    setModalEdit(true);
  };

  const editTechnologies = async (data) => {
    const id = toast.loading("Por favor espere...");
    try {
      api.defaults.headers.common.authorization = `Bearer ${userLogged.token}`;
      await api.post(`/users/techs/${technologySelected.id}`, data);
      toast.update(id, {
        render: "Tecnologia atualizada com sucesso!",
        type: "success",
        isLoading: false,
        theme: "dark",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setModalEdit(false);
    } catch (error) {
      toast.update(id, {
        render: "Ops, algo deu errado!",
        type: "success",
        isLoading: false,
        theme: "dark",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const deleteTechnologies = async () => {
    const id = toast.loading("Por favor espere...");
    try {
      api.defaults.headers.common.authorization = `Bearer ${userLogged.token}`;

      await api.delete(`/users/techs/${technologySelected.id}`);

      toast.update(id, {
        render: "Tecnologia deletada com sucesso!",
        type: "success",
        isLoading: false,
        theme: "dark",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setModalEdit(false);
    } catch (error) {
      toast.update(id, {
        render: "Ops, algo deu errado!",
        type: "success",
        isLoading: false,
        theme: "dark",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <TechContext.Provider
      value={{
        listTechnologies,
        createTechnologies,
        modalCreate,
        setModalCreate,
        modalEdit,
        setModalEdit,
        openModalEditTechnologies,
        editTechnologies,
        technologySelected,
        deleteTechnologies,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
