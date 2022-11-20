import React from 'react'
import { FormModalComponent } from '../components'

const FormModalContainer = ({subTitles, data}) => {
    return (
        <div>
            <FormModalComponent subTitles={subTitles} data={data}/>
        </div>
    )
}

export default FormModalContainer
