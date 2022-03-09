import React from 'react'
import Post from '../Post/Post'

function Feed() {
  return (
    <div className='w-2/3 md:w-1/2 flex flex-col justify-start'>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Feed