import React from 'react';
import Animecard from './animecard';

function mainContent(props) {
    return (
        <main>
        <div className='main-head'>
            <form className='search-box'
                  onSubmit={props.handleSearch}
            >
            <input type="Search"
                   placeholder='Search for an anime'
                   required
                   value={props.search ?? ""}
                   onChange={e => props.SetAnimeSearch(e.target.value)}


            />

            </form>
        </div>

        <div className='anime-list'>
            {props.animeList.map(anime => (
                
                    /* <Animecard
                     anime={anime}
                     key = {anime.mal_id}                    
                    
                     /> */
                     /* <div className='anime-lisst'>
                     <img src={anime.images.jpg.image_url} />
                     </div> */

                
            <article className='anime-card'>
            <a href={anime.url} target="_blank">
                <figure>
                    <img 
                    src={anime.images.jpg.image_url} 
                    alt='anime-image'
                     />
                </figure>
                <h3> {anime.title} </h3>

            </a>

        </article>    
               
            )
            
            )}
        </div>
        </main>
    );
}

export default mainContent;