import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles'

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { mergeClasses } from '@material-ui/styles';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles()
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container className={classes.container} maxWidth='xl'>

        <Form className={classes.formContainer} currentId={currentId} setCurrentId={setCurrentId} />
        <Posts setCurrentId={setCurrentId} />
      </Container>
    </Grow>
  );
};

export default Home;
