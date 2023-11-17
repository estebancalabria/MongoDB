db.productos.find({
    $or : [
        {precio: {$lte:10000}},
        {precio: {$lte:20000}}
    ]
});