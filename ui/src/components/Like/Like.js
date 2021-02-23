import React from 'react'
import './Like.css'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'

const Like = ({ isLiked, toggle }) => (
  <IconButton onClick={toggle}>
    {isLiked ? (
      <FavoriteIcon style={{ color: 'red' }} />
    ) : (
      <FavoriteBorderOutlinedIcon style={{ color: 'red' }} />
    )}
  </IconButton>
)

export default Like
