import animeConstant  from './anime.constant';

const initState = {
    animes: [],
    limit:20,
    page:1,
    loading:false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
      case animeConstant.GET_ANIME_LIST_REQUEST:
           return { ...state, loading:true };
    case animeConstant.ANIME_LIST_RECEIVED:
        return { ...state, animes:action.json, loading:false }
    default:
      return  {...state}
  }
}

export default reducer;