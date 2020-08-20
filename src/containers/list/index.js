import React from 'react';

//redux hooks
import { useDispatch, useSelector } from 'react-redux';
import { getAnimes } from '../../redux/animeList';

import './index.css';

function List(){
    const dispatch = useDispatch();
    const animes = useSelector( state => state.anime.animes);
    const query = useSelector( state => state.anime.query);
    const limit = useSelector( state => state.anime.limit);
    const page = useSelector(state => state.anime.page);


    const getMoreRecords = () => {
        dispatch(getAnimes({ q: query, limit, page:page+1  }));
    }

    return (
    <div class="container">
        <ul className='style-container'>
                {animes && animes.map(anime => 
                <li  className='list-item-container' key={anime.mal_id}>
                    <div className="item-align">
                        <img className="img"  src={anime.image_url} alt="anime-movie"/>
                        <div className="title">{anime.title}</div>
                    </div>
                </li>
                )}
        </ul>
        {animes?.length>0 && <div><button onClick={getMoreRecords}>{'Load More....'}</button></div>}
    </div>
    )

}

List.propTypes = {
}

List.defaultProps = {
};

export default List;