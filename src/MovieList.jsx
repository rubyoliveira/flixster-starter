import { useState } from 'react'
import Moviecards from './Moviecards';
import Modal from './Modal';


const MovieList = ({data}) => {
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState("")

    const displayModal = (movieData) => {
        setOpen(true);
        setModalData(movieData)
    }
    const handleClose = () => {
        setOpen(false);
      };
    

    return (
        <>
        <div className="movie-list">
            {data.map(movie => (
                <Moviecards 
                key={`${movie.id}-${Math.random()}`}
                title={movie.title} 
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                rating={movie.vote_average} 
                handleCardClick={() => displayModal(movie)} 
                 />
                
            ))}
            {open && < Modal  movieData ={modalData} closeModal ={handleClose} />}
        </div>
        </>
    )
}



export default MovieList