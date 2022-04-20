import React, { useState } from "react";
import { TextareaAutosize } from "@mui/material";

const CommentForm = () => {
  const [commentInput, setCommentInput] = useState();

  function submit(event) {
    event.preventDefault();
  }

  return (
    <div
      className='form-group'
      id='commentForm'
      onSubmit={(event) => {
        submit(event);
      }}>
      <TextareaAutosize
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
      <button type='submit'>Submit</button>
    </div>
  );
};

export default CommentForm;
