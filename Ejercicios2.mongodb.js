// EJERCICIOS 2 – BBDD "Tienda" -- colección "moviles"

use('Tienda');

// 1) OPERADORES DE ACTUALIZACIÓN

// Ejercicio 1:
// Cambia el precio del modelo "ROG Phone 5" a 900 euros.

/*db.moviles.updateOne(
    {"modelo":"ROG Phone 5"},
    {$set:{"precio": 900} }
)*/
/*db.moviles.find(
    {"modelo":"ROG Phone 5"}
)*/

// Ejercicio 2:
// Modifica el almacenamientoInterno del modelo "Mi 12" a "512GB"
// dentro del objeto especificaciones.
/*
db.moviles.updateOne(
    {"modelo":"Mi 12" },
    {$set: {almacenamientoInterno: "512GB"}}
) */

    /*
db.moviles.find(
    {"modelo":"Mi 12"}
)
*/
// Ejercicio 3:
// Añade el campo "stock" con valor 15 al modelo "Galaxy S23".
/*
db.moviles.updateOne(
    {"modelo": "Galaxy S23"},
    {$set: {stock: 15}}
)
    

db.moviles.find(
   
*/



// Ejercicio 4:
// Elimina el campo "stock" del modelo "Galaxy S23" si existe.
/*
db.moviles.updateOne(
    {"modelo": "Galaxy S23"},
    {$unset: {stock: ""} }
)
db.moviles.find(
    {"modelo": "Galaxy S23"}
)
    */


// Ejercicio 5:
// Elimina el campo anidado "especificaciones.bateria" del modelo "Legion Phone 3".
/*
db.moviles.updateOne(
    {"modelo": "Legion Phone 3"},
    {$unset: {"especificaciones.bateria": ""}}
)

db.moviles.find(
    {"modelo": "Legion Phone 3"},
    
)
    */



// Ejercicio 6:
// Sube 75 euros el precio de todos los móviles de la marca "Xiaomi".
/*
db.moviles.updateOne(
    {"marca": "Xiaomi"},
    {$inc: {precio: 75}}
)
*/
/*

db.moviles.updateOne(
    {"marca": "Xiaomi"},
    {$inc: {precio: -75}}
)

db.moviles.find(
    {"marca": "Xiaomi"},
)



*/

// Ejercicio 7:
// Reduce 80 euros el precio de todos los móviles cuyo precio actual sea mayor que 900.
/*
db.moviles.updateMany(
    {"precio": {$gt: 900}},
    {$inc: {precio: -80}}
)
*/


// Ejercicio 8:
// Añade el color "Dorado" al array coloresDisponibles del modelo "iPhone 14".
/*
db.moviles.updateOne(
    {"modelo":"iPhone 14" },
    {$set: {"coloresDisponibles": "dorado"}}
)*/

/*
db.moviles.updateOne(
    {"modelo":"iPhone 14" },
    {$set: {"coloresDisponibles": ["Negro", "Blanco", "Verde"]}}
)

*/
/*
db.moviles.find(
    {"modelo": "iPhone 14"},
)*/


/*
db.moviles.updateOne(
    {"modelo":"iPhone 14" },
    {$push: {"coloresDisponibles": "dorado"}}
)
    */
/*
db.moviles.find(
    {"modelo": "Galaxy S23"},
)

*/





// Ejercicio 9:
// Añade los colores "Verde" y "Naranja" al array coloresDisponibles del modelo "Galaxy S22".

/*db.moviles.updateOne(
    {"modelo": "Galaxy S22"},
    {$push: {"coloresDisponibles": ["Verde", "Naranja"]}}
) */


/*
db.moviles.updateOne(
    {"modelo": "Galaxy S22"},
    {$unset: {"coloresDisponibles": ["Verde", "Naranja"]}}
)
*/

/*
db.moviles.updateOne(
    {"modelo": "Galaxy S22"},
    {$set: {"coloresDisponibles": ["Verde", "Naranja", "Rosa"]}}
)

db.moviles.find(
    {"modelo": "Galaxy S22"},
)

*/





// Ejercicio 10:
// Asegura que el modelo "Pixel 7" tenga el color "Negro" en coloresDisponibles
// sin permitir duplicados.

/*
db.moviles.updateOne(
    {"modelo": "Pixel 7"},
    {$addToSet: {"coloresDisponibles": "Negro"}}
)
    

db.moviles.find(
    {"modelo": "Pixel 7"},
);
*/

// Ejercicio 11:
// Quita el color "Burdeos" del array coloresDisponibles del modelo "Edge 30 Pro".
/*
db.moviles.update(
    {"modelo": "Edge 30 Pro"},
    {$pull:{"coloresDisponibles": "Burdeos"}}
    
)
    

db.moviles.find(
    {"modelo": "Edge 30 Pro"}
)
    */

// Ejercicio 12:
// Elimina de las opiniones del modelo "10 Pro" todas aquellas con puntuacion menor que 4.6.

/*
db.moviles.update(
    {"modelo": "10 Pro"},
    {$pull:{opiniones:{puntuacion: {$lte: 4.6}}}}

)

db.moviles.find(
    {"modelo": "10 Pro"}
)
    */
// Ejercicio 13:
// Elimina la última opinión del modelo "Mi 11".
/*
db.moviles.update(
    {"modelo": "Mi 11"},
    {$pop: {opiniones: 1}}
)
    */

/*
db.moviles.find(
    {"modelo": "Mi 11"}
)
*/

    


// Ejercicio 14:
// Elimina el primer color del array coloresDisponibles del modelo "P50 Pro".


/*
db.moviles.update(
    {"modelo": "P50 Pro"},
    {$pop: {"coloresDisponibles": -1 }}

)
    */
   

db.moviles.find(
    {modelo: "P50 Pro"}
)

// 2) ÍNDICES

// Ejercicio 15:
// Crea un índice ascendente sobre el campo "modelo" en la colección moviles.
/*
db.moviles.createIndex(
    {modelo: 1}
)
    */

// Ejercicio 16:
// Crea un índice descendente sobre el campo "precio" en la colección moviles
// con nombre "idx_precio_desc".
/*
db.moviles.createIndex(
    {precio: -1},
    {name: "idx_precio_desc"}
)

   db.moviles.getIndexes()
   */

// 3) REGEX (Expresiones regulares)

// Ejercicio 17:
// Busca todos los móviles cuyo modelo empiece por "Mi".
/*
db.moviles.find(
    {modelo: {$regex:  /^Mi/}}
)
    */

// Ejercicio 18:
// Busca todos los móviles cuyo modelo termine en "5".
/*
db.moviles.find(
    {modelo: {$regex: /5$/}}
)
    */



// Ejercicio 19:
// Busca todos los móviles cuyo modelo contenga la cadena "Phone".
/*
db.moviles.find(
    {modelo: {$regex: /Phone/}}
)

*/


// Ejercicio 20:
// Busca todos los móviles cuya marca comience por la letra "M".
/*
db.moviles.find(
    {modelo: {$regex:/^M/}}
)
*/


// Ejercicio 21:
// Busca todos los móviles cuyo modelo contenga la cadena "Pro" en cualquier posición.
/*
db.moviles.find(
    {modelo: {$regex: /Pro/}}
)
*/

