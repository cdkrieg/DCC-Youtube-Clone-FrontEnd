import React, { useState } from "react";
import { TextareaAutosize } from "@mui/material";
import Axios from "../Routes/RoutesAxios";

const CommentForm = ({comments, selectedVideo, forceUpdate}) => {
  const [commentInput, setCommentInput] = useState();
  const [hidden, setHidden] = useState(true)
  

  function submit(event) {
    event.preventDefault();

    try {
      Axios.addComments({
        videoId:selectedVideo.id.videoId,
        body: commentInput,
        like: false,
        dislike: false,
      })
    } catch (error) {
      console.log("Error adding comment: "+error)
    }
    setCommentInput("")
    setTimeout(()=> {
      forceUpdate()
    }, 1000)
    
  }

  return (
    <div
      className='form-group'
      id='commentForm'
      onSubmit={(event) => {
        submit(event);
      }}>
        <button type="button" hidden={!hidden} onClick={()=>setHidden(!hidden)}>Add comment</button>
      <TextareaAutosize
      hidden={hidden}
        className='textArea'
        maxRows={3}
        placeholder='Enter your Comment'
        style={{ width: 300 }}
        value={commentInput}
        onChange={(event) => {
          setCommentInput(event.target.value);
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") submit(event);
        }}
      />
      <button hidden={hidden} type='submit'>Submit</button>
      <button hidden={hidden} type='button'onClick={()=>{setHidden(!hidden); setCommentInput("")}} >Cancel</button>
    </div>
  );
};

export default CommentForm;
