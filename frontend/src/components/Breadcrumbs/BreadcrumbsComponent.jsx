import React from 'react'
import style from './breadcrumbs.module.scss'
import { IoIosArrowForward } from 'react-icons/io'

function BreadcrumbsComponent({ items }) {
    return (
        <div className={style.container}>
            {items.map((item , i) => (
                <div key={i}>
                    {item ?
                        <span className={style.items}>{item}</span>
                        :
                        <IoIosArrowForward className={style.icon} />
                    }
                </div>
            ))}
        </div>
    )
}

export default BreadcrumbsComponent