//Nombre y Artista de los temas de Rock
db.canciones.aggregate([{$match:{genero:/Rock/}},{$project:{artista:1, nombre:1}}])
//La cantida de canciones registradas por genero...
db.canciones.aggregate([{$group:{_id : "$genero", total:{$count:{}}}}])
db.canciones.aggregate([{$group:{_id : "$genero", total:{$sum:1}}}])
//Mostrar el total de las canciones
db.canciones.aggregate({$count:"total"})
//Los nombres de las canciones con un ratig mayor a 5. 
db.canciones.aggregate([{ $match: { rating: { $gt: 5 } } }, { $project: { _id:0, nombre: 1 } }]);
//Las canciones con un rating menor a 10 ordenadas por nombre
db.canciones.aggregate([{$match: {rating: { $lt: 10 }}},{$sort: {nombre: 1}},{$project: {_id: 0,nombre: 1,genero: 1,rating: 1}}])
//El promedio de rating por genero
db.canciones.aggregate([{$group: {_id: "$genero",promedioRating: { $avg: "$rating" }}}]);
db.canciones.aggregate([{$group: {_id: "$genero", promedioRating: { $avg: {$toInt:"$rating"} }}}]);
//Actualizar el campo rating a int en todos los documentos
db.canciones.updateMany({},[{$set:{rating:{$toInt:"$rating"}}}])
//Mostrar el nombre y año de las canciones
db.canciones.aggregate({$project:{_id:0, nombre:1, año:{$year:"$fechaLanzamiento"}}})
//Filtar las caciones que sean despues del 2000