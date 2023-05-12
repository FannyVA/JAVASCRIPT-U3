//arreglo 
const colors= ["Rojo", "Verde","Azul","Amarillo"] 
console.log(colors)

console.log(colors[1])
console.log(colors.length)

const nums = [1,3,5,7,9,0]
const doble = [] 
for (let i=0; i <nums.length; i++ ){
    doble.push(nums [i]*2)
}
console.log(nums)
console.log(doble)

const numbers = [5,3,4,7,2,1,9,7,7]
let suma = 0
for(let i = 0; i < numbers.length; i++ ){
    suma += numbers[1]

}
prom = suma / numbers.length
console.log(prom)

//objetos
const persona = {
    nombre:"Rosario",
    apellido:"Tijeras",
    edad: "35",
    estatura: "1.63"
}
console.log(persona.nombre)


persona.nombre = "Marianita"
console.log(persona.nombre)

//spread operator
const color = ["Negro","Rosa","Azul",]
const color2 = [...color]


console.log(color2)


const unoAlTres= [1,2,3]
const cuatroAlseis= [4,5,6]
const unoAlseis= [...unoAlTres, ...cuatroAlseis]

console.log (unoAlseis)


const saludos ={
    english: "hi",
    french: "bonjour"
}
const saludos2 = {
    russian: "privet",
    japonese: "konnichiwa"
}

const saludos3 = {...saludos, ...saludos2}

console.log(saludos3); 