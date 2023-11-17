db.cuchuflos.aggregate(
    {
        $project: {
            _id: 0,
            nombre: 1,
            precio: {
                $concat: [
                    {
                        $toString: {
                            $round: { $multiply: ["$precio", 497.45] }
                        }
                    },
                    " AR$"
                ]
            }
        }
    })