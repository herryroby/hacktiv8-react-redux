import axios from 'axios';
import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from './post.types.js';

const baseUrl = 'http://jsonplaceholder.typicode.com/posts';

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_POSTS_REQUEST });
    const res = await axios.get(baseUrl);
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: FETCH_POSTS_ERROR, error: err.response.data });
  }
};

export const fetchPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_POST_REQUEST });
    const url = `${baseUrl}/${id}`;
    const res = await axios.get(url);
    dispatch({
      type: FETCH_POST_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: FETCH_POST_ERROR, error: err.response.data });
  }
};
