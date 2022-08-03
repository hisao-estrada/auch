console.log(`evento con el boton`);

//se crea la variable boton para darle el evento click y la funcion me picaron
let boton = document.getElementById("btn")
boton.addEventListener("click", mePicaron)

//Se crea la variable bntSobar para darle un evento al boton de tipo click y la funcion sobarP
let btnSobar = document.getElementById("sob")
btnSobar.addEventListener("click", sobarP)

// Se crea un elemento de tipo P
let pico = document.createElement('p')


function mePicaron() {
    //alert(`Auch!`)
    // a P se le agrega un texto diciendo ouch
    pico.innerText = "OUCH!"
    //Se obtiene el elemento evento y se le agrega el texto
    let espacio = document.getElementById("evento")
    espacio.append(pico)
}

function sobarP() {
    //se remueve lo que hay en pico
    pico.remove()
    // let espacio = document.getElementById("evento")
    // espacio.append(sobar) 
    alert("Gracias por sobarme")
    
}
