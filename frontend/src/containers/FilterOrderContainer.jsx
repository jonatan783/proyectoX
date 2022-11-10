import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FilterOrderComponent } from '../components'
import { getSearchByname } from '../requests/searchRequest'

function FilterOrderContainer({ setListOrder }) {
    const navigate = useNavigate()
    const { search, category } = useParams()


    const [limitPage, setLimitPage] = useState(10)
    const [orderSense, setOrderSense] = useState('DESC')
    const [page, setPage] = useState(1)

    useEffect(() => {
        if (search !== 'false') {
            getSearchByname({ search, limitPage, orderSense, page })
                .then(res => { setListOrder(res.data); console.log(res); })
        }
    }, [search])

    const categories = [
        'Decoración',
        'Macetas',
        'Accesorios',
        'Herramientas Manuales',
        'Riego',
        "Tierras",
        "Semillas",
        "Fertilizantes",
    ]

    const check = (state, id) => fnNavigate(search, category, categories, id, state)

    const fnNavigate = (search, category, categories, setCategory, setState) => {

        /*  let newCategories = []
         let navegation = category
 
         if (navegation === 'none') navegation = ''
 
         categories = categories.map((items, i) => {
             items = items.toLowerCase().replaceAll(' ', '-')
             console.log('este es el indice', i)
             newCategories[i] = { category: items, state: false }
             if (items === category) newCategories[i] = { category: items, state: true }
             if (items === setCategory) newCategories[i] = { category: items, state: setState }
         })
         console.log('estado de las categorias', newCategories)
         console.log('esta es la navegation', navegation) */
    }


    const checkInitial = false
    return (
        <FilterOrderComponent
            search={search}
            categories={categories}
            check={check}
            checkInitial={checkInitial}
        />
    )
}

export default FilterOrderContainer