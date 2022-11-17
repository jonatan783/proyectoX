import React, { useState, useEffect } from 'react'
import { CheckbockComponent } from '../components'

function CheckbockContainer(
  {
    id,
    checkInitial,
    check,
    color,
    checked,
  }) {

  const [colorState, setColorState] = useState()


  const colorFalse = { style: { background: '#CECECE' } }
  const colorTrue = { style: { background: `${color}` } }

  useEffect(() => {
    const checkbox = document.getElementById(id)

    if (checkInitial === true) {
      if (!checkbox.checked) checkbox.click()
      setColorState(colorTrue)
    }
    else {
      if (checkbox.checked)  checkbox.click()
      setColorState(colorFalse)
    }

    if (checked) checkbox.defaultChecked = checkInitial
  }, [checkInitial])



  const handleCheck = () => {
    if (!checked) {
      const state = document.getElementById(id).checked
      state ? setColorState(colorTrue) : setColorState(colorFalse)
      check(state, id)
    }

  }
  return (
    <CheckbockComponent
      handleCheck={handleCheck}
      id={id}
      color={colorState}
    />
  )
}

export default CheckbockContainer  