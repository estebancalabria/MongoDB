//Find Tradicional
db.productos.find({});

//Aggregate
db.productos.aggregate();

//Los productos que que cuestan mas de 200
db.getCollection("productos").find({ "precio": { "$gt": 200 } })
db.productos.find({ precio: { $gt: 200 } })

//Los productos que que cuestan mas de 200 con aggregate api
db.productos.aggregate({
    $match: {
        precio: { $gt: 200 }
    }
});

db.productos.aggregate([
    {
        $match: { precio: { $gt: 200 } }
    }
]);

//Los productos donde el precio sea mayor al precio sugerido
//db.getCollection("productos").find({"precio": {$gt: "$precioSugerido"}}) No funciona
//Para comparar campos entre si se usa el $expr
db.productos.find({
    $expr: {
        $gt: ["$precio", "$precioSugerido"]
    }
})

//Con Aggregate Api seria... (ustedes...)
db.productos.aggregate({
    $match: {
        $expr: {
            $gt: ["$precio", "$precioSugerido"]
        }
    }
})

//Que me muestre solo los nombres de los productos
db.productos.find({}, { "nombre": 1, "_id": 0 })

//Lo mismo con aggregate Api
db.productos.aggregate({ $project: { "nombre": 1, "_id": 0 } });
db.productos.aggregate([{ $project: { "nombre": 1, "_id": 0 } }]);

//Que muestre el nombre y el precio de los productos que cuestan mas que 200
db.productos.find({ "precio": { "$gt": 200 } }, { "nombre": 1, precio: 1, "_id": 0 })

//lo mismo con el aggregate
db.productos.aggregate([
    {
        $match: {
            "precio": { "$gt": 200 }
        }
    },
    {
        $project: {
            "nombre": 1, precio: 1, "_id": 0
        }
    }
]);

//Que muestre el nombre y el precio de los productos que cuestan mas que 200
//Que en vez de nombre muestre "name"
//Que en vez de precio muestre "price"
//(Con el find)
db.productos.find({ "precio": { "$gt": 200 } }, { "name": "$nombre", price: "$precio", "_id": 0 })

//lo mismo con el aggregate
db.productos.aggregate([
    {
        $match: {
            "precio": { "$gt": 200 }
        }
    },
    {
        $project: {
            "name": "$nombre", price: "$precio", "_id": 0
        }
    }
]);

//Pero tambien... lo puedo hacer asi
db.productos.aggregate([
    {
        $project: {
            "name": "$nombre", price: "$precio", "_id": 0
        }
    },
    {
        $match: {
            "price": { "$gt": 200 } //ojo que aca es price
        }
    }
]);

//La cantidad de productos totales (con el find y submetodo)
db.productos.find().count()
db.productos.count() //Deprecado
db.productos.countDocuments();

//con el aggregate api
db.productos.aggregate({ $count: "total" })

//la cantidad de productos que cuestan mas de 500 (con el find)
db.productos.find({ "precio": { "$gt": 500 } }).count()


//con Aggregate api
db.productos.aggregate([
    {
        $match: { "precio": { "$gt": 500 } }
    },
    {
        $count: "mas de 500"
    }
])

//Mostrar los productos ordenados por nombre (con el find y submetodo)
db.productos.find({}).sort({ "nombre": 1 })

//con aggregate ($sort)
db.productos.aggregate([{ $sort: { nombre: 1 } }])

//Mostrar la lista de producto que cuestan mas de 220, solo mostrar los nombres ordenados ascendentemente
//(con el find)
db.productos.find({ "precio": { "$gt": 220 } }, { "nombre": 1, "_id": 0 }).sort({ nombre: 1 })

//Con aggregate api $match, $project, $sort
db.productos.aggregate([
    {
        $match: { "precio": { "$gt": 220 } }
    },
    {
        $project: { "nombre": 1, "_id": 0 }
    },
    {
        $sort: { nombre: 1 }
    }
])

//Listar los primeros tres productos en el orden ingresado salteandose 2
//skip() limit()
db.productos.find().skip(2).limit(3);

//Con el aggregate $skip $limit
db.productos.aggregate([
    {
        $skip: 2
    },
    {
        $limit: 3
    }
])

//Los nombres y los precios con iva de los productos
//mostrar los campos nombre y precioConIva
//El precio tiene que estar sin decimales
//El precio con iva es el precio * 1.21
//con el find
//$trunc y $multiply
db.productos.find(
    {},
    {
        _id: 0,
        nombre: 1,
        precioConIva: {
            $trunc: { $multiply: ["$precio", 1.21] }
        }
    }
)

//con el Aggregate
db.productos.aggregate(
    [{
        $project: {
            _id: 0,
            nombre: 1,
            precioConIva: {
                $trunc: { $multiply: ["$precio", 1.21] }
            }
        }
    }]
)


