import React from "react";
import "./ReplyList.css";

const ReplyList = (props) => {
  return (
    <div>
      <ul>
        {props.replies.map((reply, index) => {
          if (props.commentId === reply.commentId) {
            return (
              <div key={`${reply.commentId}.${index}`}>
                <li className='replyList'>
                  {reply.body}
                  <div
                    className='text-muted'
                    style={{ fontSize: "10px", fontStyle: "italic" }}>
                    {reply.dateAdded}
                  </div>
                </li>
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </ul>
    </div>
  );
};

export default ReplyList;
