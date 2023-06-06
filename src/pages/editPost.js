import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'

function EditPost() {
    const { id } = useParams()
    const history = useNavigate()
    const posts = useStoreState(state => state.posts)
    const editTitle = useStoreState(state => state.editTitle)
    const editBody = useStoreState(state => state.editBody)

    const editPost = useStoreActions(action => action.editPost)
    const setEditTitle = useStoreActions(action => action.setEditTitle)
    const setEditBody = useStoreActions(action => action.setEditBody)
    useEffect(() => {
        setEditTitle(posts.filter(p => p.id == id)[0]?.title)
        setEditBody(posts.filter(p => p.id == id)[0]?.body)
    }, [posts, id])
    const handleEdit = async (id) => {
        try {
            if (editTitle.length <= 0 || editBody.length <= 0) return;

            const editedPost = {
                id: id,
                title: editTitle,
                body: editBody,
                dateTime: format(new Date(), 'MMMM dd, yyyy pp')
            }
            editPost(editedPost)
            history('/')
        } catch (e) {
            console.log(e);
        }
    }
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