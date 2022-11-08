import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FilterOrderComponent } from '../components'

function FilterOrderContainer() {
    const { search, category } = useParams()
    const [categories, setCategories] = useState(
        {
            'Decoración': false,
            'Macetas': false,
            'Accesorios': false,
            'Herramientas Manuales': false,
            'Riego': false,
            "tierras": false,
            "semillas": false,
            "fertilizantes": false
        })

    return (
        <FilterOrderComponent
            search={search}
            category={category}
            categories={categories}
        />
    )
}

export default FilterOrderContainer