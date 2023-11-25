const PropsJson = (props) => {
    return(
        <div>
            <h2>Informações do Aluno</h2>
            <p>Nome: {props.alunos[0].nome}</p>
            <p>CPF: {props.alunos[0].cpf}</p>
            <p>Endereco: {props.alunos[0].endereco}</p>
            <hr />
            <p>Nome: {props.alunos[1].nome}</p>
            <p>CPF: {props.alunos[1].cpf}</p>
            <p>Endereco: {props.alunos[1].endereco}</p>
            <hr />
            <p>Nome: {props.alunos[2].nome}</p>
            <p>CPF: {props.alunos[2].cpf}</p>
            <p>Endereco: {props.alunos[2].endereco}</p>
            <hr />
        </div>
    );
}

export default PropsJson;
