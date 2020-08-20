import React, { useState } from 'react';
import PropTypes from "prop-types";
import constants  from '../../constants';

//redux hooks
import { useDispatch, useSelector } from 'react-redux';

import './index.css';

function List(){
    const animes = useSelector( state => state.anime.animes);

    return (
        <ul className='style-container'>
                {animes && animes.map(anime => 
                <li  className='list-item-container' key={anime.mal_id}>
                    <div className="item-align">
                        <img className="img"  src={anime.image_url} alt="anime-movie-image"/>
                        <div className="title">{anime.title}</div>
                    </div>
                </li>
                )}
                {/* <div></div> */}
        </ul>
    )

}

List.propTypes = {
}

List.defaultProps = {
};

export default List;