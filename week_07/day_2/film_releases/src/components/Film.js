import React from 'react';



const Film = ({children,name}) => {
    return(
        <ul><h2><a href={children}>{name}</a></h2></ul>
    )
 }

 export default Film;