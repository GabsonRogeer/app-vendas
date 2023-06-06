import { httpClient } from "../http";
import { Products } from "../models/products";
import { AxiosResponse } from 'axios'

const resourceURL: string = "/api/produtos"


export const useProductService = () => {
    const save = async (product: Products) : Promise<Products> => {
        const reponse: AxiosResponse<Products> = await
            httpClient.post<Products>(resourceURL, product)
        return reponse.data;
    }

    return {
        save
    }
}