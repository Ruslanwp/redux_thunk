import { actions } from "../store";

const heroku_api = 'https://mysterious-reef-29460.herokuapp.com/api/v1';

export const validateRequest = (data) => {
  return function (dispatch) {
    fetch(`${heroku_api}/validate`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => dispatch(actions.signIn(response)))
  } 
}

export const getUser = (userId) => {
  return function (dispatch) {
    fetch(`${heroku_api}/user-info/${userId}`)
      .then(response => response.json())
      .then(response => dispatch(actions.findUser(response)))
  }
}
