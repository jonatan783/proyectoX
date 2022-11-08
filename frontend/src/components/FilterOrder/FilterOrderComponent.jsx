import React from 'react'
import style from './filterOrder.module.scss'
import { CheckbockContainer } from '../../containers'

function FilterOrderComponent({
  search,
  category,
  categories,
}) {
  return (
    <div className={style.container}>
      {search ? <span>{search}</span> : null}

      <div className={style.containerCategories}>
        {categories?.map(categoryItem => (
          <span className={style.category}>
            {categoryItem}
            <CheckbockContainer
              id={categoryItem}
              check={null}
              setCheck={null}
              color={'green'}
              handleC
            />
          </span>
        ))}
      </div>
    </div>
  )
}

export default FilterOrderComponent