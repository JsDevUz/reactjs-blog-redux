import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns';
import { useStoreActions, useStoreState } from 'easy-peasy';

function NewPost() {
    const posts = useStoreState(state => state.posts)
    const postTitle = useStoreState(state => state.postTitle)
    const postBody = useStoreState(state => state.postBody)

    const savePost = useStoreActions(action => action.savePost)
    const setPostTitle = useStoreActions(action => action.setPostTitle)
    const setPostBody = useStoreActions(action => action.setPostBody)
    const history = useNavigate()

    const addPost = async (e) => {
        if (postTitle.length <= 0 || postBody.length <= 0) return;

        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const newPost = {
            id: id,
            title: postTitle,
            body: postBody,
            dateTime: format(new Date(), 'MMMM dd, yyyy pp')
        }
        savePost(newPost)
        history('/')
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