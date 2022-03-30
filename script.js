const contadorEl = document.querySelector('.contadorEl');

let count = 0
const botonSuma = () =>{
contadorEl.innerHTML = count++
update()
}

const botonRest = () => {
console.log('hhh')
    if(count === 0) {
        count = 0
    } else {
        contadorEl.innerHTML = count--
        update()
    }
}

const botonReset = () => {
   count = 0
   update()
}
const update = () =>{
    contadorEl.innerHTML = count
    // console.log('que pasa', count);
}

update()
