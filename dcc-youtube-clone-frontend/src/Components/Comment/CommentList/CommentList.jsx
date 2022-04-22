import React, {ErrorBoundary, Error} from "react"
import Reply from "../../Reply/Reply";
import LikeDislikeIcon from "../../LikeDislikeIcon";
import './CommentList.css'


const CommentList = (props) => {
  function formatDate(date) {
    let temp = new Date(date);
    temp = temp.toLocaleDateString();
    return temp;
  }

  return (
    <div>
      {/* <ErrorBoundary fallback={<Error>Could not load comments</Error>}> */}
      <ul>
  
        {props.comments.length &&
          props.comments.map((comment) => {
            return (
              <div key={comment._id}>
                <li style={{ fontSize: "14px" }}>
                  {comment.body}
                  <div
                    className='text-muted'
                   >
                    {formatDate(comment.dateAdded)}
                  </div>{" "}
                  <LikeDislikeIcon
                    obj={comment}
                    forceUpdate={props.forceUpdate}
                  />
                  <Reply commentId={comment._id}/>
                </li>
              </div>
            );
          })}
      </ul>
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default CommentList;
