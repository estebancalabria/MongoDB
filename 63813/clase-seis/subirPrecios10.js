//Sin los aggregate pipeline operators
db.libros.updateMany(
    {},
    {
        $mul: { precio: 1.1 }, // Increase price by 10%

    }
);

//Con Aggregate Pipeline Operators
db.libros.updateMany(
    {},
    [
        {
            $set: {
                precio: { $multiply: ["$precio", 1.1] } // Increase price by 10%
            }
        }
    ]

);

//Quiero actualizar todos los precios, un 15% ($multiply) y que me redondee el resultado
db.libros.updateMany(
    {},
    [
        {
            $set: {
                precio: {
                    $round: {
                        $multiply: ["$precio", 1.1]
                    }
                }
            }
        }
    ]
);
