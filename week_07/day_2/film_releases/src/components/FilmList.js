import React from 'react';
import Film from "./Film";


const FilmList = ({films}) => {

    const filmNodes = films.map(film => (
        <Film key={film.id} name={film.name}>{film.url}</Film>
    ))

    return(
        <>
        {filmNodes}
        </>
    )
}

export default FilmList;