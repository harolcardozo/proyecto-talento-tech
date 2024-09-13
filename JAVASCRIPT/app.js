//comentario de una linea
/**comentario multilinea */
/*
console.log ("Hola mundo");

//* = es asignacion
//* VARIABLE

let numero1 = 45;
let numero2 = 39;
let suma, resta, multiplicacion;

const pi = 3.14156

let estado = true;

let numero3 = 78;
 
let direccion = "calle 11 # 40 -32"
let nulo =  null

numero3 = 125;



console.log(numero1);
console.log(numero2);
console.log(pi);
console.log(estado);
console.log(numero3);
console.log (direccion);



suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;

mod = numero1 % numero2;

console.log(suma)

//* contatenar valores 

console.log("el primer valor es: " + numero1);
console.log("el seguido valor es: " + numero2);

//*literal template  alt + 96 para sacar comillas al contrario
console.log(`la suma de ${numero1} y ${numero2} es: ${suma}`);
console.log(`la resta de ${numero1} y ${numero2} es: ${resta}`);
console.log(`la multiplicacion de ${numero1} y ${numero2} es: ${multiplicacion}`);
console.log(`la division modulo de ${numero1} y ${numero2} es: ${mod}`);


console.log (typeof(estado));
console.log (typeof(direccion));
console.log (typeof(numero3));
console.log (typeof(nulo));

//*INGRESOS DE DATOS POR EL USUARIO
//*parseint sirve para indicar que el valor es de tipo numero (entero)
//* parsefloat es para indicar que son de numeros decimales
//*let nu1 = parseInt(prompt(("ingrse el primer valor")));
//*let nu2 = parseInt(prompt((" ingrese el segundo valor")));

//*let s = nu1+nu2;


//*console.log(`el primer valor ingresado es: ${nu1} y el segundo valor es: ${nu2}`);
//*console.log(`la suma : ${s}`);

//*GENERACION DE NUMEROS ALEATORIOS


//*biblioteca de matematica math
//* numero aleatorio 1-5
//* floor redondea el numero y la quita decimales


//*forma 1
let alea = Math.floor(Math.random()*5) + 1; 
console.log(alea);

//* forma 2
//* aleatorio ENTRE 0-99
let alea1 = Math.floor(Math.random() * 100);
console.log(alea1);}
*/

// ESTRUCTURA EL IF 
/*
let edad = 17;

if(edad >=18){
    console.log("es mayor de edad");
}else{
    console.log("es menor de edad");
}
    

//*OPERDOR TERNARIO

let res = (edad>=18)? "es mayor de edad" : "es menor de edad";
console.log(res);
*/

//ejercicio 2

//* el atirbuto && se utiliza para i 
//* el atributo || se usa para o y se saca con alt 124


/*
let calificacion;

calificacion = parseFloat(prompt("ingrese calificacion"));

if(calificacion < 3.0){
    console.log("reprobo");
}else if(calificacion > 3.1 && calificacion <=4.0 ){
    console.log("paso el año");
}else{
    console.log("es muy bueno");
}
*/
/*
let  generacion;

generacion = parseInt(prompt("ingrese año de nacimiento"))

if (generacion >1883 && generacion <1900){
    console.log("generacion perdida")
} else if ( generacion >1991 && generacion <1924){
    console.log("generacion grandiosa")
} else if ( generacion >1925 && generacion <1945){
    console.log("generacion silenciosa")
} else if ( generacion >1946 && generacion <1964){
    console.log("generacion baby boomers")
} else if ( generacion >1965 && generacion <1980){
    console.log("generacion x")
} else if ( generacion >1981 && generacion <1996){
    console.log("generacion y")
} else if ( generacion >1997 && generacion <2012){
    console.log("generacion z")
} else if ( generacion >2013 && generacion <2025){
    console.log("generacion alpha")
} 
else {
    console.log("ingrese año de nacimiento")
}
*/


//* estrutura del switch case

let dia=3;

switch (dia){

    case 1: console.log("imprimir lunes");
    break;
    case 2: console.log("imprimir lunes");
    break;
    case 3: console.log("imprimir lunes");
    break;
    case 4: console.log("imprimir lunes");
    break;
   default : console.log("dia no existe")

}


//*ejercicio 1 convertir $ en diferentes monedas

let cantidad = parseInt(prompt("ingrerse la cantidad en pesos"));
let moneda = parseInt(prompt("ingrese la moneda aconvertir 1: dolar, 2: euro, 3: libra2"));

let dolar= 4280;
let euro= 4728;
let esterlina = 5601;

switch (moneda) {
    case 1:
        console.log(`la cantidad del dolar es: ${cantidad / dolar}`);
        break;

        case 2:
            console.log(`la cantidad del euro es: ${cantidad / euro}`);
            break;

            case 3:
                console.log(`la cantidad en esterlina es: ${cantidad / esterlina}`);
                break;

            default : console.log("ingrese una opcion correcta");
                break;
}