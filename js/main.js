let respuestas = document.getElementById('respuestas');
let precio = parseInt(prompt('Ingresa el monto para aplicarle el descuento'));
let desPrecio20 = precio - (precio * 20/100); 
let desPrecio30 = precio - (precio * 30/100); 

console.log('Precio inicial: ' + precio);
console.log('El precio final del 20% es de: ' + desPrecio20);
console.log('El precio final del 30% es de: ' + desPrecio30);
respuestas.innerHTML('Precio inicial: ' +precio + ', ' + 'Precio 20%desc: ' + desPrecio20 + 'Precio 30%desc: ' + desPrecio30 )