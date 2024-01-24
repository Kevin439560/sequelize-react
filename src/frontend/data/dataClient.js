import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Axios from "axios";

export const useCliente = () => {

    const {data: item, isLoading, error } = useQuery({
        queryKey:["cliente"],
        queryFn: async () => {
            const response = await Axios.get("http://localhost:3001/get/Cliente");
            return response.data;
        }

    });

    return {item, isLoading, error}
}

export const useClientAdd = () =>{

    const queryClient = useQueryClient();
 
    const {mutateAsync: addCliente} = useMutation({

        mutationFn: async (dados) => {

            const response = await Axios.post('http://localhost:3001/create', {

                table: "Cliente",

                data: dados

            });

            return response.data;
        },

        onSuccess: () =>{
            queryClient.invalidateQueries(["cliente"]);
        }
    });

    return {addCliente};
}