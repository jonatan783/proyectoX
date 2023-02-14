import React from 'react'
import { useParams } from 'react-router';
import { getProductById } from '../requests/productRequest';
import { SingleProductComponent } from '../components'

const SingleProductContainer = () => {
    
    return (
        <div style={{backgroundColor: 'rgba(56, 179, 101, 0.0705882353)', width: '100%'}}>
            <SingleProductComponent/>
        </div>
    )
}

export default SingleProductContainer
