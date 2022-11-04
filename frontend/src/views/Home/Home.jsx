import React from 'react'
import {
  CarouselContainer,
  SearchContainer,
  ListOfCategoriesContainer,
  FeatuedOrderContainer,
  FeaturedOrderDiscountContainer,
} from '../../containers'
import style from './home.module.scss'

function Home() {
  return (
    <div className={style.container}>

      <CarouselContainer />

      <div className={style.containerSearch}>
        <div className={style.search}>
          <SearchContainer />
        </div>
      </div>


      <h className={style.title}>
        Visitá nuestra selección de productos
      </h>
      <ListOfCategoriesContainer />

      <h className={style.title}>
        Productos que podrían interesarte
      </h>
      <FeatuedOrderContainer />

      <h className={style.title}>
        Aprovecha de estos mega descuentos
      </h>
      <FeaturedOrderDiscountContainer />

    </div>
  )
}

export default Home