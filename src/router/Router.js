import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/HomePage'
import Missing from '../pages/MissingPage'
import NewPost from '../pages/NewPostPage'
import PostPage from '../pages/PostPage'
import About from '../pages/AboutPage'
import EditPost from '../pages/editPost'
function Routers({ handleDelete, handleEdit, editBody, editTitle, setEditBody, setEditTitle, posts, addPost, postTitle, postBody, setPostTitle, setPostBody }) {
    return (
        <Routes>
            <Route exact path='/' element={<Home posts={posts} />} />
            <Route exact path='/post' element={<NewPost postTitle={postTitle} postBody={postBody} setPostTitle={setPostTitle} addPost={addPost} setPostBody={setPostBody} />} />
            <Route exact path='/edit/:id' element={<EditPost posts={posts} editTitle={editTitle} editBody={editBody} setEditTitle={setEditTitle} handleEdit={handleEdit} setEditBody={setEditBody} />} />
            <Route exact path='/post/:id' element={<PostPage handleDelete={handleDelete} posts={posts} />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='*' element={<Missing />} />
        </Routes>

    )
}

export default Routers