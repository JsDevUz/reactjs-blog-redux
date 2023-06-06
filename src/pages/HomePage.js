
import React from 'react'
import Feed from '../components/Feed'
import { useStoreState } from 'easy-peasy'

function Home({ fetchError, isLoading }) {
  const searchResults = useStoreState(state => state.searchResults)
  return (
    <>
      {!isLoading && fetchError && <span className='error-message'>{fetchError}</span>}
      {isLoading && <span className='loading'>Load posts...</span>}
      {!isLoading && !fetchError && <Feed posts={searchResults} />}
    </>
  )
}

export default Home
