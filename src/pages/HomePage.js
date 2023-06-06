
import React from 'react'
import Feed from '../components/Feed'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

function Home() {
  const { isLoading, fetchError, searchResult } = useContext(DataContext)
  return (
    <>
      {!isLoading && fetchError && <span className='error-message'>{fetchError}</span>}
      {isLoading && <span className='loading'>Load posts...</span>}
      {!isLoading && !fetchError && <Feed posts={searchResult} />}
    </>
  )
}

export default Home
