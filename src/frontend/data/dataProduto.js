import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Axios from "axios";

export const useProduto = () => {

    const {data: item, isLoading, error } = useQuery({
        queryKey:["produto"],
        queryFn: async () => {
            const response = await Axios.get("http://localhost:3001/get/Produto");
            return response.data;
        }

    });

    return {item, isLoading, error}
}

export const useProdutoAdd = () =>{

    const queryClient = useQueryClient();
 
    const {mutateAsync: addProduto} = useMutation({

        mutationFn: async (dados) => {

            const response = await Axios.post('http://localhost:3001/create', {

                table: "Produto",

                data: dados

            });

            return response.data;
        },

        onSuccess: () =>{
            queryClient.invalidateQueries(["produto"])
        }
    });

    return {addProduto};
}