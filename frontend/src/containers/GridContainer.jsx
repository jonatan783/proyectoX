import React from 'react'
import { GridComponent } from '../components'

const GridContainer = ({products}) => {
    return (
        <div>
            <GridComponent products={products}/>
        </div>
    )
}

export default GridContainer
