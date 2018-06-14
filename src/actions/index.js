import { call, put, take, actionChannel } from 'redux-saga/effects';

import * as TYPES from '../types';

export const api = (url) => fetch(url).then(response => response.json());

export const fetchStarWarsRequest = () => ({
  type: TYPES.FETCH_STAR_WARS_REQUEST
});

export const fetchStarWarsPlanetsRequest = () => ({
  type: TYPES.FETCH_STAR_WARS_PLANETS_REQUEST
});

export const confirmFetchRequest = () => ({
  type: TYPES.CONFIRMATION
})

export const queueChannelRequest = () => ({
  type: TYPES.QUEUE_CHANNEL_REQUEST
});

export function* fetchPerson(action) {
  try {
    // console.log('entered');
    // yield take(TYPES.CONFIRMATION);
    // console.log('passed confirmation');
    const person = yield call(api, 'https://swapi.co/api/people/');
    yield put({ type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results });
  } catch (e) {
    console.log(e);
  }
}

export function* fetchPlanets(action) {
  try {
    const planets = yield call(api, 'https://swapi.co/api/planets/');
    yield put({ type: TYPES.FETCH_STAR_WARS_PLANETS_SUCCESS, data: planets.results });
  } catch (e) {
    console.log(e);
  }
}

export function* takeOneAtMost() {
  try {
    const chan = yield actionChannel(TYPES.QUEUE_CHANNEL_REQUEST);
    for (let i = 1; i >= 1; i++) {
      yield take(chan);
      yield call(api, 'https://swapi.co/api/people/');
      yield put({ type: TYPES.FETCH_STAR_WARS_SUCCESS, data: i });
    }
  } catch (e) {
    console.log(e);
  }
}
