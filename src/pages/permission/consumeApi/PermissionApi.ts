import axios, { AxiosResponse } from "axios";
import { urlProduct } from "../../../config/endpointsConfig";

import {productList} from "../../../models/product";


export const getAll =async() =>{
  let permissions: productList[]=[];
  await axios
    .get(urlProduct)
    .then((response) => {
      permissions = response.data;
    })
    .catch((error) =>
      console.error("Error al obtener datos de Productoss. Detalles: ", error.toString())
    );
  return permissions;
};