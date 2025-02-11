let titulo = document.getElementById("titulo");
console.log(typeof titulo);
console.log(titulo.innerText);
 
function VerificarInput(){
    let input = document.getElementById('nome');
    if(input.value.length <5){
        input.className = 'erro'
    } else{
        input.className = '';
    }

}