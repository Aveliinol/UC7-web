import React from "react";
import style from "./InuptField.module.css";

function InputField({label, value, onChange}){
    return(
        <>
      <div className={style.InputField}>
        <label>{label}</label>
        <input type="number" value={value} onChange={onChange}/>
      </div>
        </>
    )
}

export default InputField