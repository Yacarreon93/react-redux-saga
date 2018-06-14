import { takeLatest, all } from 'redux-saga/effects';

import * as TYPES from '../types';
import { fetchPerson, fetchPlanets, takeOneAtMost } from '../actions'; 

function* mySaga() {
  yield all([
    yield takeLatest(TYPES.FETCH_STAR_WARS_REQUEST, takeOneAtMost),
    yield takeLatest(TYPES.FETCH_STAR_WARS_PLANETS_REQUEST, fetchPlanets),
  ]);
}

export default mySaga;
