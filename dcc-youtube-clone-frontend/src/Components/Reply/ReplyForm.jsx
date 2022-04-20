import React, { useState } from "react";
import { TextareaAutosize } from "@mui/material";

const ReplyForm = () => {
  const [replyInput, setReplyInput] = useState();

  function submit(event) {
    event.preventDefault();
  }

  return (
    <div
      className='form-group'
      id='replyForm'
      onSubmit={(event) => {
        submit(event);
      }}>
      <TextareaAutosize
        className='textArea'
        maxRows={3}
        placeholder='Enter your REPLY'
        style={{ width: 200 }}
        value={replyInput}
        onChange={(event) => {
          setReplyInput(event.target.value);
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") submit(event);
        }}
      />
      <button type='submit'>Submit</button>
    </div>
  );
};

export default ReplyForm;
