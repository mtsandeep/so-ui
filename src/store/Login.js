import { createAction, handleActions } from 'redux-actions';

const initialState = {
  username: '',
  password: '',
  token: '',
  error: ''
};

export const setUsername = createAction(
  'so-ui/Login/SET_USERNAME',
  username => username
);

export const setPassword = createAction(
  'so-ui/Login/SET_PASSWORD',
  password => password
);

export const setToken = createAction('so-ui/Login/SET_TOKEN', token => token);
export const setError = createAction('so-ui/Login/SET_ERROR', error => error);
export const clearError = createAction('so-ui/Login/CLEAR_ERROR');

export const login = () => async (dispatch, getState) => {
  const { login: { username, password } } = getState();
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: username,
      password
    })
  });
  try {
    if (response.status === 200) {
      const data = await response.json();
      dispatch(clearError());
      dispatch(setToken(data.token));
    } else {
      dispatch(setError('Invalid details'));
    }
  } catch (err) {
    dispatch(setError('Some error occured'));
  }
};

const reducer = handleActions(
  new Map([
    [
      setUsername,
      (state, action) => ({
        ...state,
        username: action.payload
      })
    ],
    [
      setPassword,
      (state, action) => ({
        ...state,
        password: action.payload
      })
    ],
    [
      setToken,
      (state, action) => ({
        ...state,
        token: action.payload
      })
    ],
    [
      setError,
      (state, action) => ({
        ...state,
        error: action.payload
      })
    ],
    [
      clearError,
      (state, action) => ({
        ...state,
        error: ''
      })
    ]
  ]),
  initialState
);

export default reducer;
