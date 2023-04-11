import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Modal } from "../../../components/Modal";
import { Select } from "../../../components/Select";
import { TechContext } from "../../../contexts/TechContext";
import { createTechnologySchema, editTechnologySchema } from "./modalSchema";
import {
  DivContentModal,
  DivHeaderModal,
  IconCloseModal,
  StyledForm,
} from "./style";
import "animate.css";

export const ModalCreateTechnologies = () => {
  const { setModalCreate, createTechnologies } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(createTechnologySchema),
  });

  const submit = async (data) => {
    createTechnologies(data);
  };
  return (
    <Modal>
      <StyledForm
        className="container animate__animated animate__fadeInDown"
        onSubmit={handleSubmit(submit)}
        noValidate
      >
        <DivHeaderModal>
          <h1>Cadastrar Tecnologia</h1>
          <button onClick={() => setModalCreate(false)}>
            <IconCloseModal />
          </button>
        </DivHeaderModal>
        <DivContentModal>
          <div>
            <label htmlFor="title">Nome</label>
            <Input
              id="title"
              type="text"
              placeholder="Nome da tecnologia..."
              register={register("title")}
            />
            {errors.title && <p className="error">{errors.title.message}</p>}
          </div>
          <div>
            <label htmlFor="status">Selecionar status</label>
            <Select id="status" register={register("status")}>
              <option value="" hidden>
                Selecionar
              </option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            {errors.status && <p className="error">{errors.status.message}</p>}
          </div>
          <Button color="btnPrimary" size="medium">
            Cadastrar Tecnologia
          </Button>
        </DivContentModal>
      </StyledForm>
    </Modal>
  );
};

export const ModalEditTechnologies = () => {
  const {
    setModalEdit,
    technologySelected,
    editTechnologies,
    deleteTechnologies,
  } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(editTechnologySchema),
    defaultValues: {
      title: technologySelected.title,
      status: technologySelected.status,
    },
  });

  const updateTechnology = (data) => {
    editTechnologies({ status: `${data.status}` });
  };

  console.log({...register('teste')})

  return (
    <Modal>
      <StyledForm className="container animate__animated animate__fadeInDown">
        <DivHeaderModal>
          <h1>Detalhes da Tecnologia</h1>
          <button onClick={() => setModalEdit(false)}>
            <IconCloseModal />
          </button>
        </DivHeaderModal>
        <DivContentModal>
          <div>
            <label htmlFor="title">Nome da tecnologia</label>
            <Input
              id="title"
              type="text"
              placeholder="Nome da tecnologia..."
              disabled={true}
              color="disabled"
              register={register("title")}
            />
            {errors.title && <p className="error">{errors.title.message}</p>}
          </div>
          <div>
            <label htmlFor="status">Selecionar status</label>
            <Select id="status" register={register("status")}>
              <option value="" hidden>
                Selecionar
              </option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            {errors.status && <p className="error">{errors.status.message}</p>}
          </div>
          <div className="divButtons">
            <Button
              color="btnPrimary"
              size="medium"
              click={handleSubmit(updateTechnology)}
            >
              Salvar alterações
            </Button>
            <Button
              color="btnGreyLight"
              size="medium"
              width="max-content"
              click={handleSubmit(deleteTechnologies)}
            >
              Excluir
            </Button>
          </div>
        </DivContentModal>
      </StyledForm>
    </Modal>
  );
};
