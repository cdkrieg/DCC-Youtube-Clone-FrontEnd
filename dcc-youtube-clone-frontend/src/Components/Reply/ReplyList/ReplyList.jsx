import React, { ErrorBoundary, Error } from "react";
import "./ReplyList.css";
import LikeDislikeIcon from "../../LikeDislikeIcon";

const ReplyList = (props) => {
  return (
    <div>
      {/* <ErrorBoundary fallback={<Error>Could not load Replies</Error>}> */}
      <ul>
        {props.replies.map((reply, index) => {
          if (props.commentId === reply.commentId) {
            return (
              <div key={reply._id}>
                <li className='replyList'>
                  {reply.body}
                  <div
                    className='text-muted'
                    style={{ fontSize: "10px", fontStyle: "italic" }}>
                    {reply.dateAdded}
                  </div>
                  {/* {" "}<LikeDislikeIcon obj={reply} forceUpdate={props.forceUpdate}/> */}
                </li>
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </ul>
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default ReplyList;
