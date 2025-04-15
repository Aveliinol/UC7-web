import React, {useState} from "react";
import { criar } from "../../../service/alunoService";
import styles from "./CadastrarAluno.module.css"


function CadastrarAluno(){
    const[matricula, setMatricula] = useState('');
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[errorMsg, setErrorMsg] = useState('');
    const[sucessoMsg, setSucessoMsg] = useState('');

    async function criarAluno() {
        try {
            await criar({matricula, nome,  email, senha});
            setSucessoMsg('Aluno cadastrado com sucesso!');
            setErrorMsg('')
        } catch (error) {
            setErrorMsg(error.response.data.msg);
        }
    }
    return(
        <div className={styles.container}>
        <h2>Cadastrar Aluno</h2>
        <form onSubmit={criarAluno} className={styles.form}>
          
          <label htmlFor="matricula">Matrícula:</label>
          <input
            id="matricula"
            type="text"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            className={styles.input}
            required
          />
  
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={styles.input}
            required
          />
  
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
  
          <label htmlFor="senha">Senha:</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={styles.input}
            required
          />
  
          <button type="submit" className={styles.button}>Cadastrar</button>
        </form>
  
      </div>
    );

}

export default CadastrarAluno;