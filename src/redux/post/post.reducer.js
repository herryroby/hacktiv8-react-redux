import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from './post.types.js';

const initialState = {
  loading: false,
  error: null,
  posts: [],
  post: {},
};

const postReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    }
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    }
    case FETCH_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default postReducer;
