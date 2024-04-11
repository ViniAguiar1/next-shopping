import { QueryClient, useQuery } from "@tanstack/react-query";
import axios, {AxiosResponse}  from "axios";

type Product = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
  };
  
  type Response = {
    products: Product[];
  };

  export function getProducts(){
    return axios
    .get<Response>(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=name&orderBy=ASC"
    )
    .then((response) => response.data.products);
  }

  export const useGetProductsQuery = () => {
    return useQuery({ queryKey: ["products"], queryFn: getProducts });
  };
