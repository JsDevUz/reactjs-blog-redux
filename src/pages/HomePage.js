
import React from 'react'
import Feed from '../components/Feed'

function Home({ isLoading, fetchError, posts }) {
  return (
    <>
      {!isLoading && fetchError && <span className='error-message'>{fetchError}</span>}
      {isLoading && <span className='loading'>Load posts...</span>}
      {!isLoading && !fetchError && <Feed posts={posts} />}
    </>
  )
}

export default Home
