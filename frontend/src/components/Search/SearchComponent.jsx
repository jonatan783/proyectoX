import React from 'react'
import style from './search.module.scss'
import { BsSearch } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';

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
          <input className={style.inputSearch}
            placeholder='¿Qué buscás?'
            {...register('search')}
          />

          <div className={style.containerSelected}>
            <span className={style.iconCategory} >
              <BiCategory />
            </span>
            <select className={`${style.selected} ${style.textSelected}`}
              onChange={searchByCategory}
              defaultValue='Categoría'
            >

              <option disabled value="Categoría" >Categoría</option>
              {category?.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>

              ))}

            </select>
          </div>
        </form>

      </div>
    </div>
  )
}
export default SearchComponent