import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';

// ----------------------------------------------------------------------

function objFromArray(array, key = 'id') {
  return array.reduce((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});
}

const initialState = {
  isLoading: false,
  error: false,
  tokens: [],
  token: {}
};

const slice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET LABELS
    getAllTokensSuccess(state, action) {
      state.isLoading = false;
      state.tokens = action.payload;
    },
    getTokenByIdSuccess(state, action) {
      state.isLoading = false;
      state.token = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getAllTokens() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/token/get');
      dispatch(slice.actions.getAllTokensSuccess(response.data.tokens));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getTokenById(id) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`/api/token/getbyid/${id}`);
      dispatch(slice.actions.getTokenByIdSuccess(response.data.token));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function createToken(formdata) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/api/token/create', formdata);
      dispatch(slice.actions.getAllTokensSuccess(response.data.tokens));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function rateUser(account, id, rateValue, art, rarity, hype) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/api/user/rate', {
        account,
        id,
        rateValue,
        art,
        rarity,
        hype
      });
      dispatch(slice.actions.getUsersSuccess(response.data.users));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
