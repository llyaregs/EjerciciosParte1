//Variables llamadas igual como identificadores
//En las cuales no podemos usar palabras reservadas
// Var es Global scope.

var caja = "lapiz";  //Variable Var actualmente es recomendable usar let//
alert(caja);         //Esta es la forma antigua




// Scope  
//Variable Let, es mas versatil, más dinamico y se puedem cambiar los datos
//Let es Block Scope; No se declaran se reasignan
let tenis = "marca"; // "Marca" es de tipo string; Cadena de caraccteres.
tenis = "nike"; 
alert(tenis); //Se imprime en la consola



//Cadena de caracteres de tipo string//
let cajita = "tengo";
cajita = cajita + " dinero"; //Creamos una concatenacion donde juntamos los caracteres
alert(cajita); //Resultado es "Tengo dinero"



/*Numeros Reales de tipo entero; en esta operacion pasaremos de string a números enteros
para poder hacer nuestra operacion, usamos funciones por ejemplos, parseInt, donde todo lo que entre
pasa a un numero ENTERO*/
                        /*prompt: Es una variable que se usa para guardar información.
                        En esta parte podemos hacer uso de condicionales*/ 
const numero1 = parseInt(prompt("ingresa el primer número"));
const numero2 = parseInt(prompt("ingresa el segundo número"));
alert(numero1 + numero2);



//Constantes 
//Const es Block scope, no cambia su valor.
const Nombre = 'Areli'

 //La variable const, no permite un cambio de datos de una variable que empieze con const.
const shampoo = sedal; 
shampoo = "rosa";

//Boleanos

const isPaid = true
const isWomen = false

//Operadores lógicos
/* < >    >=    <=  !=  ===  ==  
&&  and : todas las condiciones son verdaderas
|| or : Con que una sea verdadera, es verdadera.  
! not */
const resultado = (5>5) || (10<4) || (5==="5")



//if - Else 
const edad = 17
if(edad>=18){
    console.log("Es mayor de edad")
    }else if(edad===18) {
        console.log ("Apenas es mayor de edad")
    } // Las llaves se recomienda usar cuando el programa es muy largo



//Ternario 
// condición ? codigosiVerdadero : codigoSiFalso
const isLogged = false
const msj = (isLogged) ? "Cerrar Sesión" : "Iniciar sesion" 
console.log(msj)



//Switch
//nos sirve para validar una condicion que tiene distintos casos
const diaNum = 1
switch(diaNum){
    case 1:
        console.log("lunes")
            break; // En el momento en el que se usa el break el programa deja de validar los sig casos.
    case 2: 
        console.log("martes")
            break;
        
    case 4:
        console.log("Miercoles")
            break;
    case 5:
        console.log("Jueves")
             break;
    case 6:
        console.log("Viernes")
            break;    
     case 3:
       console.log("Sabado")
            break;
    case 3:
         console.log("Domingo")
            break; 
    default: // El default se ejecuta cuando no coincide con niguno de los casos anteriores. 
            console.log("El dia no existe")       
}
//El break es importante ponerlo por que la condicion puede coincidir con mas de un caso.
