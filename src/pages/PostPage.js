import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'

function PostPage() {
    const { id } = useParams()
    const history = useNavigate()
    const deletePost = useStoreActions(action => action.deletePost)
    const getPostById = useStoreState(state => state.getPostById)
    const post = getPostById(id)
    const handleDelete = async (id) => {
        deletePost(id)
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