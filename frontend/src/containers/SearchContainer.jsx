import React, { useState } from 'react'
import { useForm } from "react-hook-form";
//import { postProductByName } from '../requests/productRequest';
import { SearchComponent } from '../components'

function SearchContainer() {
    const [product, setProduct] = useState(null);
    const { register, handleSubmit, errors, reset } = useForm();

    const category = ['Decoración', 'Macetas', 'Accesorios', 'Herramientas Manuales', 'Riego', "tierras", "semillas", "fertilizantes"]

    const onSubmit = (data) => {
        const searchLower = data.search.toLowerCase();
        const searchSplit = searchLower.split(' ');
        if (searchSplit.length !== ['']) {
            reset()
            console.log('estas buscando', searchSplit)
            // postProductByName(searchSplit)
            //    .then(res => setProduct(res.data))
        }
    };
    const searchByCategory = (category) => alert(category.target.value)
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