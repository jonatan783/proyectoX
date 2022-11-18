export const categoriesName = [
    'accesorios',
    'aditivos',
    'iluminacion',
    "sustratos",
]
export const locality = [
    'Adolfo Gonzales Chaves',
    'Aguas Verdes',
    'Alberti',
    'Arenas Verdes',
    'Arrecifes',
    'Ayacucho',
    'Azul',
    'Bahia Blanca',
]
export const ordersByPages = [10, 20, 30, 40]

export const typeOrder = [
    [
        {   
            id: 'menorPrecioId',
            orderName: 'Menor Precio',
            orderSense: 'ASC',
            orderKey: 'price',
        },
        {
            id:'mayorPrecioId',
            orderName: 'Mayor Precio',
            orderSense: 'DESC',
            orderKey: 'price',
        }
    ],
    [
        {
            id:'menosRecienteId',
            orderName: 'Menos Reciente',
            orderSense: 'ASC',
            orderKey: 'id',
        },
        {   
            id: 'masRecienteId',
            orderName: 'Mas Reciente',
            orderSense: 'DESC',
            orderKey: 'id',
        },
    ]
    ,

    [
        {
            id:'descuentosPrimeroId',
            orderName: 'Descuentos Primero',
            orderSense: 'ASC',
            orderKey: 'precioPromo',
        },
        {
            id:'descuentosAlFinalId',
            orderName: 'Descuentos al final',
            orderSense: 'DESC',
            orderKey: 'precioPromo',
        },
    ]
]