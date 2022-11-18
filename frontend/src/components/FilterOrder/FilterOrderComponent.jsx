import React from 'react'
import style from './filterOrder.module.scss'
import { CheckbockContainer, DropdawnContainer, BreadcrumbsContainer } from '../../containers'
import { BsArrowDownUp, BsViewList } from 'react-icons/bs'
import { FiFilter } from 'react-icons/fi'
import { BiRefresh } from 'react-icons/bi'

function FilterOrderComponent({
  search,
  categories,
  category,
  orders,
  categorySelected,
  locality,
  localitySelected,
  priceSelected,
  register,
  price,
  getValues,
  setUpDate,
  typeOrder,
  typeOrderSelected,
  orderSelected,
  fnOrderByPagesSelected,
  ordersByPages,
  orderByPagesSelected,
}) {
  return (
    <div className={style.container}>
      <div className={style.fixed}>
  
        {search !== 'none' ?
          <>
            <BreadcrumbsContainer itemsArray={['productos', 'búsqueda', 'nombre']} />
            <span className={style.search}>{search}</span>
          </>
          :
          <>
            <BreadcrumbsContainer itemsArray={['productos', 'búsqueda', 'categoría']} />
            <span className={style.search}>{category}</span>
          </>}
        <span className={`${style.text} ${style.result}`}>{`Resultados ${orders}`}</span>

        <div className='d-flex align-items-baseline'>
          <span className={style.title}>Filtros</span>
          <FiFilter className={style.icon} />
        </div>

        <div className='d-flex align-items-baseline'>
          <span className={style.subtitle} style={{ marginTop: '5px' }}>Categorías</span>
          <DropdawnContainer
            options={categories[1]}
            optionClick={categorySelected}
          />
        </div>
        {categories[0]?.map(categoryItem => (
          <div className={style.containerCategory} key={categoryItem.category}>
            <span className={style.text}>{categoryItem.category}</span>
            <CheckbockContainer
              id={categoryItem.category.toLowerCase().replaceAll(' ', '-')}
              checkInitial={categoryItem.check}
              color={'#2ba42b'}
              checked={true}
            />
          </div>
        ))}


        <span className={style.subtitle}>Precio</span>
        <form className={style.containerPrice} >
          <input
            type='number'
            min='0'
            className={style.input}
            placeholder='$ 0'
            {...register("startingPrice", { required: true })}
            onBlur={() => setUpDate(data => !data)}
          />
          <span className={style.text} style={{ margin: '0 10px' }}>hasta</span>
          <input
            type='number'
            min='0'
            className={style.input}
            placeholder='$ 10.000'
            {...register('finalPrice', { required: true })}
            onBlur={() => setUpDate(data => !data)}
          />
          {price[0] != getValues().startingPrice || price[1] != getValues().finalPrice ?
            <button type="button" className={style.button} onClick={() => priceSelected()}>
              <BiRefresh className={style.bsUpload} />
            </button> : null
          }
        </form>


        <div className='d-flex align-items-baseline'>
          <span className={style.subtitle}>Ubicación</span>
          <DropdawnContainer
            options={locality}
            optionClick={localitySelected}
          />
        </div>
        <div className={style.text}>
          {'Todas las localidades'}
        </div>


        <div className='d-flex align-items-baseline'>
          <span className={style.title}>Orden</span>
          <BsArrowDownUp className={style.icon} />
        </div>
        <div className={style.orderContainer} >
          {typeOrder?.map(order => (
            <div key={order[0].orderName} className={style.orders}>
              <span className={order[0].orderName === orderSelected.orderName ? `${style.price} ${style.priceSelected}` : style.price}
                onClick={() => typeOrderSelected(order[0])}
              >
                {order[0].orderName}
              </span>
              <span className={order[1].orderName === orderSelected.orderName ? `${style.price} ${style.priceSelected}` : style.price}
                onClick={() => typeOrderSelected(order[1])}
              >
                {order[1].orderName}
              </span>
            </div>

          ))}
        </div>


        <div className='d-flex align-items-baseline'>
          <span className={style.title}>Vista</span>
          <BsViewList className={style.icon} />
        </div>
        <div className='d-flex align-items-baseline'>
          <span className={style.subtitle} style={{ marginTop: '5px' }}>Productos por página</span>
          <DropdawnContainer
            options={ordersByPages}
            optionClick={fnOrderByPagesSelected}
          />
        </div>
        <div className={style.text}>
          {`${orderByPagesSelected} por página`}
        </div>

      </div>
    </div>
  )
}

export default FilterOrderComponent