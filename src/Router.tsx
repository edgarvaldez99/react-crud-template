import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostList from './posts/screens/PostList';
import PostForm from './posts/screens/PostForm';
import Layout from './shared/Layout';
import TodoList from './todos/screens/TodoList';
import Sandbox from './TypeSripct/Sandbox';
import PostTodo from './todos/screens/PostTodo';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostList />} />
          <Route path="posts">
            <Route index element={<PostList />} />
            <Route path="new" element={<PostForm />} />
            <Route path=":id" element={<PostForm />} />
          </Route>
          <Route path="todos">
            <Route index element={<TodoList />} />
            <Route path="new" element={<Sandbox />} />
            <Route path=":id" element={<PostTodo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
