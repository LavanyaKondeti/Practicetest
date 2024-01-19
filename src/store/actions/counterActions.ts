// src/store/actions/dataActions.ts
import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/index';

// ... (existing code)

// Action Types for Posting Data
export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Action Creators for Posting Data
const postDataRequest = () => ({ type: POST_DATA_REQUEST } as const);
const postDataSuccess = () => ({ type: POST_DATA_SUCCESS } as const);
const postDataFailure = (error: string) => ({ type: POST_DATA_FAILURE, payload: error } as const);

// // Action Creators for fetching the data
const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST } as const);
const fetchDataSuccess = (data: any) => ({ type: FETCH_DATA_SUCCESS, payload: data } as const);
const fetchDataFailure = (error: string) => ({ type: FETCH_DATA_FAILURE, payload: error } as const);

// Async Action Creator for Posting Data
export const postData = (postData: any): ThunkAction<void, RootState, unknown, any> => {
  return async (dispatch: Dispatch) => {
    dispatch(postDataRequest());

    try {
      // Replace the URL with your API endpoint for posting data
      console.log("postData",postData)

      await axios.post('https://reqres.in/api/users', postData);

      dispatch(postDataSuccess());
    } catch (error) {
      dispatch(postDataFailure('Failed to post data'));
    }
  };
};

// Async Action Creator for fetching the data
export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());

    try {
      const response = await axios.get('https://reqres.in/api/users');
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure('Failed to fetch data'));
    }
  };
};

