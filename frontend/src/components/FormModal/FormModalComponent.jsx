import React from 'react'
import { useForm } from "react-hook-form";
import style from './formModal.module.scss'
import ImageProductContainer from './image/ImageProductContainer';

const FormModalComponent = ({ data, subTitles }) => {
    const { register, handleSubmit, formState: {errors}} = useForm()
    const { id, title, nameButton, fn, sizeModal } = data

    return (
        <div className='modal fade' id={id} tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
           {/*  <div className='modal-dialog modal-xl'> */}
           <div className={`modal-dialog ${sizeModal}`}>
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

                    <div className='modal-body row'>
                        <div className={sizeModal? `col-md-6`: ''}>
                            <form>
                                {subTitles?.map((subTitle, index) => 
                                    <div className='mb-3 ' key={index}>
                                        {subTitle.key === 'description'? 
                                        <>
                                            <label for="message-text" className="col-form-label">{subTitle.subTitle}</label>
                                            <textarea className="form-control" id="message-text" style={{height: 160}}></textarea>
                                        </> 
                                        :
                                        subTitle.key === 'category'?
                                        <>
                                            <label htmlFor='recipient-name' className='col-form-label'>{subTitle.subTitle}</label>
                                            <div style={{ display : 'flex', justifyContent: 'center', flexFlow: 'wrap'}}>
                                                {
                                                subTitle?.categories?.map((category, index) => 
                                                    <button key={index} type='button' className={style.buyButton} data-bs-dismiss='modal'>{category}</button>
                                                )}
                                            </div>
                                        </>
                                            :
                                        <>
                                            <label htmlFor='recipient-name' className='col-form-label'>{subTitle.subTitle}</label>
                                            <input 
                                            id='recipient-name'
                                            className='form-control'
                                            minLength='2'
                                            maxLength='30'
                                            type="text" 
                                            {...register(subTitle.key)}
                                            placeholder={subTitle.placeholder}
                                            />
                                        </>   
                                    }
                                    </div>
                                )}
                            </form>
                        </div>
                        <div className='col-md-6'><ImageProductContainer/></div>
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






