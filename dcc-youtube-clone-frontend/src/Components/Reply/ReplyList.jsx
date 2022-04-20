import React from "react";
import {
  ThumbUpAlt,
  ThumbUpOffAlt,
  ThumbDownAlt,
  ThumbDownOffAlt,
} from "@mui/icons-material";

const ReplyList = ({replies, likeDislikeIcon}) => {

  
//   console.log("replies length is: "+replies.length)
  if (replies !== undefined && replies.length > 0) {

    return (
      <div>
        <ul>
          {replies.map((reply) => {
            return (
              <div key={reply.id}>
                  {console.log("reply.id is: "+reply.id)}
                <li>
                  {reply.reply}
                  <br />
                  {likeDislikeIcon(reply)}
                </li>
                <ReplyList />
              </div>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <>{console.log("no replies")}</>;
  }
};

export default ReplyList;
