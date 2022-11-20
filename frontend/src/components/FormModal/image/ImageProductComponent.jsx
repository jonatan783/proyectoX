import React from 'react'
import Modal from 'react-bootstrap/Modal';

import style from "./imageProduct.module.scss"
/* import styleDetail from "../DetailOrderPurchease/datailOrder.module.scss" */

function ImageProductComponent({
  image,
  modalShow,
  handleModalShow,
  selected,
  handleSelected,
  fnFiles,
  deleteImg,
}) {
 
  return (
    <div style={{ display: "flex" }}>

      <div className={style.containerFile}>
        <input className={style.addImage}
          type="file"
          value={""}
          onChange={fnFiles} />
        <div className={style.iconAddImage}>+</div>
        <div className={style.textAddImage} >Subir imagen</div>
      </div>
      {image ? image.map(url => (
        <div className={style.imgContainer}>

          <img src={url}
            alt="fotos del usuario"
            className={style.images}
            key={url}
            onClick={() => { handleModalShow(true); handleSelected(url) }} />

          <div className={style.iconBin} onClick={() => deleteImg(url)}>
            <ion-icon name="trash-bin"></ion-icon></div>
        </div>

      )) : null}

      <Modal
        show={modalShow}
        size="lg"
      //centered
      >
        <Modal.Body className="modal-content">

          <div className={style.containerModal}>
            <div className={style.columnImg}>
              {image?.map(url => (
                <img className={selected === url ? `${style.ima} ${style.selectToggle}` : style.ima} 
                  src={url}
                  style={{objectFit: 'contain'}}
                  alt="image"
                  key={url}
                  onClick={() => handleSelected(url)} />

              ))}
            </div>
            <img className={style.carouselImg}
              src={selected}
              alt="imagen seleccionada" />

          </div>

        </Modal.Body>
        <Modal.Footer>
          <button /* className={`${styleDetail.continue} ${styleDetail.textButton}`} */
            onClick={() => handleModalShow(false)}>Close</button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default ImageProductComponent