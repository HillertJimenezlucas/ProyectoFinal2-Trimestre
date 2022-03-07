// Empezamos usando el comando db."collection".drop() para borrar la colección y todos los 
// documentos dentro de la colección, por si después realizamos cambios en ella para que nos 
// borre los datos desactualizados y podamos introducir después los cambios que hagamos con el insert. 
db.ventas.drop()
// Ahora comenzamos a introducir los datos a nuestra colección con el comando db."collection".insertMany() 
// que se llama "ventas" de la que después vamos a sacar varias colecciones para jugar con las consultas más adelante.
db.ventas.insertMany(
    [
    {   id:1,
        articulo:[
            {modelo:{
                nombre:"Alpha 7 III",
                marca:"Sony",
                megapixeles:37.8,
                estabilizador:true
            },
            objetivo:"Gran angular",
            conexion:{
                bluetooth:true,
                wifi:true
            },
            memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC","SDXC"],
            fpsgrabacion:[120,60,30],
            dimensiones:{
                altura:80.7,
                ancho:145.9,
                pesogr:885},
            precioventa: 1100,
            preciofabrica: 900,
            unidades: 18,
            garantia: 2
            }
        ],
        cliente: {
            nombre:"Juan Garcia",
            telefono:"630224575",
            direccion: {
                calle:"Guadalupe",
                codigopostaal:"87827",
                numero: 9,
            }
        },
        vendedor: {
            nombre:"Paco Perez",
            dni:"30256946D",
            empresa:"Amazon",
            antiguedad: 10,
            salario: 2100.50
        },
        fecha: new Date("2022-02-19")
    },
    {   
        id:2,
        articulo:[
            {modelo:{nombre:"EOS 200M",marca:"Canon",megapixeles:23.5,estabilizador:true},
            objetivo:"Ojo de pez",
            conexion:{bluetooth:false,wifi:false},
            memoriascompatibles:["MS Duo","SD"],
            fpsgrabacion:[30],
            dimensiones:{altura:75.6,ancho:127.9,pesogr:450},
            precioventa: 600,
            preciofabrica: 400,
            unidades: 10, 
            garantia: 1
            },
            {modelo:{nombre:"Powershot",marca:"Canon",megapixeles:28.8,estabilizador:true},
            objetivo:"Teleobjetivo",
            conexion:{bluetooth:true,wifi:true},
            memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC"],
            fpsgrabacion:[60,30],
            dimensiones:{altura:82.7,ancho:133.5,pesogr:820},
            precioventa: 790,
            preciofabrica: 600,
            unidades: 13,
            garantia: null
            },
            {modelo:{nombre:"DSC-HX60",marca:"Sony",megapixeles:20.5,estabilizador:false},
            objetivo:"Ojo de pez",
            conexion:{bluetooth:false,wifi:false},
            memoriascompatibles:["MS Duo","SD"],
            fpsgrabacion:[30],
            dimensiones:{altura:70.5,ancho:126.8,pesogr:400},
            precioventa: 660,
            preciofabrica: 300,
            unidades: 7,
            garantia: 3
            }
        ],
        cliente: {
            nombre:"Antonio Lopez",
            telefono:"605224535",
            direccion: {
                calle:"Clavo",
                codigopostaal:"41927",
                numero: 5,
            }
        },
        vendedor: {
            nombre:"Paco Perez",
            dni:"30256946D",
            empresa:"Amazon",
            antiguedad: 10,
            salario: 2100.50
        },
        fecha: new Date("2021-12-20")
    },
    {   
        id:3,
        articulo:[
            {
                modelo:{nombre:"Alpha 7 II",marca:"Sony",megapixeles:25.4,estabilizador:false},
                objetivo:"Gran angular",
                conexion:{bluetooth:true,wifi:false},
                memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD"],
                fpsgrabacion:[60,30],
                dimensiones:{altura:73.4,ancho:130.6,pesogr:850},
                precioventa: 800,
                preciofabrica: 500,
                unidades: 9,
                garantia: 3
            },
            {  
                modelo:{nombre:"DSC-HX70",marca:"Sony",megapixeles:21.3,estabilizador:false},
                objetivo:"Teleobjetivo",
                conexion:{bluetooth:true,wifi:false},
                memoriascompatibles:["MS Duo","SD","SDHC"],
                fpsgrabacion:[30],
                dimensiones:{altura:69.3,ancho:120.5,pesogr:390},
                precioventa: 500,
                preciofabrica: 370,
                unidades: 15,
                garantia: 2
            }
        ],
        cliente: {
            nombre:"Lucia Jimenez",
            telefono:"605754575",
            direccion: {
                calle:"Pimenton",
                codigopostaal:"46928",
                numero: 32,
            }
        },
        vendedor: {
            nombre:"Lucas Hillert",
            dni:"50258846F",
            empresa:"AliExpress",
            antiguedad: 5,
            salario: 1700.50
        },
        fecha: new Date("2022-05-01")
    },
    {   
        id:4,
        articulo:[
            {  
                modelo:{nombre:"D5500",marca:"Nikon",megapixeles:26.2,estabilizador:false},
                objetivo:"Normal",
                conexion:{bluetooth:true,wifi:true},
                memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD"],
                fpsgrabacion:[60,30],
                dimensiones:{altura:76.3,ancho:134.6,pesogr:700},
                precioventa: 700,
                preciofabrica: 520,
                unidades: 24,
                garantia: 1
            }
        ],
        cliente: {
            nombre:"Pepe Guzman",
            telefono:"695753075",
            direccion: {
                calle:"Nueva",
                codigopostaal:"36927",
                numero: 13,
            }
        },
        vendedor: {
            nombre:"Manuel Aguilar",
            dni:"20243846F",
            empresa:"Amazon",
            antiguedad: 7,
            salario: 1900.30
        },
        fecha: new Date("2021-07-26")
    },
    {   
        id:5,
        articulo:[
            {  
                modelo:{nombre:"D5600",marca:"Nikon",megapixeles:29.7,estabilizador:true},
                objetivo:"Normal",
                conexion:{bluetooth:true,wifi:true},
                memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC"],
                fpsgrabacion:[120,60,30],
                dimensiones:{altura:85.6,ancho:141.2,pesogr:897},
                precioventa: 1500,
                preciofabrica: 1000,
                unidades: 8,
                garantia: null
            },
            {  
                modelo:{nombre:"D6000",marca:"Nikon",megapixeles:32.5,estabilizador:true},
                objetivo:"Teleobjetivo",
                conexion:{bluetooth:true,wifi:true},
                memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC","SDXC"],
                fpsgrabacion:[120,60,30],
                dimensiones:{altura:83.1,ancho:144.5,pesogr:900},
                precioventa: 2200,
                preciofabrica: 1900,
                unidades: 17,
                garantia: 3
            }
        ],
        cliente: {
            nombre:"David Garrido",
            telefono:"695893065",
            direccion: {
                calle:"Tomate",
                codigopostaal:"78687",
                numero: 1,
            }
        },
        vendedor: {
            nombre:"Sergio Rodriguez",
            dni:"90673848B",
            empresa:"Amazon",
            antiguedad: 2,
            salario: 1000.70
        },
        fecha: new Date("2022-03-09")
    },
    {   
        id:6,
        articulo:[
            {  
                modelo:{nombre:"EOS 400M",marca:"Canon",megapixeles:28.6,estabilizador:true},
                objetivo:"Gran angular",
                conexion:{bluetooth:true,wifi:true},
                memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC"],
                fpsgrabacion:[60,30],
                dimensiones:{altura:78.2,ancho:132.8,pesogr:930},
                precioventa: 900,
                preciofabrica: 700,
                unidades: 12,
                garantia: 1
            },
            {  
                modelo:{nombre:"E-M5",marca:"Olympus",megapixeles:34.3,estabilizador:true},
                objetivo:"Normal",
                conexion:{bluetooth:true,wifi:true},
                memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC","SDXC"],
                fpsgrabacion:[120,60,30],
                dimensiones:{altura:72.3,ancho:128.9,pesogr:870},
                precioventa: 2700,
                preciofabrica: 2300,
                unidades: 16,
                garantia: 2
            },
            {  
                modelo:{nombre:"E-M3",marca:"Olympus",megapixeles:22.8,estabilizador:false},
                objetivo:"Ojo de pez",
                conexion:{bluetooth:true,wifi:false},
                memoriascompatibles:["MS Duo","SD"],
                fpsgrabacion:[60,30],
                dimensiones:{altura:79.8,ancho:135.9,pesogr:740},
                precioventa: 800,
                preciofabrica: 670,
                unidades: 8,
                garantia: 2
            },
            {  
                modelo:{nombre:"E-M4",marca:"Olympus",megapixeles:27.9,estabilizador:true},
                objetivo:"Ojo de pez",
                conexion:{bluetooth:true,wifi:true},
                memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD"],
                fpsgrabacion:[60,30],
                dimensiones:{altura:71.9,ancho:132.6,pesogr:420},
                precioventa: 1200,
                preciofabrica: 1000,
                unidades: 25,
                garantia: null
            }
        ],
        cliente: {
            nombre:"Maria Smith",
            telefono:"645303365",
            direccion: {
                calle:"Dominguez",
                codigopostaal:"62687",
                numero: 5,
            }
        },
        vendedor: {
            nombre:"Louis Hoffman",
            dni:"70673342C",
            empresa:"Ebay",
            antiguedad: 9,
            salario: 2000.90
        },
        fecha: new Date("2021-08-23")
    },
    {   
        id:7,
        articulo:[
            {  
                modelo:{nombre:"D6100",marca:"Nikon",megapixeles:35.4,estabilizador:true},
                objetivo:"Gran angular",
                conexion:{bluetooth:true,wifi:true},
                memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC","SDXC"],
                fpsgrabacion:[120,60,30],
                dimensiones:{altura:83.4,ancho:137.9,pesogr:950},
                precioventa: 2300,
                preciofabrica: 1900,
                unidades: 19,
                garantia: 3
            },
            {  
                modelo:{nombre:"EOS 500M",marca:"Canon",megapixeles:31.6,estabilizador:true},
                objetivo:"Normal",
                conexion:{bluetooth:true,wifi:true},
                memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC"],
                fpsgrabacion:[120,60,30],
                dimensiones:{altura:85.7,ancho:141.2,pesogr:990},
                precioventa: 1900,
                preciofabrica: 1500,
                unidades: 30,
                garantia: 2
            }
        ],
        cliente: {
            nombre:"Jesus Salas",
            telefono:"656893365",
            direccion: {
                calle:"Velazquez",
                codigopostaal:"52797",
                numero: 39,
            }
        },
        vendedor: {
            nombre:"Louis Hoffman",
            dni:"70673342C",
            empresa:"Ebay",
            antiguedad: 9,
            salario: 2000.90
        },
        fecha: new Date("2021-10-14")
    },
    {   
        id:8,
        articulo:[
            {  
                modelo:{nombre:"D6100",marca:"Nikon",megapixeles:35.4,estabilizador:true},
                objetivo:"Gran angular",
                conexion:{bluetooth:true,wifi:true},
                memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC","SDXC"],
                fpsgrabacion:[120,60,30],
                dimensiones:{altura:83.4,ancho:137.9,pesogr:950},
                precioventa: 2300,
                preciofabrica: 1900,
                unidades: 29,
                garantia: 3
            }
        ],
        cliente: {
            nombre:"Roberto Cruz",
            telefono:"632893865",
            direccion: {
                calle:"Monte",
                codigopostaal:"18737",
                numero: 3,
            }
        },
        vendedor: {
            nombre:"Humberto Gutierrez",
            dni:"32175342A",
            empresa:"Amazon",
            antiguedad: 6,
            salario: 1670.20
        },
        fecha: new Date("2021-05-30")
    },
    {   
        id:9,
        articulo:[
            {  
                modelo:{nombre:"E-M5",marca:"Olympus",megapixeles:34.3,estabilizador:true},
                objetivo:"Normal",
                conexion:{bluetooth:true,wifi:true},
                memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC","SDXC"],
                fpsgrabacion:[120,60,30],
                dimensiones:{altura:72.3,ancho:128.9,pesogr:870},
                precioventa: 2700,
                preciofabrica: 2300,
                unidades: 5,
                garantia: 2
            },
            {  
                modelo:{nombre:"E-M3",marca:"Olympus",megapixeles:22.8,estabilizador:false},
                objetivo:"Ojo de pez",
                conexion:{bluetooth:true,wifi:false},
                memoriascompatibles:["MS Duo","SD"],
                fpsgrabacion:[60,30],
                dimensiones:{altura:79.8,ancho:135.9,pesogr:740},
                precioventa: 800,
                preciofabrica: 670,
                unidades: 16,
                garantia: 2
            }
        ],
        cliente: {
            nombre:"Fran Bovis",
            telefono:"684393875",
            direccion: {
                calle:"Valle",
                codigopostaal:"30537",
                numero: 47,
            }
        },
        vendedor: {
            nombre:"Carmen Nuñez",
            dni:"79175342A",
            empresa:"AliExpress",
            antiguedad: 4,
            salario: 1390.80
        },
        fecha: new Date("2022-01-06")
    },
    {   
        id:10,
        articulo:[
            {
                modelo:{nombre:"Alpha 7 II",marca:"Sony",megapixeles:25.4,estabilizador:false},
                objetivo:"Gran angular",
                conexion:{bluetooth:true,wifi:false},
                memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD"],
                fpsgrabacion:[60,30],
                dimensiones:{altura:73.4,ancho:130.6,pesogr:850},
                precioventa: 800,
                preciofabrica: 500,
                unidades: 14,
                garantia: 3
            },
            {
                modelo:{nombre:"EOS 200M",marca:"Canon",megapixeles:23.5,estabilizador:true},
                objetivo:"Ojo de pez",
                conexion:{bluetooth:false,wifi:false},
                memoriascompatibles:["MS Duo","SD"],
                fpsgrabacion:[30],
                dimensiones:{altura:75.6,ancho:127.9,pesogr:450},
                precioventa: 600,
                preciofabrica: 400,
                unidades: 8, 
                garantia: 1
            },
            {  
                modelo:{nombre:"D5600",marca:"Nikon",megapixeles:29.7,estabilizador:true},
                objetivo:"Normal",
                conexion:{bluetooth:true,wifi:true},
                memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC"],
                fpsgrabacion:[120,60,30],
                dimensiones:{altura:85.6,ancho:141.2,pesogr:897},
                precioventa: 1500,
                preciofabrica: 1000,
                unidades: 7,
                garantia: null
            },
            {  
                modelo:{nombre:"E-M3",marca:"Olympus",megapixeles:22.8,estabilizador:false},
                objetivo:"Ojo de pez",
                conexion:{bluetooth:true,wifi:false},
                memoriascompatibles:["MS Duo","SD"],
                fpsgrabacion:[60,30],
                dimensiones:{altura:79.8,ancho:135.9,pesogr:740},
                precioventa: 800,
                preciofabrica: 670,
                unidades: 17,
                garantia: 2
            }
        ],
        cliente: {
            nombre:"Jose Hernandez",
            telefono:"604393790",
            direccion: {
                calle:"Mirabal",
                codigopostaal:"68537",
                numero: 24,
            }
        },
        vendedor: {
            nombre:"Ivan Fernandez",
            dni:"45173242A",
            empresa:"Ebay",
            antiguedad: 13,
            salario: 2265.45
        },
        fecha: new Date("2021-04-17")
    },
])