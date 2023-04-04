import React from 'react';

const Album = props => {
    const arrayOfNames = props.musicData.albums.items.map(name => {
       return ( 
            name.artists
       )    
    })

    return (
        console.log(arrayOfNames)
    )
}

export default Album;