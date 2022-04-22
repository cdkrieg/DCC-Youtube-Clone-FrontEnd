import React, { useState, Error, ErrorBoundary } from "react";
import { TextareaAutosize } from "@mui/material";
import Axios from "../Routes/RoutesAxios";

const CommentForm = ({ comments, selectedVideo, forceUpdate }) => {
  const [commentInput, setCommentInput] = useState();
  const [hidden, setHidden] = useState(true);

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
    }, 1000);
    setHidden(true);
  }

  return (
    <ErrorBoundary fallback={<Error>Could not load form to add comment</Error>}>
      <div
        className='form-group'
        id='commentForm'
        onSubmit={(event) => {
          submit(event);
        }}>
        <button
          style={{ marginLeft: "32px", backgroundColor: "lightblue" }}
          type='button'
          hidden={!hidden}
          onClick={() => setHidden(!hidden)}>
          Add comment
        </button>
        <TextareaAutosize
          hidden={hidden}
          className='textArea'
          maxRows={3}
          placeholder='Enter your Comment'
          style={{ width: 300 }}
          value={commentInput}
          autoFocus
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
    </ErrorBoundary>
  );
};

export default CommentForm;
