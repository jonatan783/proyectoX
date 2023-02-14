import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { addOrCreateItemCart } from '../../redux/itemCart'
import { useDispatch, useSelector } from 'react-redux';
/* import Comments from '../components/Comments'; */
import { Valoration, Comments } from '..'
import { ValorationContainer, CommentsContainer, DropdawnContainer, FeatuedOrderContainer } from '../../containers';
import { getProductById } from '../../requests/productRequest'
import { firstUppercase, convertNumToArray } from '../../utils/functions';
import sellerLogo from '../../assets/img/seller-logo.png'
import visaCredito from '../../assets/img/visa-credito.svg'
import amexCredito from '../../assets/img/amex-credito.svg'
import naranjaCredito from '../../assets/img/naranja-credito.svg'
import mastercardCredito from '../../assets/img/mastercard-credito.svg'
import visaDebito from '../../assets/img/visa-debito.svg'
import xDebito from '../../assets/img/x-debito.svg'
import mastercardDebito from '../../assets/img/mastercard-debito.svg'
import cabalDebito from '../../assets/img/cabal-debito.svg'
import pagoFacil from '../../assets/img/pagoFacil.svg'
import rapiPago from '../../assets/img/rapiPago.svg'
import './SingleProduct.css';
import '../Cart/cart.css';
import '../Valoration/Valoration.css'


const SingleProductComponent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [comment, setComment] = useState(0);
  const [mainSrc, setMainSrc] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [valoration, setValoration] = useState(0);
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  const shoppingCart = useSelector(state => state.shoppingCart);
  console.log('product ---> ', product)
  const handleOnclick = (productId, quantity) => {
    if (!user.id) {
      return;
    }
    dispatch(
      addOrCreateItemCart({
        ShoppingCartId: shoppingCart.id,
        productId,
        quantity,
      })
    );
  };


  useEffect(() => {
    getProductById(id).then(res => setProduct(res.data))
  }, [id]);
  useEffect(() => { });

  const handleImageClick = event => {
    setMainSrc(event.target.src);
  };

  const prevImg = () => {
    if (product.img.indexOf(mainSrc) > 0) {
      setMainSrc(product.img[product.img.indexOf(mainSrc) - 1]);
    }
  };

  const nextImg = () => {
    if (product.img.indexOf(mainSrc) < product.img.length - 1) {
      setMainSrc(product.img[product.img.indexOf(mainSrc) + 1]);
    }
  };

  return (
    <div className='container singleProductDiv'>
      <div className='row' style={{ justifyContent: 'center', borderRadius: 4, backgroundColor: '#fff', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 40%)' }}>
        <div className='row' style={{padding: 20,}}>
          <div className='thumbnails-div col-1' style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 10, height: 400, overflowY: 'scroll', alignItems: 'center' }}>
            {product.img
              ? product.img.map((ruta, index) => 
                <img className='product-thumbnail' src={ruta} onMouseOver={handleImageClick} alt='product' key={index}></img>
              ) : null}
          </div>
          <div className='main-image col-4'>
            <img id='featured' className='img-fluid product-img' alt='main product' style={{alignSelf: 'center', width: 'auto', maxHeight: '400px', margin: 'auto',}} src={product.img ? mainSrc ? mainSrc : product.img[0] : 'https://peugeot.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png'}
            />

          </div>
          <div className='col-4'>
            <div><h1 style={{fontSize: 20, color: 'rgba(0,0,0,.9)'}}>{firstUppercase(product?.name)}</h1></div>
            <div><ValorationContainer valoration={setValoration}/></div>
            <div style={{fontWeight: 300}}>
              <s style={{fontSize: 16, fontWeight: 400, color: 'rgba(0,0,0,.55)'}}>{`$ 4234`}</s>
              <div>
                <span style={{fontSize: 36, fontWeight: 200}}>{`$ ${product?.price}`}</span>
                <span style={{marginLeft: 6, fontWeight: 300, fontSize: 18, color: '#00a650'}}>{`${31}% OFF`}</span>
              </div>
              <div style={{fontWeight: 300, fontSize: 18, color: '#00a650'}}><p>{`en ${12}x $ ${5113}`}</p></div>
            </div>
            <div>
              <h2 style={{fontWeight: 500, fontSize: 14}}>Caracteristicas del Producto</h2>
              <div>
                <ul style={{ fontWeight: 300, fontSize: 14,}}>
                  <li>Caracteristica 1</li>
                  <li>Caracteristica 1</li>
                  <li>Caracteristica 1</li>
                  <li>Caracteristica 1</li>
                  <li>Caracteristica 1</li>
                  <li>Caracteristica 1</li>
                  <li>Caracteristica 1</li>
                  <li>Caracteristica 1</li>
                  <li>Caracteristica 1</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-3' style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: 15, }}>
            <div style={{border: '1px solid rgba(0,0,0,.1)', borderRadius: 8, boxShadow: '0 1px 2px 0 rgb(0 0 0 / 40%)', padding: 10}}>
              <div style={{display: 'flex', justifyItems: 'center'}}>
                <div style={{marginLeft: 6, fontWeight: 300, fontSize: 14, color: '#00a650'}}>_</div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color='#00a650' fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
                </div>
                <span style={{marginLeft: 6, fontWeight: 300, fontSize: 14, color: '#00a650',}}>Llega gratis mañana</span>
              </div>
              <div style={{display: 'flex', justifyItems: 'center', marginTop: 10}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color='#3483fa' fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                </div>
                <a href="#" style={{marginLeft: 6, fontWeight: 300, fontSize: 14, textDecoration: 'none', color: '#3483fa'}}>Enviar a mariano boedo 1741</a>
              </div>
              <br />
              <div style={{display: 'flex'}}>
                <img src={sellerLogo} style={{width: 40, height: 40}} alt="" />
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <span style={{marginLeft: 10, color: '#3483fa'}}>Nombre de la tienda</span>
                  <span style={{color: 'rgba(0,0,0,.55)', fontSize: 12, marginLeft: 10, }}>200 ventas</span>
                </div>
              </div>
              <br />
              <div style={{display: 'flex', alignItems: 'center',}}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color='rgba(0,0,0,.55)' fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
                    <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
                    <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
                  </svg>
                </div>
                <div style={{color: 'rgba(0,0,0,.55)', fontSize: 12, marginLeft: 10,}}>1 año de garantía</div>
              </div>
              <br />
              <div><p style={{fontWeight: 500, fontSize: 16}}>Stock Disponible</p></div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <span style={{color: 'rgba(0,0,0,.9)', fontWeight: 300, fontSize: 16}}>Cantidad:</span>
                <span style={{marginLeft: 10, color: 'rgba(0,0,0,.9)', fontWeight: 500, fontSize: 16}}>{`${1} unidad`}</span>
                <span><DropdawnContainer options={convertNumToArray(product?.stock)}/></span>
                <span style={{color: 'rgba(0,0,0,.55)', fontSize: 12, fontWeight: 300, marginLeft: 10}}>{`(${product?.stock} disponibles)`}</span>
              </div>
              <br />
              <button className='buttonPay' onClick={() => console.log('comprar')}>Comprar</button>
              <br />
              
              <button className='buttonPay' style={{backgroundColor: 'rgba(96, 196, 83, 0.4)', color: 'rgb(60 139 50)', marginTop: 10}} onClick={() => console.log('comprar')}>Agragar al carrito</button>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div><h2 style={{color: 'rgba(0,0,0,.9)', fontSize: 24, fontWeight: 400 }}>Mas productos del vendedor</h2></div>
        <FeatuedOrderContainer/>
      </div>

      <br />

      <div>
        <div className='row' style={{ justifyContent: 'center', borderRadius: 4, backgroundColor: '#fff', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 40%)' }}>
          <div className='row' style={{padding: 20,}}>
            <div className='col-9'>
              <div style={{display: 'flex', justifyContent: 'center',}}>
                <h2 style={{color: 'rgba(0,0,0,.9)', fontSize: 24, fontWeight: 400 }}>Descripción</h2>
              </div>
              <div>
                <p style={{color: '#666', fontSize: 20, fontWeight: 400}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum praesentium a labore laudantium consequuntur. Tempora nam autem error id nobis magni! Veritatis iure nulla quo! Provident molestiae deleniti aspernatur porro!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum ut ducimus similique. Nam est error in quaerat excepturi, rerum autem explicabo iusto sequi aperiam dolorem sunt, soluta laboriosam maiores!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dolore! Eos quos culpa eum porro nisi saepe quibusdam quo. Sapiente eaque sequi incidunt maiores, vel mollitia ipsam velit? Consectetur, temporibus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo obcaecati totam? Perferendis neque et sit provident vitae. Exercitationem esse eaque quia veniam temporibus totam, eius amet suscipit ratione architecto!
                </p>
              </div>
              
            </div>

            <div className='col-3' style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: 15, }}>
            <div style={{border: '1px solid rgba(0,0,0,.1)', borderRadius: 8, boxShadow: '0 1px 2px 0 rgb(0 0 0 / 40%)', padding: 10}}>
              <div><h2 style={{color: 'rgba(0,0,0,.9)', fontSize: 18, fontWeight: 300, paddingTop: 15}}>Medios de pago</h2></div>
              <hr />
              <div>
                <div><p style={{color: 'rgba(0,0,0,.55)', fontSize: 16, fontWeight: 300}}>Tarjetas de crédito</p></div>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={visaCredito} alt="" /></div>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={amexCredito} alt="" /></div>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={naranjaCredito} alt="" /></div>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={mastercardCredito} alt="" /></div>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={visaCredito} alt="" /></div>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={naranjaCredito} alt="" /></div>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={amexCredito} alt="" /></div>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={mastercardCredito} alt="" /></div>
                </div>
              </div>
              <br />
              <div>
                <div><p style={{color: 'rgba(0,0,0,.55)', fontSize: 16, fontWeight: 300}}>Tarjetas de débito</p></div>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={visaDebito} alt="" /></div>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={xDebito} alt="" /></div>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={mastercardDebito} alt="" /></div>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={cabalDebito} alt="" /></div>
                </div>
              </div>
              <br />
              <div>
                <div><p style={{color: 'rgba(0,0,0,.55)', fontSize: 16, fontWeight: 300}}>Efectivo</p></div>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={pagoFacil} alt="" /></div>
                  <div style={{marginRight: 20, marginBottom: 10}}><img src={rapiPago} alt="" /></div>
                </div>
              </div>
            </div> 
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className='row' style={{ justifyContent: 'center', borderRadius: 4, backgroundColor: '#fff', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 40%)' }}>
        <div className='row' style={{padding: 20,}}>
          <div className='col-9'>
            <div style={{display: 'flex', justifyContent: 'center',}}>
              <h2 style={{color: 'rgba(0,0,0,.9)', fontSize: 24, fontWeight: 400 }}>Preguntas y Respuestas</h2>
            </div>
            <br />
            <div>
              <CommentsContainer lengthComment={setComment} />
            </div>
            <div style={{marginTop: 40}}>
              <h3 style={{fontWeight: 400, fontSize: 18, color: 'rgba(0,0,0,.9)'}}>Últimas realizadas</h3>
            </div>
            <br />
            <div>
              <div style={{fontWeight: 400, fontSize: 14, color: 'rgba(0,0,0,.9)'}}>¿De que año es este modelo?</div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color='rgba(0,0,0,.55)' fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                  </svg>
                </div>
                <div style={{fontWeight: 400, fontSize: 14, color: 'rgba(0,0,0,.55)', marginLeft: 6,}}>Hola! 2022 saludos</div>
              </div>
            </div>
            <br />
            <div>
              <div style={{fontWeight: 400, fontSize: 14, color: 'rgba(0,0,0,.9)'}}>Viene con funda y templado ?</div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color='rgba(0,0,0,.55)' fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                  </svg>
                </div>
                <div style={{fontWeight: 400, fontSize: 14, color: 'rgba(0,0,0,.55)', marginLeft: 6,}}>Hola Guiliana, viene sin accesorios. Saludos Argentinacolor.com</div>
              </div>
            </div>
            <br />
            <div>
              <div style={{fontWeight: 400, fontSize: 14, color: 'rgba(0,0,0,.9)'}}>Es argentino la fabricación?</div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color='rgba(0,0,0,.55)' fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                  </svg>
                </div>
                <div style={{fontWeight: 400, fontSize: 14, color: 'rgba(0,0,0,.55)', marginLeft: 6,}}>Hola si, es industria Argentina. Saludos Argentinacolor.com</div>
              </div>
            </div>
            
          </div>

          <div className='col-3' style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: 15, }}></div>
        </div>
      </div>

      <br />

      <div className='row' style={{ justifyContent: 'center', borderRadius: 4, backgroundColor: '#fff', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 40%)' }}>
        <div className='row' style={{padding: 20,}}>
          <div className='col-9'>
            <div style={{display: 'flex', justifyContent: 'center',}}>
              <h2 style={{color: 'rgba(0,0,0,.9)', fontSize: 24, fontWeight: 400 }}>Calificaciones y opiniones</h2>
            </div>
            <br />
            <div>
              <CommentsContainer lengthComment={setComment} />
            </div>
            <br />
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div><ValorationContainer valoration={setValoration}/></div>
                <div style={{color: 'rgba(0,0,0,.55)', fontSize: 12,}}>13/02/2022</div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestias quia natus cum perspiciatis beatae ab. Facilis dolorem, error porro nesciunt fuga aliquid quod, nostrum velit veritatis repellat asperiores architecto.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi quaerat perferendis, cumque facilis neque minus omnis ut explicabo molestiae voluptate sunt exercitationem eos similique in vero nisi nobis ipsam.
                </p>
              </div>
            </div>

            <hr />

            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div><ValorationContainer valoration={setValoration}/></div>
                <div style={{color: 'rgba(0,0,0,.55)', fontSize: 12,}}>13/02/2022</div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestias quia natus cum perspiciatis beatae ab. Facilis dolorem, error porro nesciunt fuga aliquid quod, nostrum velit veritatis repellat asperiores architecto.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi quaerat perferendis, cumque facilis neque minus omnis ut explicabo molestiae voluptate sunt exercitationem eos similique in vero nisi nobis ipsam.
                </p>
              </div>
            </div>
            <hr />
          </div>
          <div className='col-3' style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: 15, }}></div>
        </div>
      </div>
      
    </div>
  );
};

export default SingleProductComponent;
