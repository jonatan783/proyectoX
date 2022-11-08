import React from 'react'
import { CheckbockComponent } from '../component'

function CheckbockContainer({ id, check, setCheck, color, handleCheckItem }) {

  if (check) {

    const handleCheck = () => { setCheck(document.getElementById(id).checked) }
    if (!check) color = { style: { background: '#CECECE' } }
    else color = { style: { background: `${color}` } }

  } else {

    const handleCheck = () => handleCheckItem(document.getElementById(id).checked)
  }
  
  return (
    <CheckbockComponent handleCheck={handleCheck} id={id} color={color} />
  )
}

export default CheckbockContainer  