//Operadores de Comparacion
//$eq = Equals
//$ne = Not Equals
//$gt = Greater Than
//$gte = Greater Than Equal
//$lt = Lower Than
//$lte = Lower Than Equal
//$in = En una serie de valores (como en SQL)

//Los partidos donde el local saco mas de tres goles
db.partidos.find({golesLocal : { $gt : 3 } })
//Los partidos donde el visitante hizo 3 goles o menos mostrando solo el equipo
db.partidos.find({golesVisitante : {$lte:3 }}, {visitante:1})
//Mostrar solo los nombres de los equipos locales que hicieron 4 goles o menos
db.partidos.find({golesLocal : {$lt:4 }}, {_id:0, local:1})
//Los partidos donde el local hizo 1,3, o
db.partidos.find({golesLocal : {$in : [1,3,5]}})

//$expr
//Operadores de comparacion se pueden usar con el operador $expr
//Permite en este caso referenciar a nombres de campos con $nombreCampo
//con operadores de campo

//Los partidos que son empate
db.partidos.find({$expr:{$eq:["$golesLocal", "$golesVisitante"]}})
//Los partidos que no son empate
db.partidos.find({$expr:{$ne:["$golesLocal", "$golesVisitante"]}})
//Los partidos que gano el local
db.partidos.find({$expr:{$gt:["$golesLocal", "$golesVisitante"]}})
//Los partido que gano el visitante
db.partidos.find({$expr:{$lt:["$golesLocal", "$golesVisitante"]}})
//Los partidos que no son empate con un or
db.partidos.find({ $or :[
    {$expr:{$gt:["$golesLocal", "$golesVisitante"]}},
    {$expr:{$lt:["$golesLocal", "$golesVisitante"]}}
]});

//Operador especial $where
//Los partidos que son empate
db.partidos.find({ $where: "this.golesLocal == this.golesVisitante" });
//Los partidos que no son empate
db.partidos.find({ $where: "this.golesLocal != this.golesVisitante" })


//operadores logicos
//$or
//$and
//Los Partidos donde jugo argentina
db.partidos.find({$or: [{local:"ARG"},{visitante:"ARG"}] })
//Los partidos donde se hayan hecho goles
db.partidos.find({$or: [{golesLocal: {$gt:0}}, {golesVisitante: {$gt:0}}]} )
//Los partidos donde no se hicieron goles
db.partidos.find({$and: [{golesLocal:{$eq:0}}, {golesVisitante: {$eq:0}}]} )
db.partidos.find({$and: [{golesLocal:0}, {golesVisitante: 0}]} )
db.partidos.find({golesLocal: 0, golesVisitante: 0})
//Quiero los partidos donde los locales hicieron 1,3 o 5 goles con un $or
db.partidos.find({$or:[{golesLocal:1},{golesLocal:3},{golesLocal:5}]})

//operador de Esquema
//$exits
//Documentos que tienen la propiedad "favorito"
db.partidos.find({favorito:{$exists: true}});
//Los que no tienen faboritos
db.partidos.find({favorito:{$exists: 0}});

//Operadores de Arreglos
//$all = que todos los elementos esten en un arreglo
//$size = consulta la longitud de un arregli
//$elemMatch = para ver si hay un elemento en un arreglo

//Los partidos que tienen 8 miutos destacados
db.partidos.find({minutosDestacados:{$size:8}})
//Partidos donde el minuto 89 sea detacado
db.partidos.find({minutosDestacados:89})
//Partidos con minutos destacados antes de los 10 minutos
db.partidos.find({minutosDestacados:{$lt:10}})
//Partidos donde los minutos 14 y 5 son destacados (no importa el orden)
db.partidos.find({minutosDestacados:{$all:[14,5]}})


//Es lo mismo hacer
db.partidos.find().sort({golesLocal:-1}).limit(1)
//que
db.partidos.find().limit(1).sort({golesLocal:-1});
//El sort tiene presecencia sobre el limit


//Adelanto de updates...
//Actualizo el partido de Ecuador
db.partidos.updateOne({local:"QAT", visitante:"ECU"},{$set:{golesVisitante: 2}})
//Y los otros
db.partidos.updateOne({local:"MEX", visitante:"POL"},{$set:{golesVisitante: 0}})
db.partidos.updateOne({local:"DIN", visitante:"TUN"},{$set:{golesVisitante: 0}})
//Agregar el campo "favorito" a los partidos que juega Argentina
db.partidos.updateMany({$or:[{local:"ARG"},{visitante:"ARG"}]}, {$set:{favorito:"ARG"}})
