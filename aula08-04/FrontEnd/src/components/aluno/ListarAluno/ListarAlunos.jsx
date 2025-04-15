import React, { useState, useEffect } from "react";
import { listarTodos } from "../../../service/alunoService";
import { listarPorMatricula } from "../../../service/alunoService";
import styles from "./ListarAlunos.module.css"

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

    // async function listarAlunoMatricula(matricula) {
    //     try {
    //         const res = await listarPorMatricula(matricula)
    //         setAlunos(res.data)
    //     } catch (error) {
    //         setAlunos([]);
    //         console.log(error)
    //         setErrorMgs(error)
    //     }
    // }


    useEffect(() => {
         listarAlunos()
        //listarAlunoMatricula('a524133')
    }, []);



    return (
        <div className={styles.container}>
        <h2 className={styles.titulo}>Lista de Alunos</h2>
  
        {errorMsg && <p className={styles.error}>{errorMsg}</p>}
  
        <ul className={styles.lista}>
          
          {alunos.map((aluno) => (
            <li key={aluno.matricula} className={styles.item}>
              {aluno.nome} - {aluno.email} - Matrícula: {aluno.matricula}
            </li>
          ))}
        </ul>
      </div>
    );

}


export default ListarAlunos;