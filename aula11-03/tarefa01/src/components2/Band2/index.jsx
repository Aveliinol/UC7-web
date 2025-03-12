import React from "react";
import Style from "./Band.module.css"

function Band2({imagem, nome, descricao}) {
    return (
        
        <div className={Style.Band}>
            <img src={imagem} alt={nome} />
            <div className="Bandinfo">
                <h2>{nome}</h2>
                <p>{descricao}</p>
            </div>
        </div>
    )

}

export default Band2
