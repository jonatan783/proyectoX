import React from 'react'
import style from './navbar.module.scss'
import {
  HeaderContainer,
  LoginContainer,
  SidebarContainer,
 /*  SearchNavContainer */
} from '../../containers'


function Navbar() {
  return (
    <header className={style.container}>
      <div className={style.header}>
        <span className="fs-3 title">Sativa</span>
        <HeaderContainer />
        <div className={style.containerSearch}>
          {/* <SearchNavContainer /> */}
          <LoginContainer />
          <SidebarContainer />
        </div>

      </div>

    </header>
  )

}

export default Navbar






































/* import React from "react";
import { Link } from "react-router-dom";
import { LoginContainer, SidebarContainer } from "../../containers";
import { useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { getProductByName } from '../../requests/productRequest';
import "./Navbar.css";

const NavbarComponent = ({ setProducts }) => {
  const user = useSelector((state) => state.user);
  const searchValue = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.value !== "") {
      getProductByName(searchValue.value)
        .then(res => setProducts(res.data));
    }
  };

  return (
    <div className="shadow" style={{ backgroundColor: "#f8f9fa" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand title">
            Sativa
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="dropdown1">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
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
                      <Link to={`/products/popular`}>
                        <div className="dropdown-item" href="#">
                          Productos Populares
                        </div>
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        catalogo 2
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
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
                        combo invierno
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        combo verano
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
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

                {user.roleId === 2 || user.roleId === 3 ? (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#!"
                      id="adminDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ backgroundColor: "#008200", color: "white" }}
                    >
                      ADMIN
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to={`/admin/users`} className="dropdown-item">
                          Usuarios
                        </Link>
                      </li>

                      <li>
                        <Link to={`/admin/orders`} className="dropdown-item">
                          Órdenes
                        </Link>
                      </li>
                      <li>
                        <Link to={`/admin/products`} className="dropdown-item">
                          Productos
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/admin/categories`}
                          className="dropdown-item"
                        >
                          Categorías
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <></>
                )}
              </div>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                {...searchValue}
              />
              <div className="iconNavbar" type="submit">
                <ion-icon name="search-outline"></ion-icon>
              </div>
            </form>
          </div>
          {user.id ? (
            <div>
              <span>{user.name}</span>
            </div>
          ) : null}
        </div>
      </nav>

      <LoginContainer />
      <SidebarContainer />
    </div>
  );
};

export default NavbarComponent;
 */