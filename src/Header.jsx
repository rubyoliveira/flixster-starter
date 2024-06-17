import { useState } from 'react'
import './Header.css'
import PropTypes from 'prop-types'


const Header = ({openSearch, search, handleSortOptions, returnNowPlaying}) => {
    const handleSort = (event) =>{
        event.preventDefault();
        const submittedData = event.target.value;
        handleSortOptions(submittedData)
    }

  return(
  <>
  <div className="header">
    <header className = "header-info">
        <h1 className= "flixster">&#127916;FLIXSTER&#127916;</h1>
        {search && <button onClick={openSearch} className="search">Search</button>}
        <div className = "dropdown">
            <select className="sort" onChange = {handleSort}> 
                <option>sort by...</option>
                <option value={"primary_release_date.desc"}>newest</option>
                <option value = {"revenue.desc"}>revenue</option>
                <option value = {"popularity.desc"}>popularity</option>
            </select>
        </div>
    </header>
    </div>
  </>
  );
}

Header.propTypes = {
    handleSortOptions: PropTypes.func,
}

export default Header