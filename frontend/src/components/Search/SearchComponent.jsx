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

          <h className={style.iconSearch} type='submit'>
            <BsSearch />
          </h>
          <input className={style.inputSearch}
            placeholder='¿Qué buscás?'
            {...register('search')}
          />

          <div className={style.containerSelected}>
            <h className={style.iconCategory} >
              <BiCategory />
            </h>
            <select className={`${style.selected} ${style.textSelected}`}
            onChange={searchByCategory}
            >

              <option selected disabled value="Categoría">Categoría</option>
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