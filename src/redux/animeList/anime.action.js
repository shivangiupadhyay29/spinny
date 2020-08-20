import animeConstant  from './anime.constant';

export const getAnimes = (params) => ({
    type: animeConstant.GET_ANIME_LIST_REQUEST,
    params
});