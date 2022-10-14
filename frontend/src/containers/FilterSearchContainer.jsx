import React from 'react'
import { FilterSearchComponent } from '../components'

const FilterSearchContainer = ({products}) => {
    return (
        <div>
            <FilterSearchComponent products={products}/>
        </div>
    )
}

export default FilterSearchContainer
