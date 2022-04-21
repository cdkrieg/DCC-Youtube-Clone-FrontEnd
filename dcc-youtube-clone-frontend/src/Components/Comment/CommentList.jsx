import React from "react";
import ReplyList from "../Reply/ReplyList";
import LikeDislikeIcon from "../LikeDislikeIcon";
import ReplyForm from "../Reply/ReplyForm";

const CommentList = (props) => {
  return (
    <div>
      <ul>
        {props.comments.length &&
          props.comments.map((comment) => {
            return (
              <div key={comment.id}>
                <li>
                  {comment.body}
                  <div className='text-muted'>{comment.dateAdded}</div>
                  <span>
                    {" "}<LikeDislikeIcon obj={comment} forceUpdate={props.forceUpdate}/>
                    <ReplyForm id={comment.id} />{" "}
                    
                  </span>
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
