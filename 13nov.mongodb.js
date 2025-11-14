use("academy");
/*
db.students.insertOne({
    name: "Rosa",
    edad: 22,
    course: "MongoDB"
})

db.students.insertMany([
    {
    name: "Alejandro",
    edad: 31,
    course: "MongoDB"
},

 {
    name: "Sergio",
    edad: 24,
    course: "MongoDB"
},
{
    name: "Victor",
    edad: 24,
    course: "MongoDB"
}])
    */

db.students.find();

// collection users
/*
db.users.insertMany([
    {
    name: "Carlos",
    lastName: "Gómez",
    age: 28,
    ciudad: "Madrid",
    status: "active"
  },
  {
    name: "Lucía",
    lastName: "Fernández",
    age: 34,
    city: "Buenos Aires",
    status: "active"
  },
  {
    name: "Andrés",
    lastName: "Martínez",
    age: 22,
    city: "Bogotá",
    status: "active"
  },
  {
    name: "Sofía",
    lastName: "Ruiz",
    age: 30,
    city: "Ciudad de México",
    status: "active"
  },
  {
    name: "Javier",
    lastName: "López",
    age: 41,
    city: "Santiago",
    status: "active"
  }
])
  */
/*
db.users.find()
*/
/*
db.users.updateOne(
  {
    name: "Javier"
  },
  {
    $set: {age: 17}
  }
)

db.users.updateOne(
    {
        age: {$lt: 18}
    },{
        $set: {status: "minor"}
    }
)
*/
/*
db.users.find()
*/
/*
//usuarios mayor 30

db.users.find(
    { "age": {"$gt" : 30}}
)

//usuarios menor 30

db.users.find(
    { "age": {"$lt" : 50}}
)

// usuarios con 22

db.users.find(
    { "age": {"$eq" : 22}}
)


// usuarios con 22

db.users.find(
    { "age": {"$eq" : 22}},
    {
        name : 1,
        _id : 0
    }
)



*/
/*
db.users.find({
  $and: [
    {
      age: { $gt: 18 },
    },
    {
      city: "Ciudad de México",
    },
  ],
},
{
    name: 1
});
*/

// obetener los usuarios que cumplan
// edad menor o igual 25
// ciudad Madrid
// intereses -- deportes
// status activo 
// direccion -- cp 280013

// buscar usuarios que cumplan al menos una
// de las condiciones edad menor o igual 25
// ciudad Madrid
// intereses -- deportes
// status activo 
// direccion -- cp 280013


//cuantas personas vive en madrid y >20 años,
// decir nombre y ciduad 


// buscar usuarios >40 años o que intereses cine


use('Usuarios')
 
