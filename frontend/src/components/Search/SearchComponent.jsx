import React from 'react'
import style from './search.module.scss'
import { BsSearch } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import { DropdawnContainer } from '../../containers'

function SearchComponent({
  category,
  register,
  handleSubmit,
  onSubmit,
  searchByCategory,
}) {
  return (
    <div className={style.containerSearch}>
      <div className={style.search}>

        <form className={style.formSearch} onSubmit={handleSubmit(onSubmit)} >

          <span className={style.iconSearch} type='submit'>
            <BsSearch />
          </span>
          <input
            type="search"
            id='search'
            placeholder='¿Qué buscás?'
            maxLength="20"
            className={style.inputSearch}
            {...register('search')}
          />

          <div className={style.containerSelected}>
            <span className={style.iconCategory} >
              <BiCategory />
            </span>
            <span className={`${style.selected} ${style.textSelected}`}>Categorías</span>
            <DropdawnContainer options={category} optionClick={searchByCategory} />
          </div>
        </form>

      </div>
    </div>
  )
}
export default SearchComponent