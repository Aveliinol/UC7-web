import React from "react";

function ResultDisplay({gorjeta, total}){
    return(
        <>
          <div>
            <p>Gorjeta: {gorjeta}</p>
            <p>Total: {total}</p>
        </div>
        </>
    )
}

export default ResultDisplay