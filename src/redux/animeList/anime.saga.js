import animeConstant  from './anime.constant';
import { api, apiUrl,  type } from '../../fetch';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchAnimeList(action){
    const { params = null } = action;
    const { page = 0, limit, q='' } = params;
    const url = apiUrl() + (params ? '?' : '');
    const json = yield api( url, type.GET, params).then(response => response);
    yield put({ type: animeConstant.ANIME_LIST_RECEIVED,  json: json, query: q });
}


export function* listWatcher(params) {
    yield takeLatest( animeConstant.GET_ANIME_LIST_REQUEST,  fetchAnimeList);
}