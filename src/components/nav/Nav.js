import React from 'react'
import OrderinContainer from './ordering/OrderinContainer'
import SearchBar from './SearchBar'

const Nav = () => {
    return (
        <nav>
            {/* LOGO */}
            {/* CATEGORIES FILTERS */}

            {/* SEARCHBAR */}
            <SearchBar />
            {/* ORDERING */}
            <OrderinContainer />
        </nav>
    )
}

export default Nav