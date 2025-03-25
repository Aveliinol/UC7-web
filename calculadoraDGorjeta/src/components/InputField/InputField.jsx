import React from "react";

function InputField({label, value, onChange}){
    return(
        <>
      <div>
        <label>{label}</label>
        <input type="number" value={value} onChange={onChange}/>
      </div>
        </>
    )
}

export default InputField