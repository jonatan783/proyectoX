import React, { useState, useEffect } from 'react'
import { BreadcrumbsComponent } from '../components'

function BreadcrumbsContainer({ itemsArray }) {
    const [arr, setArr] = useState([])
    useEffect(() => {
        let itemsArr = []
        itemsArray.map((items, i) => {
            itemsArr.push(items)
            if (itemsArray.length !== i + 1) itemsArr.push(false)
        })
        setArr(itemsArr)
    }, [itemsArray])

    return (
        <BreadcrumbsComponent items={arr} />
    )
}

export default BreadcrumbsContainer