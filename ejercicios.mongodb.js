db.users.find({
    $and:[
        {
            age: {$lte: 25},

        },
        {
            city: "Madrid"
        },
        {
            intereses: {$elemMatch: { "deportes"}}
        },
        /*
        {
            status: {$eq "activo"}
        }
        {
            direccion: { $elemMatch{cp:}}
        }

    ]
})