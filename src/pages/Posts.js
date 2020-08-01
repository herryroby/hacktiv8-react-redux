import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { fetchPosts } from '../redux/post/post.actions';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { data, loading, error } = useSelector((state) => ({
    error: state.posts.error,
    data: state.posts.posts,
    loading: state.posts.loading,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <Layout>
      <div>
        <h1>Posts</h1>
        {loading && <div>Loading...</div>}
        {error && <span className="text-danger">ERROR: {error}</span>}
        {posts.length > 0 &&
          posts.map((post) => (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <p>{post.title}</p>
            </Link>
          ))}
      </div>
    </Layout>
  );
};

export default Posts;
