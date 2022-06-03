import React from 'react';
import { Grid, CircularProgress, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';
import Form from '../Form/Form';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Container maxWidth='xl' className={classes.container} >
        {posts.map((post) => (

          <Post post={post} setCurrentId={setCurrentId} />

        ))}

      </Container>
    )
  );
};

export default Posts;
