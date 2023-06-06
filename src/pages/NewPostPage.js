import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext';
import { format } from 'date-fns';
import api from '../api/api';

function NewPost() {
    const { posts, setPosts } = useContext(DataContext)

    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const history = useNavigate()

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
        <div className='newPost'>
            <h2>New Post</h2>
            <form onSubmit={(e) => e.preventDefault()} className='addPost'>
                <input value={postTitle} onChange={(e) => setPostTitle(e.target.value)} placeholder='Title' />
                <textarea value={postBody} onChange={(e) => setPostBody(e.target.value)} placeholder='Body' />
                <button onClick={() => addPost()}>Save</button>
            </form>
        </div>
    )
}

export default NewPost