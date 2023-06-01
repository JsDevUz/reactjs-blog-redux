import React from 'react'
import { Link, useParams } from 'react-router-dom'

function PostPage({ posts, handleDelete }) {
    const { id } = useParams()
    const post = posts.find(p => p.id.toString() === id)
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