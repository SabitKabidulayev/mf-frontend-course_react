import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost, updatePost } from './postsSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [editPostId, setEditPostId] = useState(null);
  const [editPostTitle, setEditPostTitle] = useState('');

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
    const updatedPost = { id, title: editPostTitle };
    dispatch(updatePost(updatedPost));
    setEditPostId(null);
    setEditPostTitle('');
  };

  const startEditingPost = (post) => {
    setEditPostId(post.id);
    setEditPostTitle(post.title);
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
            {editPostId === post.id ? (
              <div>
                <input
                  type="text"
                  value={editPostTitle}
                  onChange={(e) => setEditPostTitle(e.target.value)}
                />
                <button onClick={() => handleUpdatePost(post.id)}>Save</button>
                <button onClick={() => setEditPostId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                {post.title}
                <button onClick={() => startEditingPost(post)}>Update</button>
                <button onClick={() => handleDeletePost(post.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;