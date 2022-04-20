import React from "react";
import {
  ThumbUpAlt,
  ThumbUpOffAlt,
  ThumbDownAlt,
  ThumbDownOffAlt,
} from "@mui/icons-material";
import ReplyList from "../Reply/ReplyList";

const CommentList = (props) => {

  function likeDislikeIcon(obj) {
    if (obj.like === true)
      return (
        <div>
          <ThumbUpAlt />
          <ThumbDownOffAlt />
        </div>
      );
    else if (obj.dislike === true)
      return (
        <div>
          <ThumbUpOffAlt />
          <ThumbDownAlt />
        </div>
      );
    else
      return (
        <div>
          <ThumbUpOffAlt />
          <ThumbDownOffAlt />
        </div>
      );
  }

  return (
    <div>
      <ul>
        {props.comments.map((commentItem) => {
          return (
            <div key={commentItem.id}>
                {console.log("comment.id is: "+ commentItem.id)}
              <li>
                {commentItem.comment}
                <br />
                {likeDislikeIcon(commentItem)}
              </li>
              {/* {console.log(commentItem.replies)} */}
              <ReplyList replies={commentItem.replies} likeDislikeIcon={likeDislikeIcon}/>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentList;
