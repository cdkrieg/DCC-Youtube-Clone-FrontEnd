import React, { useState, useRef, useEffect } from "react";
import { TextareaAutosize } from "@mui/material";
import Axios from "../../Routes/RoutesAxios";
import "./CommentForm.css";

const CommentForm = ({ comments, selectedVideo, forceUpdate }) => {
  const [commentInput, setCommentInput] = useState();
  const [hidden, setHidden] = useState(true);
  const inputEl = useRef(null);

  useEffect(() => {
    if (hidden === false) inputEl.current.focus();
  }, [hidden]);

  function submit(event) {
    event.preventDefault();

    try {
      Axios.addComments({
        videoId: selectedVideo.id.videoId,
        body: commentInput,
        like: false,
        dislike: false,
      });
    } catch (error) {
      console.log("Error adding comment: " + error);
    }
    setCommentInput("");
    setTimeout(() => {
      forceUpdate();
    }, 500);
    setHidden(true);
  }

  return (
    <div
      className='form-group'
      id='commentForm'
      onSubmit={(event) => {
        submit(event);
      }}>
      <button
        type='button'
        className='addCommentButton'
        hidden={!hidden}
        onClick={() => setHidden(!hidden)}>
        Add comment
      </button>
      <TextareaAutosize
        hidden={hidden}
        className='textArea'
        maxRows={3}
        placeholder='Enter your Comment'
        value={commentInput}
        ref={inputEl}
        onChange={(event) => {
          setCommentInput(event.target.value);
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") submit(event);
        }}
      />
      <button
        hidden={hidden}
        type='submit'
        onClick={(event) => {
          submit(event);
        }}>
        Submit
      </button>
      <button
        hidden={hidden}
        type='button'
        onClick={() => {
          setHidden(!hidden);
          setCommentInput("");
        }}>
        Cancel
      </button>
    </div>
  );
};

export default CommentForm;
