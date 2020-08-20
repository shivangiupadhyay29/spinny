import animeConstant  from './anime.constant';

const initState = {
    animes: [],
    limit:20,
    page:1,
    loading:false,
    query:null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
      case animeConstant.GET_ANIME_LIST_REQUEST:
           return { ...state, loading:true };
    case animeConstant.ANIME_LIST_RECEIVED:
        return { ...state, 
          animes: [...state.animes , ...action.json.results],
          loading:false,
          page:action.json.last_page,
          request_cache_expiry: `${Math.ceil(action.json.request_cache_expiry/1000)}ms`,
          request_cached:action.json.request_cached,
          query:action.query
        }
    default:
      return  {...state}
  }
}

export default reducer;