import React from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext'
import api from '../api/api'

function PostPage() {
    const { id } = useParams()
    const { posts, setPosts } = useContext(DataContext)
    const history = useNavigate()

    const post = posts.find(p => p.id.toString() === id)
    const handleDelete = async (id) => {
        await api.delete(`/posts/${id}`);
        const newPost = posts.filter(p => p.id.toString() !== id.toString())
        setPosts([...newPost])
        history('/')
    }

    return (
        <div className='onePost'>
            {post?.title ? <>
                <h2 className='postTitle'>{post?.title}</h2>
                <p className='postDate'>{post?.dateTime}</p>
                <p className='postBody'>{post?.body}</p>
                <Link to={`/edit/${id}`}>
                    <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
            </> : "Post not found"}
        </div>
    )
}

export default PostPage