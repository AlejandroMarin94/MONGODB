// Documentos MongoDB
// Como es realmente (Se insertaría así)
/*[
  {
    _id: ObjectId(),
    name: {
      first: "Alan",
      last: "Turing",
    },
    contact: {
      phone: {
        type: "cell",
        number: "111-222-3333",
      },
    },
  },
  {
    _id: ObjectId(),
    name: {
      first: "Alan",
      last: "Turing",
    },
    contact: {
      phone: {
        type: "cell",
        number: "111-222-3333",
      },
    },
  },
];

// Como lo visualizaremos al leer datos
[
  {
    _id: {
      $oid: "691490ba181057adbf5071b4",
    },
    nombre: "Ana",
    apellido: "García",
    correo: "ana.garcia@example.com",
    edad: 28,
    activo: true,
  },
  {},
];
*/

use("academy");

// CRUD SOBRE LA BBDD

// INSERT (C)
/*
db.students.insertOne({
  name: "Rosa",
  age: 22,
  course: "MongoDB",
});

db.students.insertMany([
  {
    name: "Juan",
    age: 25,
    course: "MongoDB",
  },
  {
    name: "Pepito",
    age: 17,
    course: "MongoDB",
  },
  {
    name: "Alejandro",
    age: 34,
    course: "MongoDB",
  },
]);

// COLLECTION: users Insert 5 documents
// name, lastName, age, city, status: "active"

db.users.insertMany([
    { name: "Alejandro", lastName: "García Serrano",age: 45, city: "Benalmadena", status: "active"},
    { name: "Luis", lastName: "Ruiz Ramirexz",age: 34, city: "Malaag", status: "active"},
    { name: "Javier", lastName: "Salto Perez",age: 44, city: "Torremolinos", status: "active"},
    { name: "Fernando", lastName: "Serrano Sanchez",age: 31, city: "Jaen", status: "active"},
    { name: "Juan", lastName: "Vallejo Vallejo",age: 17, city: "Malaga", status: "active"},
])
*/

// FIND (R)
db.users.find(
  {
    age: { $gt: 25 },
  },
  {
    name: 1,
    _id: 0,
  }
);

/*
db.users.updateOne(
    {
        name: "Juan"
    },{
        $set: { age: 17}
    }
)
*/

db.users.find();

db;

// UPDATE(U)
// Buscar los users que si son menores de 18 años (age)
// seteemos el status como "minor"
/*
db.users.updateMany(
  {
    age: { $lt: 18 },
  },
  {
    $set: { status: "minor" },
  }
);
*/
db.users.find();

// DELETE (D)
db.users.deleteOne({ name: "Javier" });

// CONDICIONALES DE COMPARACION
/*   
  $gt: Mayor que
  $lt: Menor que
  $eq: Igual a 
  $ne: Diferente a 
  $gte: Mayor o igual que 
  $lte: Menor o igual que  */

// Obtener los usuarios que sean mayores de 30 años
db.users.find({ age: { $gt: 30 } });
// Obtener los usuarios que sean menores de 50 años
db.users.find({ age: { $lt: 30 } });
// Obtener los usuarios que tengan 44 años
db.users.find({ age: { $eq: 30 } });
db.users.find({ age: 30 });
// Obtener lois usuarios que no tengan 44 años, y solo mostrarme el nombre y sin id
db.users.find({ age: { $eq: 30 } }, { _id: 0, name: 1 });
// Obtener los usuarios que sean mayor o igual a 30 años
db.users.find({ age: { $gte: 30 } });
// Obtener los usuarios que sean menor o igual a 30 años
db.users.find({ age: { $lte: 30 } });

// CONDICIONALES LÓGICOS

// $and ( Devuelve los documentos que cumplan TODAS las condiciones)
db.users.find({
  $and: [
    {
      age: { $gt: 18 },
    },
    {
        city: "Benalmadena"
    }
  ],
},
{
    name: 1
});

// $or ( Devuelve los docuemtnos que cumplan al menos UNA de las condiciones)
db.users.find({
  $or: [
    {
      age: { $gt: 18 },
    },
    {
        city: "Benalmadena"
    }
  ],
});

// $nor (Devuelve los docuemntos que no cumplan NINGUNA de las condicioens)
db.users.find({
  $nor: [
    {
      age: { $gte: 18 },
    },
    {
        city: "Benalmadena"
    }
  ],
});

// $not (Devuelve los documentos cuando una condicion (SOLO UNA) no se cumple)
db.users.find({
  age: {
      $not: { $gte: 18 },
    }
});


