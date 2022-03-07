// Primeramente vamos a sacar varias colecciones del Insert que he hecho para 
// posteriormente jugar con los datos con los operadores, para ello vamos 
// a usar el operador $out para sacar la información filtrada por las etapas 
// que pongamos en el comando db."collection".aggregate().

// Vamos a crear una colección llamada Vendedores para mostrar solo el campo vendedor
db.ventas.aggregate([
    {
        $project: {
            _id: 0,
            id: 1,
            nombre:"$vendedor.nombre",
            dni:"$vendedor.dni",
            empresa:"$vendedor.empresa",
            antiguedad:"$vendedor.antiguedad",
            salario:"$vendedor.salario"
        }
    },
    {
        $out: {
            db: "ProyectoAggregation",
            coll: "vendedores"
        }
    }
]
)
// Vamos a crear una colección llamada clientes para mostrar solo el campo cliente
db.ventas.aggregate([
    {
        $project: {
            _id: 0,
            id: 1,
            nombre:"$cliente.nombre",
            telefono:"$cliente.telefono",
            direccion:"$cliente.direccion"
        }
    },
    {
        $out: {
            db: "ProyectoAggregation",
            coll: "clientes"
        }
    }
]
)
// Vamos a crear una colección llamada artículos para mostrar todos los artículos por separado
db.ventas.aggregate([
    {
        $unwind: {
            path: "$articulo"
        }
    },
    {
        $project: {
            _id: 0,
            id: 1,
            modelo:"$articulo.modelo",
            objetivo:"$articulo.objetivo",
            conexion:"$articulo.conexion",
            memoriascompatibles:"$articulo.memoriascompatibles",
            fpsgrabacion:"$articulo.fpsgrabacion",
            dimensiones:"$articulo.dimensiones",
            precioventa:"$articulo.precioventa",
            preciofabrica:"$articulo.preciofabrica",
            unidades:"$articulo.unidades",
            garantia:"$articulo.garantia"
        }
    },
    {
        $out: {
            db: "ProyectoAggregation",
            coll: "articulos"
        }
    }
]
)
// Creamos una colección llamada venta que tiene toda la información del insert principal excepto los artículos
db.ventas.aggregate([
    {
        $project: {
            _id: 0,
            id: 1,
            cliente: 1,
            vendedor: 1,
            fecha: 1
        }
    },
    {
        $out: {
            db: "ProyectoAggregation",
            coll: "venta"
        }
    }
])


// CONSULTAS

// Media de memorias aceptadas por cada cámara redondeado.

db.ventas.aggregate([
    {
        $unwind: {
            path:"$articulo"
        }
    },
    {
        $project: {
            _id:0,
            numeromemorias:{$size:"$articulo.memoriascompatibles"}
        }
    },
    {
        $group: {
            _id: null,
            mediamemorias:{$avg:"$numeromemorias"}
        }
    },
    {
        $project: {
            _id:1,
            mediamemorias:{$round: ["$mediamemorias",0]}
        }
    }
])

// Dinero total generado por cada vendedor ordenado de mayor a menor.

db.articulos.aggregate([
    {
        $lookup: {
            from: "vendedores",
            localField: "id",
            foreignField: "id",
            as: "vendedores"
        }
    },
    {
        $project:{
            _id:0,
            vendedores:{$arrayElemAt:["$vendedores",0]},
            dinerototal:{ $multiply: ["$unidades","$precioventa"] },
        }
    },
    {
        $project: {
            dinerototal:1,
            vendedor:"$vendedores.nombre"
        }
    },
    {
        $group: {
            _id:"$vendedor",
            dinerototal:{ $sum:"$dinerototal" }
        }
    },
    {
        $sort: {
            dinerototal:-1
        }
    }
])

// Beneficios obtenidos por cada vendedor 

db.articulos.aggregate([
    {
        $lookup: {
            from: "vendedores",
            localField: "id",
            foreignField: "id",
            as: "vendedores"
        }
    },
    {
        $project: {
            _id:0,
            beneficios: {
                $subtract: [
                    {
                        $multiply: [
                            "$unidades",
                            "$precioventa"
                        ]
                    },
                    {
                        $multiply: [
                            "$unidades",
                            "$preciofabrica"
                        ]
                    }
                ]
            },
            vendedores:{$arrayElemAt:["$vendedores",0]},
        }
    },
    {
        $project: {
            beneficios:1,
            vendedor:"$vendedores.nombre"
        }
    },
    {
        $group: {
            _id: "$vendedor",
            totalbeneficios: {
                $sum: "$beneficios"
            }
        }
    }
])

// Buscar cámaras que hayan sido vendidas en 2022 y mostrar su máxima capacidad de grabación

db.venta.aggregate([
    {
        $lookup: {
            from: "articulos",
            localField: "id",
            foreignField: "id",
            as: "articulos"
        }
    },
    {
        $match: {
            fecha: {$gt: new Date("2021-12-31")}
        }
    },
    {
        $unwind: {
            path:"$articulos"
        }
    },
    {
        $project: {
            _id:0,
            nombre:"$articulos.modelo.nombre",
            maxfps: {
                $max:"$articulos.fpsgrabacion"
            },
            fecha:"$fecha"
        }
    }
])

// Número de unidades compradas por cada Cliente y crear un campo país con el valor España a todos los clientes.

db.clientes.aggregate([
    {
        $lookup: {
            from: "articulos",
            localField: "id",
            foreignField: "id",
            as: "articulos"
        }
    },
    {
        $unwind: {
            path:"$articulos"
        }
    },
    {
        $addFields: {
            "direccion.pais":"España"
        }
    },
    {
        $group: {
            _id:{nombre:"$nombre",pais:"$direccion.pais"},
            totalunidades:{$sum: "$articulos.unidades"},
        }
    },
    {
        $project: {
            _id:0,
            nombre:"$_id.nombre",
            totalunidades:"$totalunidades",
            pais:"$_id.pais"
        }
    }
])

// Nombre de los vendedores,dni,salario (si tienen mas de 5 años de antiguedad bonus *1.5 donde x son
// los años de antiguedad)

db.vendedores.aggregate([
    {
        $lookup: {
            from: "clientes",
            localField: "id",
            foreignField: "id",
            as: "clientes"
        }
    },
    {
        $project: {
            nombre:"$nombre",
            dni:"$dni",
            salario:"$salario",
            bonus:{
                $cond:{
                    if:{ $gt:['$antiguedad',5] },
                    then: 1.5,
                    else: 1
                }
            }
        }
    },
    {
        $project: {
            nombre:"$nombre",
            dni:"$dni",
            salario:{ $round:[ {$multiply:["$salario","$bonus"] },2] }
        }
    },
    {
        $group: {
            _id:{nombre:"$nombre",dni:"$dni",salario:"$salario"}
        }
    }
])