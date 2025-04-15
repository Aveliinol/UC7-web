import React, { useState } from "react";
import ListarAlunos from "../../components/aluno/ListarAluno/ListarAlunos";
import CadastrarAluno from "../../components/aluno/CadastrarAluno/CadastrarAluno";
import BuscarAluno from "../../components/aluno/BuscarAluno/BuscarAluno";
import styles from "./GerenciarAluno.module.css"

function GerenciarAlunos(){
  const [atualizarLista, setAtualizarLista] = useState(false);   
  const Refresh = () => { 
  
    setAtualizarLista((prev) => !prev); 
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.tituloPrincipal}>Gestão de Alunos</h1>
      
      <div className={styles.linhaPrincipal}>
      
        <div className={styles.colunaEsquerda}>
            
          <div className={styles.buscar}>
            <BuscarAluno />
          </div>

          <div className={styles.cadastro}>
            <CadastrarAluno onCadastro={Refresh} />
          </div>
        </div>

        <div className={styles.colunaDireita}>
          <ListarAlunos refreshTrigger={atualizarLista} />
        </div>
      </div>
    </div>
  );
}
export default GerenciarAlunos;