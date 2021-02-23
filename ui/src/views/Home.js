import React from 'react'
import AuthOnly from '../components/AuthOnly/AuthOnly'
import CreatePost from '../components/CreatePost/CreatePost'
import PostList from '../components/PostList/PostList'
import useFeed from '../hooks/useFeed'
import useProfile from '../hooks/useProfile'
import Landing from './Landing'

const Home = () => {
  const { feed, refetch } = useFeed()

  const token = localStorage.getItem('token')

  return (
    <div className='home route'>
      <AuthOnly>
        <CreatePost refetchPosts={refetch} />
        <PostList posts={feed} refetchPosts={refetch} />
      </AuthOnly>
      {!token ? <Landing /> : null}
    </div>
  )
}

export default Home
