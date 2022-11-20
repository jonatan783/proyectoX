import React from "react";
import { useState } from "react";
import { CarouselContainer, FormModalContainer } from "../../containers";

const NewProductFormComponent = ({allCategories}) => {
  const [ title, setTitle ] = useState('Comenzar')
  const subTitleRegister = [
    { subTitle: 'Indica nombre, marca, modelo y caracteristicas principales', key: 'name', placeholder: 'Ej. Cannabis Sativa' },
    { subTitle: 'Marca', key: 'brand' },
    { subTitle: 'Modelo', key: 'model' },
    { subTitle: 'Descripción', key: 'description' },
    { subTitle: 'Seleccione las categorias que correspondan', key: 'category', categories: ['Decoración', 'Macetas', 'Accesorios', 'Herramientas Manuales', 'Riego', 'Tierras', "Semillas", 'Fertilizantes'] }
  ]

  console.log(subTitleRegister)

  const dataNewProductName = {
    id: 'sell',
    title: 'Agregando un producto',
    nameButton: 'Comenzar',
    sizeModal: 'modal-xl',
    fn: data => {
      if (subTitleRegister.length === 1) {
        console.log(data)
        subTitleRegister.push({'subTitle': 'Marca', 'key': 'brand'})
       /*  setTitle('Siguiente') */
      }
      else if (subTitleRegister.length === 2) {
        subTitleRegister.push({'subTitle': 'Modelo', 'key': 'model'})
      }
      else if (subTitleRegister.length === 3) {
        subTitleRegister.push({'subTitle': 'Descripción', 'key': 'description'})
      }
      else if (subTitleRegister.length === 4) {
        subTitleRegister.push({'subTitle': 'Seleccione las categorias que correspondan', 'key': 'category', 'categories': ['Decoración', 'Macetas', 'Accesorios', 'Herramientas Manuales', 'Riego', 'Tierras', "Semillas", 'Fertilizantes']})
      }
    },
  }


  const dataNewProductBrand ={
    id: 'brand',
    title: 'Marca',
    nameButton: 'Siguiente',
    fn: data => {
      console.log(data)
      /* subTitleRegister.push({'subTitle': data.name, 'key': 'marca'}) */
    },
  }

  const dataNewProductModel ={
    id: 'brand',
    title: 'Marca',
    nameButton: 'Siguiente',
    fn: data => {
      console.log(data)
      /* subTitleRegister.push({'subTitle': data.name, 'key': 'marca'}) */
    },
  }

  const dataNewProductDescription ={
    id: 'brand',
    title: 'Marca',
    nameButton: 'Siguiente',
    fn: data => {
      console.log(data)
      /* subTitleRegister.push({'subTitle': data.name, 'key': 'marca'}) */
    },
  }

  return (
    <div>
        <CarouselContainer/>
        <FormModalContainer  data={dataNewProductName} subTitles={subTitleRegister}/>
        <FormModalContainer  data={dataNewProductBrand} subTitles={subTitleRegister}/>
        {/* <FormModalContainer  data={dataRegister} subTitles={subTitleRegister}/>
        <FormModalContainer  data={dataRegister} subTitles={subTitleRegister}/> */}
    </div>
  );
};

export default NewProductFormComponent;


/* 
mac book pro 16" chip m1 16gb 1tb 3500 usd
mac book pro 14# chip m1 16gb 1tb 3100 usd
*/