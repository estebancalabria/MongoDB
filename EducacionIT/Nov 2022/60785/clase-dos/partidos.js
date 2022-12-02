db.partidos.insertMany([
    {
        grupo: "A",
        local: "QAT",
        visitante: "ECU",
        golesLocal: 0, 
        golesVisitante: 2
    },
    {
        grupo: "B",
        local: "ING",
        visitante: "IRN",
        golesLocal: 6, 
        golesVisitante: 2
    },
    {
        grupo: "A",
        local: "SEN",
        visitante: "NLD",
        golesLocal: 0, 
        golesVisitante: 2
    },
    {
        grupo: "B",
        local: "USA",
        visitante: "GAL",
        golesLocal: 1, 
        golesVisitante: 1
    },
    {
        grupo: "C",
        local: "ARG",
        visitante: "SAU",
        golesLocal: 1, 
        golesVisitante: 2    
    },
    {
        grupo: "D",
        local: "DIN",
        visitante: "TUN",
        golesLocal: 0, 
        golesVisitante: 0    
    },
    {
        grupo: "C",
        local: "MEX",
        visitante: "POL",
        golesLocal: 0, 
        golesVisitante: 0   
    },
    {
        grupo: "D",
        local: "FRA",
        visitante: "AUS",
        golesLocal: 4, 
        golesVisitante: 1    
    }
]);
db.partidos.insertOne({grupo:"F",local:"MAR", visitante:"CRO", golesLocal:0, golesVisitante:0, faltas: 12})
db.partidos.insertOne({grupo:"E", local:"ALE", visitante:"JPN", golesLocal:1, golesVisitante:2, favorito:"JPN"})
