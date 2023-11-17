let libroCopado = db.libros.findOne({titulo:/Monstress/});

libroCopado.precio = 2500;

db.libros.replaceOne({_id: libroCopado._id}, libroCopado );
