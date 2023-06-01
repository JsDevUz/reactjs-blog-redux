import React from 'react'

function NewPost({ postTitle, addPost, postBody, setPostTitle, setPostBody }) {
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