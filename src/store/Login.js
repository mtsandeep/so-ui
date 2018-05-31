import { createAction, handleActions } from 'redux-actions';

const initialState = {
  username: '',
  password: ''
};

export const setUsername = createAction(
  'so-ui/Login/SET_USERNAME',
  username => username
);

export const setPassword = createAction(
  'so-ui/Login/SET_PASSWORD',
  password => password
);

const reducer = handleActions(
  {
    'so-ui/Login/SET_USERNAME': (state, action) => ({
      ...state,
      username: action.payload
    }),
    'so-ui/Login/SET_PASSWORD': (state, action) => ({
      ...state,
      password: action.payload
    })
  },
  initialState
);

export default reducer;
