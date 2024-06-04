import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost, updatePost } from './postsSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const [newPostTitle, setNewPostTitle] = useState('');

  const handleAddPost = () => {
    if (newPostTitle.trim()) {
      const newPost = { id: Date.now(), title: newPostTitle };
      dispatch(addPost(newPost));
      setNewPostTitle('');
    }
  };

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  const handleUpdatePost = (id) => {
    const updatedPost = { id, title: 'Updated Post' };
    dispatch(updatePost(updatedPost));
  };

  return (
    <div>
      <h1>Posts</h1>
      <input
        type="text"
        value={newPostTitle}
        onChange={(e) => setNewPostTitle(e.target.value)}
        placeholder="Enter post title"
      />
      <button onClick={handleAddPost}>Add Post</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleUpdatePost(post.id)}>Update</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;