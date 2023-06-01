import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Routers from './router/Router'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import api from './api/api'
function App() {
    const history = useNavigate()
    const [search, setSearch] = useState('')
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const respose = await api.get('/posts');
                setPosts(respose.data)
            } catch (e) {
                console.log(e);
            }
        }
        fetchPost()
    }, [])
    useEffect(() => {
        if (search.length > 0) {
            const searchResults = posts.filter(p => p.body.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                || posts.filter(p => p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            setSearchResult(searchResults)
        } else {
            setSearchResult(posts)
        }
    }, [search, posts])
    const handleEdit = async (id) => {
        try {
            if (editTitle.length <= 0 || editBody.length <= 0) return;

            const editPost = {
                id: id,
                title: editTitle,
                body: editBody,
                dateTime: format(new Date(), 'MMMM dd, yyyy pp')
            }
            const response = await api.put(`/posts/${id}`, editPost)
            setPosts(p => p.map(po => po.id == id ? { ...response.data } : po))
            setEditBody('')
            setEditTitle('')
            history('/')
        } catch (e) {
            console.log(e);
        }
    }
    const handleDelete = async (id) => {
        await api.delete(`/posts/${id}`);
        const newPost = posts.filter(p => p.id.toString() !== id.toString())
        setPosts([...newPost])
        history('/')
    }

    const addPost = async (e) => {

        try {
            if (postTitle.length <= 0 || postBody.length <= 0) return;

            const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
            const newPost = {
                id: id,
                title: postTitle,
                body: postBody,
                dateTime: format(new Date(), 'MMMM dd, yyyy pp')
            }
            const response = await api.post('/posts', newPost)
            setPosts(p => [...p, response.data])
            setPostBody('')
            setPostTitle('')
            history('/')
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className='app'>
            <div className='header-side'>
                <Header />
                <Nav search={search} setSearch={setSearch} />
                <div className='body'>
                    <Routers editTitle={editTitle} editBody={editBody} setEditTitle={setEditTitle} addPost={addPost} setEditBody={setEditBody} handleDelete={handleDelete} handleEdit={handleEdit} postBody={postBody} setPostBody={setPostBody} postTitle={postTitle} setPostTitle={setPostTitle} posts={searchResult} />
                </div>
            </div>
            <Footer />

        </div>

    )
}

export default App