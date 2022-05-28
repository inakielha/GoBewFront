import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsMap({products}) {
    return (
        <>
            {
                products?.map((prod)=>{
                    return <ProductCard productName={prod.productName} productPrice={prod.productPrice} productStock={prod.productStock}/>
                })
            }
        </>
    )
}
