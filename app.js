let nombre = "enzo leonel ";
let apellido = 'sosa '
let saludo = 'Les doy la bienvenida ';
let fraseCompleta = saludo + nombre + apellido;
console.log(fraseCompleta);

let frase = "JavaScript " + "es un lenguaje " + "esencial para crear " + 'sitios web poderosos.';
console.log(frase);



let numeroString1 = "juan 10 ";
let numeroString2 = "miranda 20 ";
let numeroString3 = "jose 30 ";
let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;
console.log(concatenaNumeros);

let age = prompt('cual es tu edad?');
console.log(age);



let sexo = prompt('introduce tu sexo');

if (sexo == 'masculino'){
    alert('podes entrar si sos mayor de 18');

    let edad = prompt("Introduce tu edad");
    if (edad >= 18){
        alert("Puedes entrar, eres mayor de edad.");
       } else {
        alert("No puedes entrar, eres menor de edad.");
       }
}

else if(sexo == 'femenino'){
    alert('mujeres solo mayores de 20');

    let edad = prompt("Introduce tu edad");
    if (edad >= 20){
        alert("Puedes entrar, eres mayor de edad.");
       } else {
        alert("No puedes entrar, eres menor de edad.");
       }
}else{
    alert('no has introducido tu sexo correctamente')
}




