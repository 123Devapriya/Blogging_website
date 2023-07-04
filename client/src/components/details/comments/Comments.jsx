import { useState, useEffect, useContext } from 'react';
import { Box, TextareaAutosize, Button, styled } from '@mui/material';

import { DataContext } from '../../../context/DataProvider';

import { API } from '../../../service/api';

//components
import Comment from './Comment';

const Container = styled(Box)`
    margin-top: 100px;
    display: flex;
`;

const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%'
});

const StyledTextArea = styled(TextareaAutosize)`
    height: 100px !important;
    width: 100%; 
    margin: 0 20px;
`;

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}

const Comments = ({ post }) => {
    const url = 'https://static.thenounproject.com/png/12017-200.png'

    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);

    const { account } = useContext(DataContext);

    useEffect(() => {
        const getData = async () => {
            const response = await API.getAllComments(post._id);
            if (response.isSuccess) {
                setComments(response.data);
            }
        }
        getData();
    }, [toggle, post]);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: account.username,
            postId: post._id,
            comments: e.target.value
        });
    }

    const addComment = async () => {
  if (comment.comments.trim() === '') {
    console.log('Please enter a comment.'); // Display an error message
    return; // Stop further execution
  }

  await API.newComment(comment);
  setComment(initialValue);
  setToggle((prev) => !prev);
};

    return (
        <Box>
            <Container>
                <Image src={url} alt="dp" />   
                <StyledTextArea 
                style={{
        
            backgroundColor: '#E6FFFD',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 0 3px 2px #00B8D4',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            lineHeight: '1.5',
            minHeight: '150px',
            padding: '10px',
            resize: 'vertical',
            outline: 'none',
          
                }}
                    rowsMin={5} 
                    placeholder="what's on your mind to comment?"
                    onChange={(e) => handleChange(e)} 
                    value={comment.comments}
                />
                <Button 
                  style={{marginRight:"10px",height: 40}}
                    variant="contained" 
                    color="primary" 
                    size="medium" 
                   
                    onClick={(e) => addComment(e)}
                >Post</Button>             
            </Container>
            <p style={{marginLeft:"10px"}} >Comments</p>
            <Box>
                {
                    comments && comments.length > 0 && comments.map(comment => (
                        <Comment comment={comment} setToggle={setToggle} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Comments;