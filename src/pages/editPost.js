import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../context/DataContext'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import api from '../api/api'

function EditPost() {
    const { id } = useParams()
    const { posts, setPosts } = useContext(DataContext)
    const history = useNavigate()

    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')
    useEffect(() => {
        setEditTitle(posts.filter(p => p.id == id)[0]?.title)
        setEditBody(posts.filter(p => p.id == id)[0]?.body)
    }, [posts, id])
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
    console.log(editBody, posts, editTitle);
    return (
        <div className='editPost'>
            <h2>Edit Post</h2>
            <form onSubmit={(e) => e.preventDefault()} className='addPost'>
                <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} placeholder='Title' />
                <textarea value={editBody} onChange={(e) => setEditBody(e.target.value)} placeholder='Body' />
                <button onClick={() => handleEdit(id)}>Save</button>
            </form>
        </div>
    )
}

export default EditPost