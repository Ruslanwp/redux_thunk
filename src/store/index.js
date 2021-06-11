import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {
  loggedUserId: null,
  loggedUser: null,
  // isUserValid
}

const SIGN_IN = 'SIGN_IN';
const FIND_USER = 'FIND_USER';

export const actions = {
  signIn: (data) => ({ type: SIGN_IN, payload: data }),
  findUser: (data) => ({ type: FIND_USER, payload: data })
}

function userReducer(state = initialState, action) {
  switch(action.type) {
    case SIGN_IN:
      console.log(action);
      if (action.payload.status === 'ok') {
        return {
          ...state,
          loggedUserId: action.payload.data.id
        }
      }

      return {
        ...state,
        loggedUserId: null
      }

    case FIND_USER:
      console.log(action);

      if (action.payload.status === 'ok') {
        return {
          ...state,
          loggedUser: action.payload.data
        }
      }

      return state


    default:
      return state;
  }
}

export const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)))