import { useState, useEffect } from 'react'
import './Moviecards.css'


const Moviecards = ({title, image, rating, handleCardClick}) => {
    const [clicked, setClicked] = useState(false)
    const [watched, setWatched] = useState(false)
    
    const isClicked = () => {
        setClicked(true)
    }

    const revertClicked = () => {
        setClicked(false)
    }

    const isWatched = () => {
        if(watched === true){
            setWatched(false)
        } else{
            setWatched(true)
        }
    }

  return(
  <>
    <div className ="individual-cards" >
        {watched && <div className = "watched">WATCHED    <button class = "unwatch" onClick = {isWatched}>&#10006;</button></div>}
        <img src = {image} alt= "n/a" className = "image" onClick={handleCardClick}></img>
        <h4 className ="title">{title}</h4>
        <p className ="rating">&#11088; {rating}</p>
        {!clicked && <button onClick = {isClicked} className = "like-button">&#9825;</button>}
        {clicked && <button onClick = {revertClicked} className = "like-button">&#128151;</button>}
        {!watched && <button onClick = {isWatched} className = "watch-button">Watched?</button>}
    </div>
  </>
  );
}

export default Moviecards
