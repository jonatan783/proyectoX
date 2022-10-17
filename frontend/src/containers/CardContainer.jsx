import React from 'react'
import { CardComponent } from '../components'

const CardContainer = ({data}) => {
  return (
    <div>
        <CardComponent data={data}/>
    </div>
  )
}

export default CardContainer