/*db.Usuarios.insertMany([
  {
    nombre: "Carlos Pérez",
    edad: 25,
    email: "carlos.perez@gmail.com",
    activo: true,
    fechaRegistro: ISODate("2023-06-15T10:00:00Z"),
    ciudad: "Madrid",
    direccion: {
      calle: "Gran Vía 123",
      ciudad: "Madrid",
      codigoPostal: "28013"
    },
    telefonos: ["600123456", "911223344"],
    intereses: ["música", "deportes", "cine"],
    notas: [
      { asignatura: "Matemáticas", puntaje: 95 },
      { asignatura: "Historia", puntaje: 88 }
    ]
  },
  {
    nombre: "Lucía Gómez",
    edad: 17,
    email: "lucia.gomez@hotmail.com",
    activo: false,
    fechaRegistro: ISODate("2023-07-20T14:30:00Z"),
    ciudad: "Barcelona",
    direccion: {
      calle: "Passeig de Gràcia 45",
      ciudad: "Barcelona",
      codigoPostal: "08007"
    },
    telefonos: ["650987654"],
    intereses: ["lectura", "teatro"],
    notas: [
      { asignatura: "Física", puntaje: 70 },
      { asignatura: "Química", puntaje: 60 }
    ]
  },
  {
    nombre: "Marcos Díaz",
    edad: 30,
    email: "marcos.diaz@gmail.com",
    activo: true,
    fechaRegistro: ISODate("2023-05-12T09:15:00Z"),
    ciudad: "Valencia",
    direccion: {
      calle: "Av. del Puerto 77",
      ciudad: "Valencia",
      codigoPostal: "46023"
    },
    telefonos: ["600000111", "963456789"],
    intereses: ["música", "viajar", "fotografía"],
    notas: [
      { asignatura: "Matemáticas", puntaje: 99 },
      { asignatura: "Historia", puntaje: 93 }
    ]
  },
  {
    nombre: "Ana Ruiz",
    edad: 22,
    email: "ana.ruiz@yahoo.com",
    activo: true,
    fechaRegistro: ISODate("2023-03-01T11:45:00Z"),
    ciudad: "Madrid",
    direccion: {
      calle: "Calle Alcalá 90",
      ciudad: "Madrid",
      codigoPostal: "28009"
    },
    telefonos: ["600888777"],
    intereses: ["deportes", "cine"],
    notas: [
      { asignatura: "Inglés", puntaje: 85 },
      { asignatura: "Matemáticas", puntaje: 90 }
    ]
  },
  {
    nombre: "Elena Torres",
    edad: 29,
    email: "elena.torres@gmail.com",
    activo: false,
    fechaRegistro: ISODate("2022-12-10T08:00:00Z"),
    ciudad: "Sevilla",
    direccion: {
      calle: "Calle Sierpes 30",
      ciudad: "Sevilla",
      codigoPostal: "41004"
    },
    telefonos: ["620112233"],
    intereses: ["pintura", "viajar", "yoga"],
    notas: [
      { asignatura: "Arte", puntaje: 91 },
      { asignatura: "Historia", puntaje: 87 }
    ]
  },
  {
    nombre: "Iván Morales",
    edad: 35,
    email: "ivan.morales@outlook.com",
    activo: true,
    fechaRegistro: ISODate("2021-11-05T17:20:00Z"),
    ciudad: "Bilbao",
    direccion: {
      calle: "Gran Vía 18",
      ciudad: "Bilbao",
      codigoPostal: "48001"
    },
    telefonos: ["944556677"],
    intereses: ["música", "cocina", "senderismo"],
    notas: [
      { asignatura: "Matemáticas", puntaje: 92 },
      { asignatura: "Física", puntaje: 89 }
    ]
  },
  {
    nombre: "Natalia Fernández",
    edad: 21,
    email: "natalia.fernandez@gmail.com",
    activo: false,
    fechaRegistro: ISODate("2023-01-20T12:00:00Z"),
    ciudad: "Zaragoza",
    direccion: {
      calle: "Paseo Independencia 12",
      ciudad: "Zaragoza",
      codigoPostal: "50004"
    },
    telefonos: ["676543210"],
    intereses: ["lectura", "música", "cine"],
    notas: [
      { asignatura: "Lengua", puntaje: 90 },
      { asignatura: "Historia", puntaje: 82 }
    ]
  },
  {
    nombre: "David Romero",
    edad: 27,
    email: "david.romero@gmail.com",
    activo: true,
    fechaRegistro: ISODate("2023-02-15T15:30:00Z"),
    ciudad: "Granada",
    direccion: {
      calle: "Calle Recogidas 15",
      ciudad: "Granada",
      codigoPostal: "18005"
    },
    telefonos: ["678000999", "958333222"],
    intereses: ["cine", "videojuegos", "fútbol"],
    notas: [
      { asignatura: "Informática", puntaje: 94 },
      { asignatura: "Matemáticas", puntaje: 88 }
    ]
  },
  {
    nombre: "Sofía Navarro",
    edad: 19,
    email: "sofia.navarro@gmail.com",
    activo: true,
    fechaRegistro: ISODate("2023-04-10T10:45:00Z"),
    ciudad: "Valencia",
    direccion: {
      calle: "Calle Colón 33",
      ciudad: "Valencia",
      codigoPostal: "46004"
    },
    telefonos: ["610222333"],
    intereses: ["deportes", "moda"],
    notas: [
      { asignatura: "Inglés", puntaje: 79 },
      { asignatura: "Arte", puntaje: 86 }
    ]
  },
  {
    nombre: "Jorge Herrera",
    edad: 40,
    email: "jorge.herrera@empresa.com",
    activo: false,
    fechaRegistro: ISODate("2020-09-01T09:00:00Z"),
    ciudad: "Madrid",
    direccion: {
      calle: "Av. América 20",
      ciudad: "Madrid",
      codigoPostal: "28028"
    },
    telefonos: ["600999888"],
    intereses: ["lectura", "cocina", "viajar"],
    notas: [
      { asignatura: "Cocina", puntaje: 97 },
      { asignatura: "Lengua", puntaje: 84 }
    ]
  }
])*/


/*
db.Usuarios.find({
  $and:[
 {edad: {$lte: 25}},
 {ciudad: "Madrid"},
 {intereses: {$elemMatch: {$eq:"deportes"}}},
 {activo: true},
 {"direccion.codigoPostal": "28013"}

]
}
)

db.Usuarios.find({
  $or:[
    {edad: {$lte: 25}},
    {ciudad: "Madrid"},
    {intereses: {$elemMatch: {$eq: "deportes"}}},
    {activo: true},
    {"direccion.codigoPostal": "280013"}
    
  ]
})

db.Usuarios.find({
  $and:[
    {edad:{$gte:20}},
    {ciudad: "Madrid"},
  ]
},

    {nombre:1,
      ciudad:1,
      _id:0,

    }

  

  )
    */

  db.Usuarios.find({
    $or:[
      {edad: {$eq:40}},
      {intereses:{$elemMatch: {$eq:"cine"}}}
    ]
  })