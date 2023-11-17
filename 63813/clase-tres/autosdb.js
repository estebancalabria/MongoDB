db.tutus.insertMany([
    {
      _id: ObjectId("645580d6c357f107a2ea2cdf"),
      marca: 'Chevrolet',
      modelo: 'Corsa',
      'año': 2008,
      precio: 1232,
      multas: [
        {
          fecha: ISODate("2023-05-05T22:19:02.447Z"),
          valor: 50000,
          motivo: 'Exceso velocidad'
        },
        {
          fecha: ISODate("2023-05-05T22:19:02.447Z"),
          valor: 3000,
          motivo: 'Mal Estacionado'
        }
      ],
      dominio: 'GRO 023'
    },
    {
      _id: ObjectId("645581bcc357f107a2ea2ce1"),
      marca: 'Renault',
      modelo: 'Twingo',
      'año': 2012,
      precio: 1232,
      multas: [
        {
          fecha: ISODate("2023-05-05T22:22:52.638Z"),
          valor: 20000,
          motivo: 'Semáforo en rojo'
        }
      ],
      dominio: 'SOL 456'
    },
    {
      _id: ObjectId("6455821ac357f107a2ea2ce3"),
      marca: 'Toyota',
      modelo: 'Corolla',
      'año': 2008,
      precio: 1232,
      multas: [
        {
          fecha: ISODate("2023-05-05T22:24:26.755Z"),
          valor: 50000,
          motivo: 'Exceso de velocidad'
        },
        {
          fecha: ISODate("2022-02-01T03:00:00.000Z"),
          valor: 10000,
          motivo: 'Lo que de'
        }
      ],
      dominio: 'HLR 741'
    }
  ])