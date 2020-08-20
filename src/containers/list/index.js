import React, { useState } from 'react';
import PropTypes from "prop-types";
import constants  from '../../constants';

//redux hooks
import { useDispatch, useStore } from 'react-redux';

import './index.css';

function List(){
    const animes = useStore( state => state.anime.animes);

    return (
        <ul className=''>
                <li>{0}</li>
        </ul>
    )

}

List.propTypes = {
}

List.defaultProps = {
};

export default List;