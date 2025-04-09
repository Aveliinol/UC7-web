import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL

export const criar = async (aluno) => axios.post(`${API_URL}/aluno`, aluno);
export const editar = async (matricula, aluno) => axios.put(`${API_URL}/aluno/${matricula}`, aluno);
export const listarTodos =  async () => axios.get(`${API_URL}/aluno`);
export const listarPorMatricula = async (matricula) => axios.get(`${API_URL}/aluno/${matricula}`);
export const excluirTodos = async () => axios.delete(`${API_URL}/aluno`);
export const excluirPorMatricula = async (matricula) => axios.delete(`${API_URL}/aluno/${matricula}`);