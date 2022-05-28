import React from 'react'

const Categories = ({ categories }) => {
    return (
        <>
            {categories?.map(category => <option key={category.id}>{category.name}</option>)}
        </>
    )
}

export default Categories