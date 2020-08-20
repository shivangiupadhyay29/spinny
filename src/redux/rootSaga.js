import { all } from 'redux-saga/effects';

import { listWatcher } from './animeList/anime.saga';


export default function* rootSaga() {
   yield all([
        listWatcher()
    ]);
}