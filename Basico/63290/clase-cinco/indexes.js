//Crear un indice unico
db.canciones.createIndex({nombre:1},{unique:true})
//Crear un indice unico con un nombre
db.canciones.createIndex({nombre:1,artista:1},{unique:true, name:"NO_REPETIR_NOMBRE_Y_ARTISTA"})
//Listar los indices
db.canciones.getIndexes()
//Borrar un indice
db.canciones.dropIndex("nombre_1");