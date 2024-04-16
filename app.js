//Declarar variables
/*
let cadena="Juan";
let numero=9.8
let activo=false;

document.write(cadena+"<br>");

let fecha=new Date();
document.write(fecha+"<br>");

let mes = fecha.getMonth();
document.write(mes+"<br>");


const pi=3.1416;
document.write(pi+"<br>");

//Información por teclado
let nombreUsuario=prompt("Ingrese su nombre");
alert("El nombre es: "+nombreUsuario);

console.log(nombreUsuario);
*/


//Sumar dos numeros
/*
let numero1,numero2,total;

numero1=parseInt(prompt("Ingrese el primer número:  "));
numero2=parseInt(prompt("Ingrese el segundo número:  "));
 total=numero1/numero2;
 document.write("La suma es: "+total);
*/
 //Operadores matemáticos
 //+  , *  ,/  , -

 //Operadores lógicos:  AND &&
/*
let dato=10;
let dato1=20;
let and=(dato>30 && dato1<20)
document.write("AND: "+and+"<br>")

//Operador OR
let or=(dato>30||dato1<50 +"<br>");

document.write("OR: "+or+"<br>");

let not=!(dato<20);
document.write("NEGACION: "+not+"<br>");

*/

//Averiguar cual de los dos numeros es mayor
/*let n1=66;
let n2=20;
if(n1>n2)
{
 document.write("numero1 es mayor")

}
else{
    document.write("numero2 es mayor")

}
*/
/*
1.	Codifique en JavaScript un algoritmo que tome tres números y
 si el primero es positivo calcule el producto de los otros dos, y 
 en otro caso calcule la suma y muestre el resultado en la pantalla
*/
/*
let n1=parseFloat(prompt("Ingrese el primer numero"));
let n2=parseFloat(prompt("Ingrese el segundo numero"));
let n3=parseFloat(prompt("Ingrese el tercero numero"));

if(n1>0){
    let producto=n2*n3;
    alert(producto);

}else{

    let suma=n1+n2+n3;
    alert(suma)
}
*/
//ciclo for
//Listar los numeros del 1-5
/*
for(let i=1;i<=5;i++){
    document.write(i);
}
*/

//Clase 27 nov 2023
//Ciclo while
/*
let i=0;
while(i<5){
    i++;
    document.write(i+"<br>");
}
*/
//Haga mientras
/*
let i=0;
do{
    i=i+1;
    document.write(i);

}while(i<5);*/

/*Escriba un algoritmo que lea n números
 reales y muestre el promedio de los números
  leídos */

  //acumulador
/*
  let n = parseInt(prompt("Ingrese la cantidad de números a promediar:"));
  let suma=0;
  for (let i = 0; i < n; i++)
  {
    let numero = parseFloat(prompt(`Ingrese el número #${i + 1}:`));
    suma=suma+numero;

  }
  let promedio;
  promedio=suma/n;
  console.log(promedio);
*/
  /* Escriba un algoritmo que lea n números reales
   y muestre el número que es menor y el número 
   que es mayor  */

   /*
   let menor;
   let mayor;
   let n = parseInt(prompt("Ingrese la cantidad de números:"));

   menor=0;
   mayor=0;

for (let i = 1; i <= n; i++) {
    let numero = parseFloat(prompt("Ingrese el número"));
    if(i==1){
       mayor=numero;
       menor=numero;   
  }else if( numero>mayor)
         {
          mayor=numero;
           }else if( numero<menor){
             menor=numero;
           }
  }
  console.log("El mayor es: " + mayor + " y el menor es: " + menor);
*/

/*
Ingresar edades hasta que el usuario decida no ingresar más
 Muestre la cantidad de edades ingresadas

*/
/*
let edad,cont=0;
let continuar=true;
while(continuar){
    let edad = parseInt(prompt("Ingrese una edad:"));
    let respuesta = prompt("¿Desea ingresar otra edad? (Sí/No)").toLowerCase();
    if(respuesta=="no"){
        continuar=false;
    }
    cont=cont+1;
}

console.log(cont);
*/

//Objetos
let persona={
    nombre:"Alejo",
    genero:"masculino"

}
//console.log(persona);
/*
let user ="luz";
let objeto={

    nombre:"Juan",
    edad:25,
    importante: true,
    texto: `Usuario:  ${user}`,
    otroObjeto:persona

}
console.log(objeto);
console.log(objeto.nombre);
console.log(objeto.edad);
console.log(objeto.otroObjeto.genero);
*/

/*
let miArray=["Ana",2000,32.1,true,["Luis",5,false]];
console.log(miArray[1]);
console.log(miArray[4]);
miArray.push("Carlos");
document.write(miArray)
*/
/*Codifique en JavaScript un algoritmo para crear un vector
 de cinco elementos de cadenas de caracteres, inicializa 
el vector con datos leídos por el teclado, copie los elementos 
del vector en otro vector, pero en orden inverso, 
y muéstrelo en la pantalla. */

//Crear el vector
const vectorOrigen=[];

//Ingresar datos
for(let i=0;i<5;i++){
    const elemento =prompt(`Ingrese el elemento ${i + 1}:`);//Interpolación
    vectorOrigen.push(elemento);

}

//Copiar en otro vector
const vectorInverso=vectorOrigen.slice().reverse();

//Mostrar vecto origen
console.log('Vector origen:',vectorOrigen);

//Mostrar vector inverso
console.log('Vector inverso:',vectorInverso);
