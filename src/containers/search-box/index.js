import React, { useState } from 'react';
import PropTypes from "prop-types";
import constants  from '../../constants';
import RequestInfo  from '../../component/requestInfo';

//redux hooks
import { useDispatch, useSelector } from 'react-redux';

//debounce
// import { debounce } from '../../utils';

//actions
import { getAnimes } from '../../redux/animeList';

import './index.css';

function SearchBox(props){
    const { requestLink } = props;
    const [ query, setQuery ] = useState('');
    const [error, setError] = useState(null);
    const dispatch  = useDispatch();
    const page = useSelector( state => state.anime.page );
    const limit = useSelector(state => state.anime.limit);
    const loading = useSelector(state => state.anime.loading);



    const requestAnimeData = (event) => {
        setError(null); 
        if(query.length > 3){
           dispatch(getAnimes({q: query, limit, page })); 
        }
        else {
          setError(constants.ERROR_MESSAGE); 
       }
    }


    const searchAnimeHandler = (event) => { 
        setError(null); 
        event.persist();
        if(event.key === 'Enter'){
            query.length > 3 ? requestAnimeData(event): setError(constants.ERROR_MESSAGE) 
    }
}

       const updateState = (event) => {
            const query = event.target.value;
            setQuery(query);
       }

    return (
        <div className='header'>
              
                    <div className="">
                        <div className="flex align-items-center"> 
                            <input className="form-control form-control-lg margin-top" type="text" value={query} onKeyDown={searchAnimeHandler} onChange={updateState}  placeholder={`${constants.SEARCH_PLACEHOLDER}`} />
                            <button type="button" className="btn btn-info margin-top" onClick={requestAnimeData}>{`${constants.GO}`}</button>
                        </div>
                        {error && <div className="red">{error}</div>}
                    </div>

                    <RequestInfo requestLink={requestLink} isCached={props.isCached} delay={props.delay} />
               
        </div>
    )

}

SearchBox.propTypes = {
    requestLink: PropTypes.string.isRequired
}

SearchBox.defaultProps = {
    requestLink: 'https://api.jikan.moe/v3/search/anime?',
};

export default SearchBox;