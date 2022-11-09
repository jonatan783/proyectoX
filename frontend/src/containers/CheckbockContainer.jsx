import React, { useState, useEffect } from 'react'
import { CheckbockComponent } from '../components'

function CheckbockContainer(
  {
    id,
    checkInitial,
    check,
    color,
  }) {

  const [colorState, setColorState] = useState()

  const colorFalse = { style: { background: '#CECECE' } }
  const colorTrue = { style: { background: `${color}` } }

  useEffect(() => {
    if (checkInitial === true) {
      document.getElementById(id).click()
      setColorState(colorTrue)
    }
    else setColorState(colorFalse)
  }, [])


  const handleCheck = () => {
    const state = document.getElementById(id).checked
    state ? setColorState(colorTrue) : setColorState(colorFalse)
    check(state , id)
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