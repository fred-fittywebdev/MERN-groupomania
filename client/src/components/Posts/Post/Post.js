import React, { useState } from 'react';
import { CardActions, Button, Typography, Modal, Box, Divider, Paper } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import Comment from './Comment';
import moment from 'moment';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';



const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);

  const userId = user?.result?._id
  const hasLikedPost = likes.find((like) => like === userId);

  const handleLike = () => {
    dispatch(likePost(post._id))

    if (hasLikedPost) {
      setLikes(likes.filter((id) => id != userId))
    } else {
      setLikes([...likes, userId])
    }
  }


  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `Vous et ${likes.length - 1} autres` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  return (
    <>
      <Paper style={{ margin: '15px auto', padding: '20px', borderRadius: '15px' }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography gutterBottom variant="h3" component="h2">{post.title}</Typography>
            <Typography gutterBottom variant="h5" >{post.message}</Typography>
            <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => (
              <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#fd2d01' }}>
                {` #${tag} `}
              </Link>
            ))}
            </Typography>
            <Typography variant="h6">
              Created by:
              {` ${post.name}`}
            </Typography>
            <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
            <Divider style={{ margin: '20px 0' }} />
            <Comment post={post} />
            <Divider style={{ margin: '20px 0' }} />
            <CardActions className={classes.cardActions}>
              <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                <Likes />
              </Button>
              {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator || user?.result?.role === 'admin') && (
                <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                  <DeleteIcon fontSize="small" /> Supprimer
                </Button>
              )}
              {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator || user?.result?.role === 'admin') && (

                <Button onClick={() => setCurrentId(post._id)} style={{ color: '#4e5166' }} size="small">
                  <MoreHorizIcon fontSize="default" /> Modifier
                </Button>
              )}
            </CardActions>
          </div>
          <div className={classes.imageSection}>
            <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <div className={classes.overlay}>
            </div>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator || user?.result?.role === 'admin') && (
              <div className={classes.overlay2}>
                <Button onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
                  <MoreHorizIcon fontSize="default" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </Paper>
    </>
  );
};

export default Post;
