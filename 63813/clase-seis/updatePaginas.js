db.libros.updateOne(
    { titulo: /Monstress/ },
    [
        {
            $set: {
                paginas: {
                    $add: ["$paginas", 10]
                }
            }
        }
    ]
)