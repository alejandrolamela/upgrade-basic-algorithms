// !Iteración #6: Bucles SI

// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let index = 0; index <=9; index++) {
    console.log(`Vuelta ${index}`);
    
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
// cuando el resto del numero dividido entre 2 sea 0.

for (let index = 0; index <= 9; index++) {
   if (index%2===0) {
    console.log(`El resto de dividir el número ${index} entre 2 es 0.`);
   }
    
}

// 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle empieza en 0 y termina en 10. 
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
// y cambia el mensaje en la última vuelta a 'Dormido!'.

for (let index = 0; index <= 10; index++) {
    if (index<10) {
      console.log("Intentando dormir");  
    } else{
        console.log("Dormido!"); 
    }
    
    
}