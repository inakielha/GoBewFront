import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { GET_PRODUCTS } from '../../redux/actions';
import ProductsMap from './ProductsMap';

export default function ProductCardContainer() {
    
    const {products} = useSelector((store)=> store.clientReducer)
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(GET_PRODUCTS())
    },[dispatch])


    return (
        <div>
            <ProductsMap products={products}/>
        </div>
    )
}

