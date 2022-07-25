import React from 'react';
import CreateButton from '../../mui/CreateButton';
import PostTable from '../components/PostTable';

export default function PostList() {
  return (
    <>
      <CreateButton to="new" />
      <PostTable />;
    </>
  );
}
