import React from 'react';

function animecard(anime) {
    return (
        <article className='anime-card'>
            <a href=''>
                <figure>
                    <img 
                    // src={anime.images.jpg.image_url} 
                    alt='anime-image'
                     />
                </figure>
                <h3> {anime.title} </h3>

            </a>

        </article>
    );
}

export default animecard;