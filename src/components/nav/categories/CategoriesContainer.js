import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from './Categories'

const CategoriesContainer = () => {
    //get categories
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.clientReducer)
    useEffect(() => {
        dispatch(GET_CATEGORIES())
    }, [])

    return (
        <select>
            <Categories categories={categories} />
        </select>
    )
}

export default CategoriesContainer