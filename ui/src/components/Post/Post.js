import React, { useState } from 'react'
import './Post.css'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Like from '../Like/Like'
import { useLike } from '../../hooks/useLike'
import ProfilePic from '../ProfilePic/ProfilePic'
import PostGallery from '../PostGallery/PostGallery'
import { useDeletePost } from '../../hooks/useDeletePost'
import deleteIcon from '../../assets/delete.svg'
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined'
import { motion } from 'framer-motion'
import CommentList from '../CommentList/CommentList'
import CreateComment from '../CreateComment/CreateComment'
import { useComment } from '../../hooks/useComment'
import { Grid, IconButton, Paper, Box } from '@material-ui/core'

const Author = ({ author }) => (
  <Link to={`/u/${author._id}`}>{author.name}</Link>
)

const Post = ({
  _id,
  content,
  Author: author,
  date,
  likes: initialLikes,
  isLiked: initialIsLiked,
  commentCount,
  Comments,
  gallery,
  refetchPosts = () => {},
}) => {
  const { likes, isLiked, toggle } = useLike(initialIsLiked, initialLikes, _id)
  const { comment } = useComment(_id)
  const { allowDelete, remove } = useDeletePost(refetchPosts, _id, author._id)
  const [showLatestComments, toggleLatestComments] = useState(false)
  return (
    <Box component={Paper} className='post flex column a-stretch' p={2}>
      <header className='flex a-stretch j-btwn'>
        <div className='flex a-stretch'>
          <div className='profile'>
            <ProfilePic url={author.avatarUrl} />
          </div>
          <div>
            <Author author={author} />
            <div className='date'>
              {moment(new Date(date.formatted)).fromNow()}
            </div>
          </div>
        </div>
        <div className='options'>
          {allowDelete && (
            <button onClick={remove}>
              <img src={deleteIcon} alt='' />
            </button>
          )}
        </div>
      </header>
      <main>
        <p>{content}</p>
        {gallery.length > 0 && <PostGallery gallery={gallery} />}
      </main>
      <footer className='flex a-center'>
        <div className='flex'>
          <Grid container alignItems='center' spacing={1}>
            <Grid item>
              <Like isLiked={isLiked} toggle={toggle} />
            </Grid>
            <Grid item>{likes}</Grid>
          </Grid>
        </div>
        <div className='comments flex'>
          <Grid container alignItems='center' spacing={1}>
            <Grid item>
              <IconButton onClick={() => toggleLatestComments(b => !b)}>
                <CommentOutlinedIcon style={{ color: '#648DAE' }} />
              </IconButton>
            </Grid>
            <Grid item>{commentCount}</Grid>
          </Grid>
        </div>
      </footer>
      <motion.div
        className='latest-comments'
        data-show={showLatestComments}
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      >
        <CommentList comments={Comments} postAuthorId={author._id} />
        <CreateComment comment={comment} />
      </motion.div>
    </Box>
  )
}

export default Post
