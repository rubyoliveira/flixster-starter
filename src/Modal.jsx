import { useState } from 'react'
import './Modal.css'


const Modal = ({movieData, closeModal}) => {

  return(
 <>
   <div className = "modal">
        <div className= "modal-content" >
        <img src = {`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} alt= "n/a" className = "modal-image"></img>
        <div className = "modal-bulk">
            <img src = {`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt = "n/a" className = "image-modal"></img>
            <div className = "modal-txt">
                <h1 className = "movie-title">{movieData.title}</h1>
                <p>Release Date: {movieData.release_date}</p>
                <p>Overview: {movieData.overview}</p>
                <button className = "close" onClick = {closeModal}>Close</button>
            </div>
        </div>
       </div>
   </div>`;
 </>
  );
}

export default Modal

