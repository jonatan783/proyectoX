import React, { useState, useEffect } from 'react'
import { OrderComponent } from '../components'

function OrderContainer({ order }) {
    const [above, setAbove] = useState(false)
    const [image, setImage] = useState(null)
    const [left, setLeft] = useState(false)
    const [right, setRight] = useState(false)

    const lengthImg = order.img.length;

    useEffect(() => {
        if (order.img[0]) setImage(order.img[0])
        if (lengthImg > 1) setRight(true)
    }, [])

    useEffect(() => {
        if (order.img.indexOf(image) === 0) setLeft(false)
        else setLeft (true)
        if (order.img.indexOf(image) === lengthImg - 1) setRight(false)
        else setRight(true)
    }, [image])


    const handleAbove = (data) => setAbove(data)

    const handleLeft = () => setImage(order.img[order.img.indexOf(image) - 1])
    const handleRight = () => setImage(order.img[order.img.indexOf(image) + 1])
    return (
        <OrderComponent
            order={order}
            above={above}
            handleAbove={handleAbove}
            image={image}
            left={left}
            handleLeft={handleLeft}
            right={right}
            handleRight={handleRight}
        />
    )
}

export default OrderContainer