import React from 'react'
import { NavbarComponent } from '../components'

const NavbarContainer = ({setProducts}) => {
    return (
        <div>
            <NavbarComponent setProducts={setProducts}/>
        </div>
    )
}

export default NavbarContainer
