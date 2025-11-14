db.Usuarios.find({
    $and: [
        {edad: {$lte:25}},
        {ciudad: "Madrid"},
        {intereses: {$elemMatch: {$eq: "deportes"}}},
        {activo: true},
        {"direccion.codigoPostal": "28013"}
    ]
});