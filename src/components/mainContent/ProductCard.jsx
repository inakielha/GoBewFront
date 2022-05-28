import React from 'react'

export default function ProductCard({productName, productPrice, productStock}) {
    return (
        
        <div>
            <h2>{productName}</h2>
            <img src="https://via.placeholder.com/150" alt="product-img" />
            <p>{productPrice}</p>
            <span>{productStock}</span>
        </div>
    )
}

