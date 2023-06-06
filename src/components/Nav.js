import React from 'react'
import { Link } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useEffect } from 'react'

function Nav() {
    const posts = useStoreState(state => state.posts)
    const search = useStoreState(state => state.search)
    const setSearch = useStoreActions(action => action.setSearch)
    const setSearchResult = useStoreActions(action => action.setSearchResults)
    useEffect(() => {
        if (search.length > 0) {
            console.log(posts);
            const searchResults = posts.filter(p => p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                || posts.filter(p => p.body.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            setSearchResult(searchResults)
        } else {
            setSearchResult(posts)
        }
    }, [search, posts, setSearchResult])
    return (
        <div className='nav'>
            <form onSubmit={(e) => e.preventDefault()}>
                <input placeholder='search...' value={search} onChange={(e) => setSearch(e.target.value)} />
            </form>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/post'}><li>NewPost</li></Link>
                <Link to={'/about'}><li>About</li></Link>
            </ul>
        </div>
    )
}

export default Nav