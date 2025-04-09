import React, { useState, useEffect } from "react";
import { listarTodos } from "../../service/alunoService";
import { listarPorMatricula } from "../../service/alunoService";

function ListarAlunos() {
    const [alunos, setAlunos] = useState([]);
    const [errorMsg, setErrorMgs] = useState('')

    async function listarAlunos() {
        try {
            const res = await listarTodos()
            setAlunos(res.data);
        } catch (error) {
            setAlunos([]);
            console.log(error);
            setErrorMgs(error)
        }
    }

    async function listarAlunoMatricula(matricula) {
        try {
            const res = await listarPorMatricula(matricula)
            setAlunos(res.data)
        } catch (error) {
            setAlunos([]);
            console.log(error)
            setErrorMgs(error)
        }
    }


    useEffect(() => {
         listarAlunos()
        //listarAlunoMatricula('a524133')
    }, []);



    return (
                <div>
                    <h1>Listagem de Alunos</h1>
                    <ul>
                        {
                            alunos.map((aluno) => (
                                <li key={aluno.matricula}>
                                    {aluno.nome} - {aluno.email} - Matrícula: {aluno.matricula}
                                </li>
                            ))
                        }
                    </ul>
                </div>

    );

}


export default ListarAlunos;