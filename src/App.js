import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostDetail from './pages/PostDetail';
import Posts from './pages/Posts';

const App = () => (
  <Router>
    <Switch>
      <Route path="/posts/:id">
        <PostDetail />
      </Route>
      <Route path="/">
        <Posts />
      </Route>
    </Switch>
  </Router>
);

export default App;
