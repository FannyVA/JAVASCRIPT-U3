// Operador 
const velocidad = 120;
let mensaje;
if(velocidad> 100 ) { 
    mensaje = "vas muy rapido ";
}else { 
    mensaje ="vas a buen ritmo";
}
console.log(mensaje);


// Ciclo for 
for(let i = 0; i < 10; i++) {
    if(i==5) break 
    console.log(i);
}

// Ciclo while
let i = 0;
while (i  < 10) {
     console.log(i);
     i++;
}

//Numeros pares 

for(i = 0; i < 100; i++) {
    if(i%2==0) {
    console.log(i); 
     }
}

//Numeros primos en javascript 
for(i = 2; i < 100; i++) {
    let primo = true;
 for(let j=2; j<i; j++) {
     if(i%j==0) {
        primo =false;
    }
}
    if (primo){
    console.log(i); 
    
     }
}