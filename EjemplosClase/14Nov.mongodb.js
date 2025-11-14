// $all
/*
db.Usuarios.find({
  intereses: {
    $all: ['cine', 'viajar', 'lectura'],
  },
});

// $elemMatch
db.Usuarios.find({
  notas: {
    $elemMatch: {
      asignatura: 'Matematicas',
      puntaje: 90,
    },
  },
});

// $size
db.Usuarios.find({
  intereses: {
    $size: 3,
  },
});
*/
use("Tienda")
// Operadores actualización

// $set - Crea o modifica un campo
db.moviles.updateOne({ modelo: 'Galaxy S22' }, { $set: { precio: 750 } });

db.moviles.updateOne(
  { modelo: 'Pixel 6' },
  { $set: { 'especificaciones.sistemaOperativo': 'Android 13' } }
);

//$unset - Elimina un campo del documento
db.moviles.updateOne(
  { modelo: 'Iphone 13' },
  {
    $unset: {
      stock: '',
    },
  }
);

db.moviles.updateOne(
  { modelo: 'Galaxy S23' },
  {
    $unset: {
      'especificaciones.RAM': '',
    },
  }
);

// $inc - Sumamos o restamos a un campo NUMERICO
db.moviles.updateOne(
  { modelo: 'Mi 11' },
  {
    $inc: {
      precio: 50,
    },
  }
);

db.moviles.updateMany(
  { precio: { $gt: 1000 } },
  {
    $inc: {
      precio: -100,
    },
  }
);

// $push -  Añadir elemento/s al final de un ARRAY ( Si es varios, con $each)
db.moviles.updateOne(
  { modelo: 'Pixel 7' },
  {
    $push: {
      coloresDisponibles: 'Amarillo',
    },
  }
);

db.moviles.updateOne(
  { modelo: 'Pixel 7' },
  {
    $push: {
      coloresDisponibles: {
        $each: ['Morado', 'Rojo', 'Negro'],
      },
    },
  }
);

// $addToSet - Añadir al array solo si NO existe (evita meter duplicados)
db.moviles.updateOne(
  { modelo: 'Galaxy S23' },
  {
    $addToSet: {
      coloresDisponibles: 'Verde',
    },
  }
);

// $pull - Elimina del array todos los elementos que coincidan con esa condicion
db.moviles.updateOne(
  { modelo: 'Mi 11' },
  {
    $pull: {
      coloresDisponibles: 'Gris',
    },
  }
);

db.moviles.updateOne(
  { modelo: 'Mi 12' },
  {
    $pull: {
      opiniones: {
        puntuacion: {
            $lt: 4.5
        }
      }
    },
  }
);

// $pop - Elimino el primer o ultimo elemento de un array (-1, 1 respectivamente)
db.moviles.updateOne(
  { modelo: 'Galaxy S22' },
  {
    $pop: {
        opiniones: 1
    }
  }
);

db.moviles.updateOne(
  { modelo: 'Iphone 14' },
  {
    $pop: {
        coloresDisponibles: -1
    }
  }
);

// INDICES (index)
db.moviles.find()

// Indice simple
db.moviles.createIndex( { marca: 1}, { name: "query_marca"})

// Indice compuesto
db.moviles.createIndex({marca: 1, precio: -1},{ name: "query_doble_mp"})


/// REGEX - Expresiones regulares para buscar coincidencias
db.moviles.find({
    modelo: {
        $regex: "^Galaxy"
    }
})

db.moviles.find({
    modelo: {
        $regex: "Pro$"
    }
})

db.moviles.find({
    modelo: {
        $regex: "Phone"
    }
})

// AGGREGATE
db.moviles.aggregate([
    
])