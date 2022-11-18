import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { FilterOrderComponent } from '../components';
import { getSearchByName } from '../redux/searchOrder';
import { categoriesName, locality, ordersByPages, typeOrder } from '../jsonData/filterData';

function FilterOrderContainer() {
    //variables de configuracion
    const { search, category, limitPage, orderKey, page } = useParams();
    let { priceRange } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [price, setPrice] = useState(priceRange === 'none' ? ['', ''] : JSON.parse(priceRange));
    let { register, getValues } = useForm({ defaultValues: { startingPrice: price[0], finalPrice: price[1], } });

    //variables de estado
    const searchOrder = useSelector(state => state.searchOrder);
    const [categories, setCategories] = useState([[], []]);
    const [upDate, setUpDate] = useState(false)
    const [orderSelected, setOrderSelected] = useState(typeOrder.flat().find(i => i.id === orderKey));

    useEffect(() => {
        if (priceRange !== 'none') priceRange = JSON.parse(priceRange)
        if ((search !== 'none') && (category === 'all')) fnDispatch(search, '', priceRange, limitPage, orderSelected.orderSense, orderSelected.orderKey, page);
        if ((search !== 'none') && (category !== 'all')) fnDispatch(search, category, priceRange, limitPage, orderSelected.orderSense, orderSelected.orderKey, page);
    }, [search, page, category, limitPage, orderKey, priceRange]);


    //filtros seleccionados
    const categorySelected = (select) => {
        if (select === 'Todas') select = 'all';
        fnNavigate(search, select, priceRange, limitPage, orderKey, 1);
    }

    const localitySelected = (select) => console.log(select);

    const priceSelected = () => {
        const startingPrice = Number(getValues().startingPrice)
        let finalPrice = Number(getValues().finalPrice)
        let price
        if (!finalPrice) finalPrice = 999999
        if (startingPrice < finalPrice) price = `[${startingPrice},${finalPrice}]`
        else price = `[${finalPrice} , ${startingPrice}]`
        setPrice(JSON.parse(price))
        fnNavigate(search, category, price, limitPage, orderKey, 1)
    }

    const typeOrderSelected = (select) => {
        setOrderSelected(select)
        fnNavigate(search, category, priceRange, limitPage, select.id, 1)
    }

    const fnOrderByPagesSelected = (select) => {
        fnNavigate(search, category, priceRange, select, orderKey, 1)
    }


    //funciones unicas
    const fnCategory = (arrCategory) => {
        if (arrCategory.length) {
            setCategories([arrCategory.map(i => {
                if (category === 'all') return { category: i, check: true }
                else {
                    if (category == i) {
                        return { category: i, check: true }
                    }
                    else { return { category: i, check: false } }
                }
            }), [...arrCategory, 'Todas']])
        }
        else setCategories([[], ['No existen categorías']])
    }


    //Aciones del componente
    const fnDispatch = (search, category, priceRange, limitPage, orderSense, orderKey, page) => {
        dispatch(getSearchByName({ search, category, priceRange, limitPage, orderSense, orderKey, page }))
            .then((res) => {
                if (search !== 'none') fnCategory(res.payload.response.data.categorias)
                else fnCategory(categoriesName)
            })
    }
    const fnNavigate = (search, category, priceRange, limitPage, orderKey, page) => {
        navigate(`/search/${search}/category/${category}/priceRange/${priceRange}/limitPage/${limitPage}/orderKey/${orderKey}/page/${page}`)
    }
    return (
        <FilterOrderComponent
            search={search.replaceAll('-', ' ')}         //busqueda
            orders={searchOrder.orders}
            category={category}

            categories={categories}                      //categoría
            categorySelected={categorySelected}

            priceSelected={priceSelected}                //precio
            register={register}
            price={price}
            getValues={getValues}
            setUpDate={setUpDate}

            locality={locality}                           //localidad
            localitySelected={localitySelected}

            typeOrder={typeOrder}                         //orden
            typeOrderSelected={typeOrderSelected}
            orderSelected={orderSelected}

            fnOrderByPagesSelected={fnOrderByPagesSelected} //pagina
            ordersByPages={ordersByPages}
            orderByPagesSelected={limitPage}
        />
    )
}

export default FilterOrderContainer