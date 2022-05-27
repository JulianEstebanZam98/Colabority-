
console.log(sumar(10,3))


function sumar(a,b){return a+b}
function restar(a,b){return a-b}
function multiplicar(a,b){return a*b}
function dividir(a,b){return a/b}



let sumar2= function(a,b){return a+b}
let restar2= function(a,b){return a-b}
let multiplicar2= function(a,b){return a*b}
let dividir2= function(a,b){return a/b}



let sumar3= (a,b)=>a+b;
let restar3= (a,b)=>a-b;
let multiplicar3= (a,b)=>a*b;
let dividir3= (a,b)=>a/b;



console.log(sumar(22,2))


/* function sumar4(){
let a= Number( prompt ("ingresar valor"))
let b= Number( prompt ("ingresar valor"))
return a+b} */
/* 
function restar4(){
let a= Number( prompt ("ingresar valor"))
let b= Number( prompt ("ingresar valor"))
return a-b}

function multiplicar4(){
let a= Number( prompt ("ingresar valor"))
let b= Number( prompt ("ingresar valor"))
return a*b}

function dividir4(){
let a= Number(prompt("ingresar valor"))
return a/b} */

// console.log(sumar4 ())
// console.log(restar4 ())
// console.log(multiplicar4 ())
// console.log(dividir4 ())

/* function cuadrado_de_un_número(){
 let t=Number(prompt("ingresar valor")) 
 return multiplicar (t,t) 
}
console.log(cuadrado_de_un_número()) */
//Trasnochando una chimba
//oeeeelo 😎

function promedioDe3Números(a,b,c){
 /*    let resultado_de_a_mas_b= sumar(a,b) 
    let resultado_final= sumar(resultado_de_a_mas_b,c)
    return dividir(resultado_final,3) */

    return dividir(sumar(sumar(a,b),c),3)
}
console.log(promedioDe3Números(4,4,4))

function CalcularPorcentaje(a,b){
    return dividir (multiplicar (a,b),100 )
}
console.log(CalcularPorcentaje(100,35))

function generadorDePorcentaje(a,b){
    return dividir(multiplicar(a,100),b)
}
console.log(generadorDePorcentaje(2,200))

