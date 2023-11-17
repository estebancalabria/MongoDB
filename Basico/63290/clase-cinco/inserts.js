//Inserto una cacion nueva
db.canciones.insertOne({
    genero:"Rock",
    nombre:"Jijiji",
    fechaLanzamiento: new Date(1986,0,10),
    artista:"Los Redondos",
    rating:10
});
//Otra Cancion
db.canciones.insertOne({
    genero:"Rock",
    nombre:"El Rebelde",
    fechaLanzamiento: new Date(1998,1,5),
    artista:"La Renga",
    rating:8
});
//Otra Cancion mas...
db.canciones.insertOne({
    genero:"Cumbia",
    nombre:"Pero no puedo",
    fechaLanzamiento: new Date(2006,4,3),
    artista:"Los Charros",
    rating:5
});
//Otra cancion mas
db.canciones.insertOne({
    genero: "Heavy Metal",
    nombre: "Aces High",
    fechaLanzamiento: new Date(1984, 0, 1),
    artista: "Iron Maiden",
    rating: 7,
  });
  //Otra mas 
  db.canciones.insertOne({
    genero: "Rap",
    nombre: "Stan",
    fechaLanzamiento: new Date(2009, 3, 5),
    artista: "Eminem",
    rating: 8,
  });
//Otra mas 
db.canciones.insertOne({
    genero: "Electronica",
    nombre: "I Remember",
    fechaLanzamiento: new Date(2018, 3, 5),
    artista: "Deadmau5",
    rating: "6",
  });
