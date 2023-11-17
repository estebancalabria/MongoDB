db.libros.aggregate(
    {
        $match: { titulo: /Monstress/ }
    },
    {
        $project: {
            titulo:1,
            autor:1,
            genero:1,
            paginas : {
                $add :[ "$paginas", 10]
            }
        }
    }
);
