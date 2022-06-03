import React, { useState, useEffect, useRef } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@material-ui/core';
import EmojiEmotionsOutlined from '@material-ui/icons/EmojiEmotionsOutlined'
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

// Emoji
import Picker from 'emoji-picker-react'
//image
import colorFull from '../../images/colorful.png'

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';




const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [picker, setPicker] = useState(false)
  const textRef = useRef(null)



  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  const handleEmoji = (e, { emoji }) => {
    const ref = textRef.current
    ref.focus()
  }

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paperForm}>
        <Typography variant="h6" align="center">
          Veuillez vous connecter pour créer un post ou intéragir avec vos collègues.
        </Typography>
      </Paper>
    );
  }

  return (

    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Modifier "${post.title}"` : 'Creer'}</Typography>
        <TextField name="title" variant="outlined" label="Titre" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField ref={textRef} name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <div className={classes.emojiWrapper}>
          {picker && (
            <div className={classes.emoji}><Picker onEmojiClick={handleEmoji} /></div>
          )}
          <img className={classes.emojiImage} src={colorFull} alt="" />
          <EmojiEmotionsOutlined onClick={() => { setPicker((prev) => !prev) }} className={classes.emojiIcon} />
        </div>
        <TextField name="tags" variant="outlined" label="Tags (séparés par des virgules)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Poster</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Effacer</Button>
      </form>
    </Paper>
  );
};

export default Form;
