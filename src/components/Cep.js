import axios from "axios";
import { useEffect, useState } from "react";

const Cep = () => {
    const urlCepBruna = "https://brasilaberto.com/api/v1/zipcode/54450170";
    const [cep, setCep] = useState(null);
    
    useEffect(() => {
        axios.get(urlCepBruna).then((response) => {
            setCep(response.data.result);    
        });
    }, []);

    if (!cep) return(
        <div>
            <h1>Não foi encontrado informações para o CEP de Bruna</h1>
        </div>
    );

    return (
        <div>
           <h2>Endereço de Bruna recebido do backend de CEP</h2> 
           <div>
                <strong>Rua: </strong> 
                <p>{cep.street}</p>
           </div>
           <div>
                <strong>Cidade: </strong> 
                <p>{cep.city}</p>
           </div>
        </div>
    );
}

export default Cep;