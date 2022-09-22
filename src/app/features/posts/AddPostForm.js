import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postAdded } from './postsSlice';

import "./addPostForm.css"

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);

  const dispatch = useDispatch()

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid,
          title,
          content,
        })
      )
    }
  }

  return (
    <section className='form'>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input 
          type="text"
          id='postTitle'
          name='postTitle'
          value={title}
          placeholder="enter post title..."
          onChange={onTitleChanged}
        />
        <label htmlFor='postContent'>Content:</label>
        <textarea 
          id='postContent'
          name='postContent'
          value={content}
          placeholder="enter post contemt..."
          onChange={onContentChanged}
        />
        <button 
          type='button'
          onClick={onSavePostClicked}
        >Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm
