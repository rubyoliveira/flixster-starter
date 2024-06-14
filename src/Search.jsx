import { useState } from 'react'
import './Search.css'
import PropTypes from "prop-types"

const Search = ({handleSearchQuery}) => {
    const [searchTerm, setSearchTerm] = useState("")


    function handleSearch(e) {
        setSearchTerm(e.target.value)
    }

    function handleSearchSubmit() {
        handleSearchQuery(searchTerm)
    }

    return (
        <div className = "input-wrapper">
            <input className = "search-bar"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => handleSearch(e)}
            />
            <button onClick={handleSearchSubmit} className="search-button" type="submit">
            🔍
            </button>
        </div>
    );
}


export default Search
