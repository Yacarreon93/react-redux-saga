import { combineReducers } from 'redux';
import * as TYPES from '../types';

const initialState = {
  people: [],
  planets: [],
};

const handleStarWarsFetchSuccess = (state, action) => {
  return {
    ...state,
    people: action.data,
  };
};

const handleStarWarsFetchPlanetsSuccess = (state, action) => {
  return {
    ...state,
    planets: action.data,
  };
};

const starWars = (state = initialState, action) => {
  const handlers = {
    [TYPES.FETCH_STAR_WARS_SUCCESS]: handleStarWarsFetchSuccess,
    [TYPES.FETCH_STAR_WARS_PLANETS_SUCCESS]: handleStarWarsFetchPlanetsSuccess,
  }
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
};

const rootReducer = combineReducers({
  starWars
});

export default rootReducer;
