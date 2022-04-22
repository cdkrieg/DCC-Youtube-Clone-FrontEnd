import React, { useState } from "react";
import { TextareaAutosize } from "@mui/material";
import Axios from "../../Routes/RoutesAxios";
import "./ReplyForm.css";

const ReplyForm = (props) => {
  const [replyInput, setReplyInput] = useState();
  const [hidden, setHidden] = useState(true);

  function submit(event) {
    event.preventDefault();

    try {
      Axios.addReplies({
        commentId: props.commentId,
        body: replyInput,
      });
    } catch (error) {
      console.log("Error adding reply: " + error);
    }
    setReplyInput("");
    setTimeout(() => {
      props.forceUpdate();
    }, 1000);
    setHidden(true);
  }

  return (
    <div
      className='form-group'
      id='replyForm'
      onSubmit={(event) => {
        submit(event);
      }}>
      <button
        className='replyButton'
        hidden={!hidden}
        type='button'
        value={hidden}
        onClick={() => {
          setHidden(!hidden);
        }}>
        Reply
      </button>
      <TextareaAutosize
        autoFocus
        hidden={hidden}
        className='textArea'
        maxRows={3}
        placeholder='Enter your REPLY'
        value={replyInput}
        onChange={(event) => {
          setReplyInput(event.target.value);
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") submit(event, props.id);
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
          setReplyInput("");
        }}>
        Cancel
      </button>
    </div>
  );
};

export default ReplyForm;
