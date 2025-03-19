import {React, useState} from "react"
import Style from "./Band.module.css"

function Band2({imagem, nome, descricao}) {
    const [like, setLike] = useState(0)
    return (
        
        <div className={Style.Band}>
            <img src={imagem} alt={nome} />
            <div className="Bandinfo">
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <p>Likes: {like}</p>
            </div>
            <button onClick={() => setLike(like+1)}>👍</button>
        </div>
    )

}


export default Band2
