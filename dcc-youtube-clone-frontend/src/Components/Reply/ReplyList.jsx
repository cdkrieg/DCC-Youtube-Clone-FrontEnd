import React from "react";

import LikeDislikeIcon from "../LikeDislikeIcon";
import { replies } from "../../dummyComments";

const ReplyList = ({commentId}) => {

  
//   console.log("replies length is: "+replies.length)

    return (
      <div>
        <ul>
          {replies.map((reply) => {
            if(reply.commentId === commentId)
            return (
              <div key={reply.id}>
                <li>
                  {reply.body}
                  <br />
                  <LikeDislikeIcon obj={reply}/>
                </li>
                <ReplyList />
              </div>
            );
            else return <></>
          })}
        </ul>
      </div>
    );
  } 

export default ReplyList;
