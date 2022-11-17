export const categoriesName = [
    'Decoración',
    'Macetas',
    'Accesorios',
    'Herramientas Manuales',
    'Riego',
    "Tierras",
    "Semillas",
    "Fertilizantes",
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
            orderName: 'Menor Precio',
            orderSense: 'ASC',
            orderKey: 'price',
        },
        {
            orderName: 'Mayor Precio',
            orderSense: 'DESC',
            orderKey: 'price',
        }
    ],
    [
        {
            orderName: 'Menos Reciente',
            orderSense: 'ASC',
            orderKey: 'id',
        },
        {
            orderName: 'Mas Reciente',
            orderSense: 'DESC',
            orderKey: 'id',
        },
    ]
    ,

    [
        {
            orderName: 'Descuentos Primero',
            orderSense: 'ASC',
            orderKey: 'precioPromo',
        },
        {
            orderName: 'Descuentos al final',
            orderSense: 'DESC',
            orderKey: 'precioPromo',
        },
    ]
]