import React from "react";
import Band2 from "../../components/Band2";
import Style from "./Main.module.css"
import bandas from "../../data/bancoBandas";
import {Link} from "react-router-dom"

function Main2(){
    return(
         <main className={Style.Main}>
            {
                bandas.map((banda, index) => (
                    <section>
                         <Band2 key={index} {...banda} />
                        <Link key={banda.id} to={`band/${banda.id}`}>
                        <p>Clique aqui para ler mais sobre...</p>
                        </Link>
                    </section>
                   
                ))
            }
        </main>
    )
}

export default Main2; 
