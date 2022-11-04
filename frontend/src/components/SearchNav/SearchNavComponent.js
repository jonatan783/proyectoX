import React from 'react'
import style from './searchNav.module.scss'

function SearchNavComponent({ register, handleSubmit, onSubmit }) {
    return (
        <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                {...register('search')}
            />
            <div className={style.iconSearch} type="submit">
                <ion-icon name="search-outline"></ion-icon>
            </div>
        </form>
    )
}

export default SearchNavComponent