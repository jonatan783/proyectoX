import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
//import { postProductByName } from '../requests/productRequest';
import { SearchComponent } from '../components'

function SearchContainer() {
    const { register, handleSubmit, errors, reset } = useForm();

    const navigate = useNavigate()

    const category = [
        'Decoración',
        'Macetas',
        'Accesorios',
        'Herramientas Manuales',
        'Riego',
        "tierras",
        "semillas",
        "fertilizantes"
    ]

    const onSubmit = (data) => {
        if (data.search) {
            reset()
            const searchLower = data.search.toLowerCase();
            const searchReplace = searchLower.replaceAll(' ', '-')
            navigate(`/search/${searchReplace}/category/none`)
        }
    };


    const searchByCategory = (data) => {
        const categoryLower = data.target.value.toLowerCase();
        const categoryReplace = categoryLower.replaceAll(' ', '_')
        navigate(`/search/none/category/${categoryReplace}`)
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