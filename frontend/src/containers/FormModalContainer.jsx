import React from 'react'
import { FormModalComponent } from '../components'

const FormModalContainer = ({title, subTitles, id, nameButton, data}) => {
    return (
        <div>
            <FormModalComponent title={title} subTitles={subTitles} id={id} nameButton={nameButton} data={data}/>
        </div>
    )
}

export default FormModalContainer
