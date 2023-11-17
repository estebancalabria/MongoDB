db.libros.aggregate([
    {
        $match: {
            genero: /Aventura/
        }
    },
    {
        $project: {
            title: "$titulo",
            author: "$autor",
            price: {
                $divide: ["$precio", 550]  //Agregation Operator
            }
        }
    },
    {
        $sort : {
            title : 1
        }
    }
]).forEach( res => print(res));