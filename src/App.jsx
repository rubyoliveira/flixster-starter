import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header';
import MovieList from './MovieList';
import Search from './Search'
import.meta.env.VITE_API_KEY

const App = () => {
  const [page, setPage] = useState(1)
  const [newpage, setNewPage] = useState(1)
  const [data, setData] = useState([])
  const [modifiedData, setModifiedData] = useState([])
  const [openSearch, setOpenSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openNowPlaying, setOpenNowPlaying] = useState(true);
  const [sort, setSort] = useState(false)
  const [sortOptions, setsortOptions] = useState('')

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDZiMWUwN2RhOWViODc4NWMwZGMzNjgwYmFhYTE2ZiIsInN1YiI6IjY2Njc4OWE5ZGI3Njc0YzUxODg1YTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oiN-0A06U1UrdYOtLm724Ll4CztdmoXdavEsUWo9UeE'
      }
    };
    
    if (openSearch === false && sort === false) {
      fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options)
        .then(response => response.json())
        .then(response => {
          setData([...modifiedData, ...response.results])
          setModifiedData([...modifiedData, ...response.results])
        });
    } else if (openSearch === true) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => {
          //setData([...data, ...response.results])
          setModifiedData(response.results)
        });
    } else if (sort === true){
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=${sortOptions}`, options)
        .then(response => response.json())
        .then(response => {
          //setData([...data, ...response.results])
          setModifiedData(response.results)
        });
    }
  }, [page, searchQuery, sortOptions, newpage]);


  const handleClick = () => {
      setPage(page + 1)
  }
  const handleSearchQuery = (term) => {
    setSearchQuery(term)
  }

  const handleOpenSearch = () => {
    setOpenSearch(true);
    setModifiedData([]);
    setSearchQuery('');
    setOpenNowPlaying(false);
  };

  const returnNowPlaying = () => {
    setOpenSearch(false)
    setModifiedData(data);
    setSort(false)
  //setData(data);
    setOpenNowPlaying(true);
  }

  const handleSortOptions = (sortType) => {
    setSort(true);
    setsortOptions(sortType);
  }

  return (
    <div className="App">
      <Header openSearch = {handleOpenSearch} search = {openNowPlaying} handleSortOptions = {handleSortOptions}/>
      {!openNowPlaying && <button className = "now-playing" onClick = {returnNowPlaying}>Now Playing</button> }
      {sort && <button className = "now-playing" onClick = {returnNowPlaying}>Now Playing</button>}
      {openSearch && <Search handleSearchQuery = {handleSearchQuery} />}
      <MovieList data = {modifiedData} />
      {openNowPlaying && <button onClick={handleClick} className="load-more">Load More</button>}
      {openNowPlaying && <footer className="footer">© 2024 FLIXSTER</footer>}
    </div>

  );
}

export default App
