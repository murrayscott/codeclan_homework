import React, {useState} from 'react';

const FilmForm = ({handleSubmit}) => {
    const[name, setName] = useState('');
    const[url, setUrl] = useState('');

    function onSubmit(event){
        event.preventDefault();

        const newFilm ={
            id: Date.now(),
            name: name,
            url: url,
        };
        handleSubmit(newFilm);
        setName('');
        setUrl('');
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)}/>

            <label htmlFor="url">Url:</label>
            <input id="url" type="text" value={url} onChange={(event) => setUrl(event.target.value)}/>
            <input type="submit"/>
        </form>)
};

export default FilmForm;
