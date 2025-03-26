import React from "react";
import style from "./Button.module.css"

function Button({text, onClick}){
    return(
        <div>
        <button onClick={onClick} className={style.Button}> {text} </button>
        </div>
    )
}

export default Button