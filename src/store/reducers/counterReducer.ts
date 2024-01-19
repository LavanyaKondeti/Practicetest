// src/store/reducers/dataReducer.ts
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
} from '../actions/counterActions';

interface DataState {
  data: any[];
  loading: boolean;
  postReq: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
  postReq: false,
};

const dataReducer = (state = initialState, action: any): DataState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST: return { ...state, loading: true, postReq: false, error: null };
    case POST_DATA_REQUEST:
      return { ...state, loading: true, postReq: false, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload, loading: false, postReq: false, error: null };
    case POST_DATA_SUCCESS:
      return { ...state, loading: false, postReq: true, error: null };
    case FETCH_DATA_FAILURE:
    case POST_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
