import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { fetchPost } from '../redux/post/post.actions';

const PostDetail = () => {
  const [post, setPost] = useState({});
  const { data, loading, error } = useSelector((state) => ({
    error: state.posts.error,
    data: state.posts.post,
    loading: state.posts.loading,
  }));
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [id, dispatch]);

  useEffect(() => {
    setPost(data);
  }, [data]);

  return (
    <Layout>
      <div>
        <h1> Post ID: {id}</h1>
        {error && <span className="text-danger">ERROR: {error}</span>}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PostDetail;
