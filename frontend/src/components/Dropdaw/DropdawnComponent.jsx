import React from 'react'
import style from './dropdawn.module.scss'
import { RiArrowDownSLine } from 'react-icons/ri'

function DropdawnComponent({
    collapsed,
    options,
    optionClick,
    handleClick,
    handleBlur
}) {

    return (
        <div className={style.container}>

            <RiArrowDownSLine
                className={style.selected}
                onClick={() => handleClick()}
            />

            {collapsed ?
                <div className={style.containerOptions} >

                    {options?.map(option => (
                        <span
                            key={option}
                            className={style.option}
                            onClick={() => optionClick(option)}
                        >
                            {option}
                        </span>
                    ))}

                    <input id="in"
                        className={style.input}
                        onBlur={() => handleBlur()}
                    />

                </div> : null}



        </div>
    )
}

export default DropdawnComponent