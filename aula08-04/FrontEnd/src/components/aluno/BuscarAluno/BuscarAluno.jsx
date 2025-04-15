import React, { useState } from 'react';
import styles from './BuscarAluno.module.css';
import { listarPorMatricula } from '../../../service/alunoService'; 


function BuscarAluno() { 
  const [matricula, setMatricula] = useState(''); 
  const [alunos, setAlunos] = useState([]);
  const [erro, setErro] = useState(''); 

  async function Buscar(event) { 

    event.preventDefault(); 
    
    try {
      const res = await listarPorMatricula(matricula); 
      const data = res.data;
      
      if (Array.isArray(data) && data.length > 0) {
        setAlunos(data); 
        setErro(''); 
      } else {
        setAlunos([]); 
        setErro('Nenhum aluno encontrado.'); 
      }
    } catch (error) {
      setAlunos([]); 
      setErro(error.response.data.erro || 'Erro ao buscar aluno.'); 
    }
  }

  return (
    <div className={styles.container}>

      <h2>Buscar Aluno</h2>

      <form onSubmit={Buscar}>
        
        <input
          type="text"
          placeholder="Digite a matrícula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Buscar</button>
      </form>

      {erro && <p className={styles.error}>{erro}</p>}
      
      {alunos.length > 0 && (
        <div className={styles.resultado}>
          
          {alunos.map((aluno) => (
            <div key={aluno.matricula} className={styles.card}>
              <p><strong>Nome:</strong> {aluno.nome}</p>
              <p><strong>Email:</strong> {aluno.email}</p>
              <p><strong>Matrícula:</strong> {aluno.matricula}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BuscarAluno; 