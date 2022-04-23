import React from "react";
import Reply from "../../Reply/Reply";
import LikeDislikeIcon from "../../LikeDislikeIcon/LikeDislikeIcon";
import "./CommentList.css";

const CommentList = (props) => {
  function formatDate(date) {
    let temp = new Date(date);
    temp = temp.toLocaleDateString();
    return temp;
  }

  return (
    <div>
      <ul>
        {props.comments.length > 0 &&
          props.comments.map((comment) => {
            return (
              <div key={comment._id}>
                <li>
                  {comment.body}
                  <div className='text-muted'>
                    {formatDate(comment.dateAdded)}
                  </div>{" "}
                  <LikeDislikeIcon
                    id='icon'
                    obj={comment}
                    forceUpdate={props.forceUpdate}
                  />
                  <Reply commentId={comment._id} />
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default CommentList;
