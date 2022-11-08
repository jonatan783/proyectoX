import React from 'react'
import style from './checkbock.module.scss'

function CheckbockComponent({ handleCheck , id, color}) {
  return (
      <label className={style.myCheckbox}>
          <input 
          type="checkbox" 
          id={id}
          name=""
          onClick={handleCheck}
          style={{background: 'red'}} />
          <span {...color}></span>
      </label>
  )
}

export default CheckbockComponent