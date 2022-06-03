import React, { useRef, useState } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import useStyles from './styles'
import { commentPost } from '../../../actions/posts'

const Comment = ({ post }) => {
    console.log(post)
    const classes = useStyles()
    const [comments, setComments] = useState(post?.comments)
    const [comment, setComment] = useState('')
    const user = JSON.parse(localStorage.getItem('profile'))
    const dispatch = useDispatch()
    const commentsRef = useRef()

    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`

        const newComments = await dispatch(commentPost(finalComment, post._id))
        setComment(newComments)
        setComment('')

        commentsRef.current.scrollIntoView({ behavior: 'smooth' })

    }
    return (
        <div>
            <div className={classes.commentsWrapper}>
                <div className={classes.commentsContainer}>
                    <Typography gutterBottom variant='h6'>Comments</Typography>
                    {comments.map((c, i) => (
                        <Typography key={i} gutterBottom variant="subtitle1">
                            <strong>{c.split(': ')[0]}</strong>
                            {c.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                    <div style={{ width: '50%' }}>
                        <Typography gutterBottom variant='h6'>Votre commentaire</Typography>
                        <TextField
                            fullWidth
                            rows={3}
                            variant='outlined'
                            label='Commentaire'
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Button className={classes.btnComment} style={{ marginTop: '10px' }} fullWidth disabled={!comment} variant='contained' onClick={handleClick}>
                            Commenter
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Comment