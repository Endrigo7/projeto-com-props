import { useEffect, useState } from "react";

const ContadorClick = () => {
    
    const [contador, setContador] = useState(10);
    const [cor, setCor] = useState("cor-rosa");
    
    useEffect(() => {
        applyEffects();
    }, [contador])

    const applyEffects = () => {
        ajustaTitulo();
        ajustaCor();
    }

    const ajustaTitulo = () => {
        document.title = `O valor do contador é ${contador}` ;
    }

    const ajustaCor = () => {
        const novaCor = (contador % 2 == 0) ? "cor-rosa" : "cor-azul";
        setCor(novaCor);
    }

    const contar = () => {
        setContador(contador + 1);
    }

    return(
        <div>
            <h2 className={cor}>Meu valor atual é : {contador}</h2>
            <button className="botao" onClick={contar}>Clique ai para somar um (1)</button>
        </div>
    );
}

export default ContadorClick;
