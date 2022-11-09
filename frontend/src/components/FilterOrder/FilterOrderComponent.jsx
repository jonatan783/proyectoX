import React from 'react'
import style from './filterOrder.module.scss'
import { CheckbockContainer } from '../../containers'

function FilterOrderComponent({
  search,
  categories,
  check,
  checkInitial,
}) {
  return (
    <div className={style.container}>
      {search ? <span>{search}</span> : null}

      <div className={style.containerCategories}>
        {categories?.map(categoryItem => (
          <div className={style.category} key={categoryItem}>

            <span>{categoryItem}</span>

            <CheckbockContainer
              id={categoryItem.toLowerCase().replaceAll(' ', '-')}
              checkInitial={checkInitial}
              check={check}
              color={'#2ba42b'}
            />

          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterOrderComponent