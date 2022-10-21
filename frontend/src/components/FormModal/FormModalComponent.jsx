import React from 'react'
import { useForm } from "react-hook-form";

const FormModalComponent = ({ data, subTitles }) => {
    const { register, handleSubmit, formState: {errors}} = useForm()
    const { id, title, nameButton, fn } = data

    return (
        <div className='modal fade' id={id} tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>{title}</h5>
                        <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                        ></button>
                    </div>

                    <div className='modal-body'>
                        <form>
                            {subTitles?.map((subTitle, index) => 
                                <div className='mb-3' key={index}>
                                    <label htmlFor='recipient-name' className='col-form-label'>{subTitle.subTitle}</label>
                                    <input 
                                    id='recipient-name'
                                    className='form-control'
                                    minLength='2'
                                    maxLength='30'
                                    type="text" 
                                    {...register(subTitle.key)}
                                    />
                                </div>
                            )}
                        </form>
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Salir</button>
                        <button type='submit' onClick={handleSubmit(fn)} className='btn btn-primary'>{nameButton}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormModalComponent
