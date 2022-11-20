import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './UserPopoverStyles.css'

const UserPopoverComponent = () => {
  return (
    <>
      {['bottom'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Body style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: 0, width: 120, /* height: 76, */ borderRadius: '0.25rem', background: 'white',}}>
                <button type='button' className='buttonLogin' data-bs-toggle='modal' data-bs-target='#profile' data-bs-whatever='@mdo' style={{height: 38, borderRadius: '0.25rem', backgroundColor: 'white'}}>
                  Perfil
                </button>
                <button type='button' className='buttonLogin' data-bs-toggle='modal' data-bs-target='#sell' data-bs-whatever='@mdo' style={{height: 38, borderRadius: '0.25rem', backgroundColor: 'white'}}>
                  Ventas
                </button>
                <button type='button' className='buttonLogin' data-bs-toggle='modal' data-bs-target='#loginModal' data-bs-whatever='@mdo' style={{height: 38, borderRadius: '0.25rem', backgroundColor: 'white'}}>
                  Iniciar Sesión
                </button>
                <button type='button' className='buttonLogin' data-bs-toggle='modal' data-bs-target='#registerModal' data-bs-whatever='@mdo' style={{ height: 38, borderRadius: '0.25rem', backgroundColor: 'white'}}>Register
                </button>
                <button type='button' className='buttonLogin' data-bs-toggle='modal' data-bs-target='#loginModal' data-bs-whatever='@mdo' style={{height: 38, borderRadius: '0.25rem', backgroundColor: 'white'}}>
                  Cerrar Sesión
                </button>
              </Popover.Body>
            </Popover>
          }
          >
          <Button variant="secondary"  style={{borderRadius: 25, width: 38, display: 'flex', justifyContent: 'center', height: 38, alignItems: 'center', padding: 0}} >
          <ion-icon name='person-outline' style={{fontSize: 30}} ></ion-icon>
          </Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default UserPopoverComponent


























 {/*  <div className='iconNavbar' data-bs-toggle='dropdown' style={{border: '1px solid red', borderRadius: 20, heigth: 40, width: 40}}>
        <button style={{borderRadius: 20}} >

        <ion-icon name='person-outline'></ion-icon>
        </button>
      </div>
      <div className='dropdown-menu dropdown-menu-lg-end'>
        {!user.id ? (
          <div>
            <li>
              <button
                type='button'
                className='buttonLogin'
                data-bs-toggle='modal'
                data-bs-target='#loginModal'
                data-bs-whatever='@mdo'
              >
                Login
              </button>
            </li>
            <li>
              <button
                type='button'
                className='buttonLogin'
                data-bs-toggle='modal'
                data-bs-target='#registerModal'
                data-bs-whatever='@getbootstrap'
              >
                Register
              </button>
            </li>
          </div>
        ) : (
          <li>
            <button className="buttonLogin" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </div> */}
