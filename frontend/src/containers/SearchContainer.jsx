import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SearchComponent } from '../components'

function SearchContainer() {
    const { register, handleSubmit, errors, reset } = useForm();

    const navigate = useNavigate()

    const category = [
        'accesorios',
        'aditivos',
        'iluminacion',
        "sustratos",
    ]

    const onSubmit = (data) => {
        if (data.search) {
            reset()
            const searchLower = data.search.toLowerCase();
            const searchReplace = searchLower.replaceAll(' ', '-')
            navigate(`/search/${searchReplace}/category/all/priceRange/none/limitPage/10/orderKey/masRecienteId/page/1`)
        }
    };


    const searchByCategory = (data) => {
        const categoryLower = data.target.value.toLowerCase();
        navigate(`/search/none/category/${categoryLower}/priceRange/none/limitPage/10/orderKey/masRecienteId/page/1`)
    }

    return (
        <SearchComponent
            category={category}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            searchByCategory={searchByCategory}
        />
    )
}

export default SearchContainer