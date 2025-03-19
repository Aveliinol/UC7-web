import { React,  useState } from "react";
import {useParams} from "react-router-dom";
import bandas from "../../data/bancoBandas";
import Band2 from "../../components/Band2";
import style from "./BandDetalhes.module.css";
import Header from "../../components/Header2";
import Aside from "../../components/Aside2";    
import Footer from "../../components/Footer2";
import {Link} from "react-router-dom";


function BandDetalhes(){
    const {id} = useParams(); 
    const band2 = bandas.find((b) => b.id === parseInt(id));
    const [curiosidade, setCuriosidade] = useState()

    if(!band2) return (
        <>
    <Header/>
    <h2>Banda não encontrada.</h2>
    <div className={style.divisao}>
         <Link to='/'>
         <button>
            voltar
         </button>
         </Link>
        </div>
    <Footer/>
    </>
    )
    return(
        <>
        <Header/>
        <div className={style.BandDetalhes}>
        <Band2 {...band2} />
        <div className={style.divisao}>
         <Link to='/'>
         <button>
            voltar
         </button>
         </Link>
        </div>
        <button onClick={() => setCuriosidade(band2.curiosidade)}>curiosidade</button>
        <p>{curiosidade}</p>
        </div>
      <Aside/>
        <Footer/>
        </>
    )
}

export default BandDetalhes;