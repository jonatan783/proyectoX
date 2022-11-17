import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { FilterOrderComponent } from '../components'
import { getSearchByName } from '../redux/searchOrder'
import { locality, ordersByPages, typeOrder } from '../jsonData/filterData'

function FilterOrderContainer() {
    console.log(useParams())
    const { search, category, limitPage, orderSense, orderKey, page } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, getValues, getFieldState, formState: { isDirty, dirtyFields }, reset } = useForm({
        defaultValues: {
            startingPrice: "",
            finalPrice: '',
        }
    });
  
    const searchOrder = useSelector(state => state.searchOrder)
    const [categories, setCategories] = useState([[], []])
    const [categorySelect, setCategorySelect] = useState(category)
    const [orderByPagesSelected, setOrderByPagesSelected] = useState(10)
    const [orderSelected, setOrderSelected] = useState(
        {
            orderName: 'Mas Reciente',
            orderSense: 'DESC',
            orderKey: 'id',
        },)

    useEffect(() => {
        if ((search !== 'false') && (category === 'all')) fnDispatch(search, '', limitPage, orderSense, orderKey, page)
        if ((search !== 'false') && (category !== 'all')) fnDispatch(search, category, limitPage, orderSense, orderKey, page)
        if (orderByPagesSelected !== limitPage) setOrderByPagesSelected(limitPage)
    }, [search, page, category, limitPage, orderSense, orderKey])


    //filtros seleccionados
    const categorySelected = (select) => {
        if (select === 'Todas') select = 'all'
        setCategorySelect(select)
        fnNavigate(search, select, limitPage, orderSense, orderKey, 1)
    }

    const localitySelected = (select) => console.log(select)

    const priceSelected = () => {
       console.log(getValues())
    }

    const typeOrderSelected = (select) => {
        setOrderSelected(select)
        fnNavigate(search, category, limitPage, select.orderSense, select.orderKey, 1)
    }

    const fnOrderByPagesSelected = (select) => {
        setOrderByPagesSelected(select)
        fnNavigate(search, category, select, orderSense, orderKey, 1)
    }


    //funciones unicas
    const fnCategory = (arrCategory) => {
        if (arrCategory.length) {
            setCategories([arrCategory.map(i => {
                if (categorySelect === 'all') return { category: i, check: true }
                else {
                    if (categorySelect == i) {
                        return { category: i, check: true }
                    }
                    else { return { category: i, check: false } }
                }
            }), [...arrCategory, 'Todas']])
        }
        else setCategories([[], ['No existen categorías']])
    }

    //Aciones del componente
    const fnDispatch = (search, category, limitPage, orderSense, orderKey, page) => {
        dispatch(getSearchByName({ search, category, limitPage, orderSense, orderKey, page }))
            .then((res) => fnCategory(res.payload.response.data.categorias))
    }
    const fnNavigate = (search, category, limitPage, orderSense, orderKey, page) => {
        navigate(`/search/${search}/category/${category}/limitPage/${limitPage}/orderSense/${orderSense}/orderKey/${orderKey}/page/${page}`)
    }

    return (
        <FilterOrderComponent
            search={search.replaceAll('-', ' ')}
            orders={searchOrder.orders}

            categories={categories}
            categorySelected={categorySelected}

            priceSelected={priceSelected}
            register={register}
            getFieldState={getFieldState}

            locality={locality}
            localitySelected={localitySelected}

            typeOrder={typeOrder}
            typeOrderSelected={typeOrderSelected}
            orderSelected={orderSelected}

            fnOrderByPagesSelected={fnOrderByPagesSelected}
            ordersByPages={ordersByPages}
            orderByPagesSelected={orderByPagesSelected}
        />
    )
}

export default FilterOrderContainer