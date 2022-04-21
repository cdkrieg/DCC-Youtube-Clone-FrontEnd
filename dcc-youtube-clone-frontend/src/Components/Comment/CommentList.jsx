import React from "react";

import ReplyList from "../Reply/ReplyList";
import LikeDislikeIcon from "../LikeDislikeIcon";
import ReplyForm from "../Reply/ReplyForm"

const CommentList = (props) => {


  return (
    <div>
      {console.log("comments: "+props.comments)}
      <ul>
        {props.comments.length && props.comments.map((comment) => {
          return (
            <div key={comment.id}>
              <li>
                {comment.body}
                <br />
                <LikeDislikeIcon obj={comment}/>
                <ReplyForm id={comment.id}/>
              </li>
              {/* {console.log(comment.replies)} */}
              <ReplyList commentId={comment.id} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentList;
