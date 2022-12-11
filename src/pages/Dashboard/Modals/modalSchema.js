import { useContext } from "react";
import * as yup from "yup";
import { TechContext } from "../../../contexts/TechContext";



export const createTechnologySchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  status: yup.string().required("Selecione uma opção"),
});

export const editTechnologySchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  status: yup.string().required("Selecione uma opção"),
})