import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { postProductByName } from '../requests/productRequest';
import { SearchNavComponent } from '../components'


function SearchNavContainer() {
    const [product, setProduct] = useState(null);
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data) => {
        const searchLower = data.search.toLowerCase();
        const searchSplit = searchLower.split(' ');
        if (searchSplit.length !== ['']) {
            reset()
            postProductByName(searchSplit)
                .then(res => setProduct(res.data))
        }
    };

    return (
        <SearchNavComponent
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}/>
    )
}

export default SearchNavContainer