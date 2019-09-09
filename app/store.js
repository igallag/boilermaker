import { createStore, applyMiddleware } from 'redux';
import yourReducer from './yourReducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// ACTION TYPES
const GET_PUPPY = "GET_PUPPY"
const GET_KITTEN = "GET_KITTEN"

// ACTION CREATORS
const getPuppy = (puppy) => {
    return {
        type: GET_PUPPY,
        puppy,
    }
}

const getKitten = (kitten) => {
    return {
        type: GET_KITTEN,
        kitten,
    }
}


const store = createStore(
  yourReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;