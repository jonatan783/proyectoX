import React from 'react'
import { ListOfCategoriesComponent } from '../components'
import Maseta from '../assets/img/category/maseta.jpg'
import Decoración from '../assets/img/category/decoración.jpg'
import Accesorios from '../assets/img/category/accesorio.jpg'
import Herraminetas from '../assets/img/category/herramientas.png'
import Riego from '../assets/img/category/riego.jpg'
import Tierra from '../assets/img/category/tierra.webp'
import Semillas from '../assets/img/category/semillas.jpg'
import Fertilizantes from '../assets/img/category/fertilizantes.png'


function ListOfCategoriesContainer() {
  const categories = [
    {
      image: Maseta,
      name: 'Maseta'
    },
    {
      image: Tierra,
      name: 'Tierra'
    },
    {
      image: Semillas,
      name: 'Semillas'
    },
    {
      image: Fertilizantes,
      name: 'Fertilizantes'
    },
    {
      image: Decoración,
      name: 'Decoración'
    },
    {
      image: Accesorios,
      name: 'Accesorios'
    },
    {
      image: Herraminetas,
      name: 'Herraminetas'
    },
    {
      image: Riego,
      name: 'Riego'
    },
  ]

  const handleOnclick = (category) => alert(`has hecho click en ${category}`)
  console.log('category', categories)
  return (
    <ListOfCategoriesComponent
      categories={categories}
      handleOnclick={handleOnclick} />
  )
}

export default ListOfCategoriesContainer