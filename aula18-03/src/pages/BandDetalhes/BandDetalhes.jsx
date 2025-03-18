import React from "react";
import {useParams} from "react-router-dom";
import bandas from "../../data/bancoBandas";
import Band2 from "../../components/Band2";
import style from "./BandDetalhes.module.css"

function BandDetalhes(){
    const {id} = useParams(); 
    const band2 = bandas.find((b) => b.id === parseInt(id));

    if(!band2) return (<h2>Banda não encontrada.</h2>)
    return(
        <div className={style.BandDetalhes}>
        <Band2 {...band2} />
        </div>
    )
}

export default BandDetalhes;