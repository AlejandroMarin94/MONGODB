// EJERCICIOS 2 – BBDD "Tienda" -- colección "moviles"

use("Tienda");

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

db.moviles.find({ modelo: "Galaxy S23" });

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

/*
db.moviles.find(
    {modelo: "P50 Pro"}
)
    */

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
)*/

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

// EJERCICIOS FUNCIÓN aggregate (BBDD "Tienda" / colección "moviles")

// Ejercicio 1:
// Utilizando aggregate, filtra los móviles cuyo precio sea mayor o igual que 900
// y muestra todos sus campos.
/*
db.moviles.aggregate([
    {$match: { 
        precio: {$gte: 900}
      
    }}
    
])
    */

// Ejercicio 2:
// Utilizando aggregate, filtra los móviles de la marca "Samsung" cuyo precio
// sea menor que 1000.
/*
db.moviles.aggregate([
    {$match:{
        marca: "Samsung",
        precio: {$lte: 1000}
    }}
])
    */

// Ejercicio 3:
// Muestra únicamente el modelo y el precio de todos los móviles utilizando $project,
// ocultando el campo _id.
/*
db.moviles.aggregate([
    {$project: {
        _id:0,
        modelo:1,
        precio:1,
    }}
])
    */

// Ejercicio 4:
// Muestra modelo y precio de todos los móviles y añade un campo llamado "esCaro"
// que valga true si el precio es mayor o igual que 1000 y false en caso contrario.
/*
db.moviles.aggregate([
  {
    $project: {
      _id: 0,
      modelo: 1,
      precio: 1,
      esCaro: {
        if: { $gt: ["$precio", 1000] },
      },
    },
  },
]);
*/

// Ejercicio 5:
// Usando $unwind sobre el array opiniones, muestra una fila por cada opinión de cada móvil,
// proyectando el modelo, el usuario de la opinión y la puntuación.
/*
db.moviles.aggregate([
  {
    $unwind: "$opiniones",
  },
  {
    $project: {
      _id: 0,
      modelo: 1,
      Usuario: "$opiniones.usuario",
      Puntuacion: "$opiniones.puntuacion",
    },
  },
]);
*/
// Ejercicio 6:
// Usando $unwind y $match, muestra el modelo y la puntuación de todas las opiniones
// con puntuacion mayor o igual que 4.8.
/*
db.moviles.aggregate([
  {
    $unwind: "$opiniones",
  },
  {
    $match: { "opiniones.puntuacion": { $gte: 4.8 } },
  },
  {
    $project: {
      _id: 0,
      modelo: 1,
      puntuacion: "$opiniones.puntuacion",
    },
  },
]);*/

// Ejercicio 7:
// Agrupa los móviles por marca y muestra cuántos modelos hay de cada una,
// usando $group para calcular el total de modelos por marca.
/*
db.moviles.aggregate([
  {
    $group: {
      _id: "$marca",
      modelo: { $sum: 1 },
    },
  },
]);*/

// Ejercicio 8:
// Agrupa los móviles por marca y calcula el precio medio de cada marca.
// Después, con $project, muestra la marca y el precioMedio renombrando el
// campo _id a marca.

db.moviles.aggregate([
  {
    $group: {
      _id: "$marca",
      precioMedio: { $avg: "$precio" },
    },
  },
  {
    $project: {
      _id: 0,
      marca: "$_id",
      precioMedio: "$precioMedio",
    },
  },
]);

// Ejercicio 9:
// Deshaz el array de opiniones con $unwind y agrupa por marca para obtener la
// puntuacionMedia de las opiniones de cada marca, usando $avg sobre opiniones.puntuacion.

db.moviles.aggregate([
  {
    $unwind: "$opiniones",
  },
  {
    $group: {
      _id: "$marca",
      puntuacionMedia: { $avg: "$opiniones.puntuacion" },
    },
  },
]);

// Ejercicio 10:
// Ordena todos los móviles por precio de menor a mayor utilizando aggregate y $sort.

db.moviles.aggregate([
  {
    $sort: { precio: 1 },
  },
]);

// Ejercicio 11:
// Calcula el precio medio por marca usando $group y ordena el resultado
// por precioMedio de mayor a menor.

db.moviles.aggregate([
  {
    $group: {
      _id: "$marca",
      precioMedio: { $avg: "$precio" },
    },
  },
  {
    $sort: { precioMedio: -1 },
  },
]);

// Ejercicio 12:
// Muestra únicamente los 3 móviles más caros utilizando $sort y $limit dentro de aggregate.

db.moviles.aggregate([
  {
    $project: {
      _id: 0,
      modelo: 1,
      precio: 1,
    },
  },
  {
    $sort: { precio: -1 },
  },
  {
    $limit: 3,
  },
]);

// Ejercicio 13:
// Usa $project y $cond para mostrar modelo, precio y un campo "rangoPrecio" que valga
// "Alto" si el precio es mayor o igual que 1000, y "Medio/Bajo" en caso contrario.

db.moviles.aggregate([
  {
    $project: {
      modelo: 1,
      precio: 1,
      rangoPrecio: {
        $cond: {
          if: { $gte: ["$precio", 1000] },
          then: "Alto",
          else: "Bajo",
        },
      },
    },
  },
]);

// Ejercicio 14:
// Agrupa por marca para obtener el precioMedio y, usando $project y $cond,
// clasifica cada marca como "Premium" si precioMedio es mayor que 900,
// o "Estándar" en caso contrario.

db.moviles.aggregate([
  {
    $group: {
      _id: "$marca",
      precioMedio: { $avg: "$precio" },
    },
  },

  {
    $project: {
      _id: 0,
      marca: "$_id",
      modelo: 1,
      precio: 1,
      clasificacionm: {
        $cond: {
          if: { $gt: ["$precio", 900] },
          then: "Premium",
          else: "Estandar",
        },
      },
    },
  },
]);

// Ejercicio 15:
// Crea un pipeline completo que:
//  - Filtre móviles con precio mayor o igual que 800.
//  - Proyecte solo marca, modelo, precio y opiniones.
//  - Deshaga el array de opiniones con $unwind.
//  - Agrupe por marca calculando precioMedio y puntuacionMedia de opiniones.
//  - Proyecte marca, precioMedio, puntuacionMedia y un campo "categoriaPrecio"
//    con "Gama alta" si precioMedio es mayor o igual que 1000 o "Gama media" si no.
//  - Ordene por puntuacionMedia de mayor a menor.
//  - Limite el resultado a las 5 primeras marcas.

db.moviles.aggregate([
  {
    $match: { precio: { $gte: 800 } },
  },
  {
    $project: {
      _id: 0,
      marca: 1,
      modelo: 1,
      precio: 1,
      opiniones: 1,
    },
  },
  {
    $unwind: "$opiniones",
  },
  {
    $group: {
      _id: "$marca",
      precioMedio: { $avg: "$precio" },
      puntuacionMedia: { $avg: "$opiniones.puntuacion" },
    },
  },

  {
    $project: {
      _id: 0,
      marca: "$_id",
      precioMedio: 1,
      puntuacionMedia: 1,

      categoriaPrecio: {
        $cond: {
          if: { $gte: ["$precioMedio", 1000] },
          then: "Gama-alta",
          else: "Gama-media",
        },
      },
    },
  },
  {
    $sort: {puntuacionMedia: -1}
  },
  {
    $limit: 5
  }
]);
