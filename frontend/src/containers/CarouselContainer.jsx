import React from 'react'
import { CarouselComponent } from '../components'
import banner1 from '../assets/img/carrousel/banner1.jpg'
import banner2 from '../assets/img/carrousel/banner2.jpg'
import banner3 from '../assets/img/carrousel/banner3.jpg'

const CarouselContainer = () => {
    const images = [banner1, banner2, banner3]
    return (
        <CarouselComponent images={images} />
    )
}

export default CarouselContainer
