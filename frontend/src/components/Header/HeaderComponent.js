import React from 'react'
import style from './header.module.scss'
import { Link } from "react-router-dom";


function HeaderComponent() {

  return (
    <div className="" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <div className={style.dropdown}>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-dark ms-5"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              GROWSHOP
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link to={`/products/popular`} className=" text-decoration-none">
                  <div className="dropdown-item " href="#">
                    Productos Populares
                  </div>
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Catalogo 2
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-dark ms-5"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              COMBOS
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Combo invierno
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Combo verano
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-dark ms-5"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              NOSOTROS
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  nuestra historia
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  nuestra mision
                </a>
              </li>
            </ul>
          </li>
          
        </div>
      </ul>
  
    </div>
  )
}

export default HeaderComponent