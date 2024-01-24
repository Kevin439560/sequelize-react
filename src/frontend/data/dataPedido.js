import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Axios from "axios";

export const usePedido = () => {

    const {data: item, isLoading, error } = useQuery({
        queryKey:["pedido"],
        queryFn: async () => {
            const response = await Axios.get("http://localhost:3001/get/Pedido");
            return response.data;
        }

    });

    return {item, isLoading, error}
}

export const usePedidoAdd = () =>{

    const queryClient = useQueryClient();
 
    const {mutateAsync: addPedido} = useMutation({

        mutationFn: async (dados) => {

            const response = await Axios.post('http://localhost:3001/create', {

                table: "Pedido",

                data: dados

            });

            return response.data;
        },

        onSuccess: () =>{
            queryClient.invalidateQueries(["pedido"])
        }
    });

    return {addPedido};
}