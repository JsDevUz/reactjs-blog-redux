import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/HomePage'
import Missing from '../pages/MissingPage'
import NewPost from '../pages/NewPostPage'
import PostPage from '../pages/PostPage'
import About from '../pages/AboutPage'
import EditPost from '../pages/editPost'
function Routers({ fetchError, isLoading }) {
    return (
        <Routes>
            <Route exact path='/' element={<Home fetchError={fetchError} isLoading={isLoading} />} />
            <Route exact path='/post' element={<NewPost />} />
            <Route exact path='/edit/:id' element={<EditPost />} />
            <Route exact path='/post/:id' element={<PostPage />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='*' element={<Missing />} />
        </Routes>

    )
}

export default Routers