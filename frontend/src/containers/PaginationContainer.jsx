import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PaginationComponent } from '../components'
import { useSelector } from 'react-redux';

function PaginationContainer() {

  const navigate = useNavigate();
  const { search, category, limitPage, orderSense, orderKey, page } = useParams()
  const searchOrder = useSelector(state => state.searchOrder);
  const [pagination, setPagination] = useState([null, null, null, null, null]);

  let orders = searchOrder.orders;
  let maximumPage = Math.ceil(orders / Number(limitPage))
  const pages = Number(page)

  useEffect(() => {
    if (maximumPage === 1) setPagination([null, null, pages , null, null])
    if (maximumPage === 2) {
      if (pages === 1) setPagination([null, null, pages, pages + 1, null])
      if (pages === 2) setPagination([null, pages - 1, pages, null, null])
    }
    if (maximumPage === 3) {
      if (pages === 1) setPagination([null, null, pages, pages + 1, pages + 2])
      if (pages === 2) setPagination([null, pages - 1, pages, pages + 1, null])
      if (pages === 3) setPagination([pages - 2, pages - 1, pages, null, null])
    }
    if (maximumPage > 3) {
      if (pages === 1) setPagination([null, null, pages, pages + 1, maximumPage])
      if (pages === 2) setPagination([null, pages - 1, pages, pages + 1, maximumPage])
      if (pages >= 3) setPagination([1, pages - 1, pages, pages + 1, maximumPage])
      if (pages + 1 === maximumPage) setPagination([1, pages - 1, pages, pages + 1, null])
      if (pages === maximumPage) setPagination([1, pages - 1, pages, null, null])
    }
  }, [])

  const handleFirst = () => selectedPage(1)
  const handleItemLeft = () => selectedPage(pages - 1)
  const handleItemRight = () => selectedPage(pages + 1)
  const handleLast = () => selectedPage(maximumPage)

  const selectedPage = (page) => {
    navigate(`/search/${search}/category/${category}/limitPage/${limitPage}/orderSense/${orderSense}/orderKey/${orderKey}/page/${page}`)
  }



  return (
    <PaginationComponent
      handleFirst={handleFirst}
      handleItemLeft={handleItemLeft}
      handleItemRight={handleItemRight}
      handleLast={handleLast}
      pagination={pagination}
      selectedPage={selectedPage}
    />
  )
}

export default PaginationContainer