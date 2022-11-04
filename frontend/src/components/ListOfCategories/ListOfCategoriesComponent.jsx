import React from 'react'
import style from './listOfCategories.module.scss'

function ListOfCategoriesComponent({ categories, handleOnclick }) {
  return (
    <div className={style.container}>

      <div className={style.categories}>
        {categories?.map(category => (
          <div
          className={style.category}
          key={category.name}
          onClick={()=>handleOnclick(category)}>
            <img src={category.image} alt='image category' className={style.img} />
            <div className={style.containerName}>
              <span className={style.nameCategory}>{category.name}</span>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default ListOfCategoriesComponent