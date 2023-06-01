import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function EditPost({ posts, editTitle, handleEdit, editBody, setEditTitle, setEditBody }) {
    const { id } = useParams()

    useEffect(() => {
        setEditTitle(posts.filter(p => p.id == id)[0]?.title)
        setEditBody(posts.filter(p => p.id == id)[0]?.body)
    }, [posts, id])

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