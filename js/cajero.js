console.log('Cajero Automatico');

let saldo = 5000;
let retiro = 0;
let deposito = 0;
let opc; 
let continuar = 1;

alert('Bienvenido');

do {
    opc = prompt('\n¿Que operacion desea realizar? \n1.- Consulta de Saldo \n2.- Retiro de efectivo \n3.- Deposito de efectivo');

    switch (opc) {
        case '1':
            alert('Su saldo es de: ' + saldo)
            if (comprobante==1){
                comprobante()
            } else{
                alert('Gracias por cuidar el medioambiente')
            }
            break;

        case '2':
            retiro = parseInt(prompt('¿Cuanto deseas retirar?'))
            if (retiro > saldo) {   
                alert('Tu saldo es insuficiente')
            }  else{
                saldo = saldo-retiro
                alert('Tome su efectivo \nTu saldo es de: ' + saldo)
            } 
            break;

        case '3':
            deposito = parseInt(prompt('¿Cuanto deseas depositar?'))
            saldo = saldo + deposito
            alert('Tu saldo es de: ' + saldo)
            break;
            
        default:
            alert('Opcion invalida')
            break;
    }
    continuar = prompt('¿Desea realizar alguna otra operacion? \n1.- Si \t2.-No')

} while (continuar==1);

function comprobante() {
   return alert('Tome su ticket \nSu saldo es: '+ saldo) 
}