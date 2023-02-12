import React, { useState } from 'react'
import ImageProductComponent from './ImageProductComponent';

function ImageProductContainer() {
    const [image, setImages] = useState([]);
    const [modalShow, setModalShow] = useState(false)
    const [selected, setSelected] = useState(image[0] | null)

    const handleModalShow = (data)=>setModalShow(data)

    const handleSelected = (data)=>setSelected(data)

    const fnFiles = (e) => {
        if (image.length < 6) {
            setImages([...image, URL.createObjectURL(e.target.files[0])])
        } else { alert("solo se pueden adjuntar 6 imagenes") }
    }

    const deleteImg = (url) => {
        const index = image.indexOf(url)
        setImages([...image.slice(0, index), ...image.slice(index + 1)])
    }
    
    return (
        <ImageProductComponent
            image={image}
            modalShow={modalShow}
            handleModalShow={handleModalShow}
            selected={selected}
            handleSelected={handleSelected}
            fnFiles={fnFiles}
            deleteImg={deleteImg}
        />
    )
}

export default ImageProductContainer