import React, { useState } from "react";
import { TextareaAutosize } from "@mui/material";

const ReplyForm = (props) => {
  const [replyInput, setReplyInput] = useState();
  const [buttonValue, setButtonValue] = useState(true);

  function submit(event,id) {
    event.preventDefault();
    
  }

  return (
    <div
      className='form-group'
      id='replyForm'
      onSubmit={(event) => {
        submit(event);
      }}>
        <button hidden={!buttonValue} type="button" value={buttonValue} onClick={()=>{setButtonValue(!buttonValue)}}>Reply</button>
      <TextareaAutosize
      hidden={buttonValue}
        className='textArea'
        maxRows={3}
        placeholder='Enter your REPLY'
        style={{ width: 200 }}
        value={replyInput}
        onChange={(event) => {
          setReplyInput(event.target.value);
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") submit(event, props.id);
        }}
      />
      <button hidden={buttonValue} type='submit'>Submit</button>
    </div>
  );
};

export default ReplyForm;
