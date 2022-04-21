import React from "react";
import {
  ThumbDownOffAlt,
  ThumbDownAlt,
  ThumbUpOffAlt,
  ThumbUpAlt,
} from "@mui/icons-material";

const LikeDislikeIcon = (props) => {
  function changeLikeDislike(event, button) {
    event.preventDefault();
    if (button === ThumbUpOffAlt) {
      props.obj.like = true;
      props.obj.dislike = false;
      console.log(
        `Like is: ${props.obj.like} and dislike is: ${props.obj.dislike}`
      );
    }
    if (button === ThumbUpAlt) {
      props.obj.like = false;
      console.log(
        `Like is: ${props.obj.like} and dislike is: ${props.obj.dislike}`
      );
    }
    if (button === ThumbDownOffAlt) {
      props.obj.dislike = true;
      props.obj.like = false;
      console.log(
        `Like is: ${props.obj.like} and dislike is: ${props.obj.dislike}`
      );
    }
    if (button === ThumbDownAlt) {
      props.obj.dislike = false;
      console.log(
        `Like is: ${props.obj.like} and dislike is: ${props.obj.dislike}`
      );
    }
  }

  if (props.obj.like === true)
    return (
      <div>
        <ThumbUpAlt
          type='button'
          onClick={(event) => {
            changeLikeDislike(event,ThumbUpAlt);
          }}
        />
        <ThumbDownOffAlt
          type='button'
          onClick={(event) => {
            changeLikeDislike(event, ThumbDownOffAlt);
          }}
        />
      </div>
    );
  else if (props.obj.dislike === true)
    return (
      <div>
        <ThumbUpOffAlt
          onClick={(event) => {
            changeLikeDislike(event, ThumbUpOffAlt);
          }}
        />
        <ThumbDownAlt
          type='button'
          onClick={(event) => {
            changeLikeDislike(event, ThumbDownAlt);
          }}
        />
      </div>
    );
  else
    return (
      <div>
        <ThumbUpOffAlt
          type='button'
          onClick={(event) => {
            changeLikeDislike(event, ThumbUpOffAlt);
          }}
        />
        <ThumbDownOffAlt
          type='button'
          onClick={(event) => {
            changeLikeDislike(event, ThumbDownOffAlt);
          }}
        />
      </div>
    );
};

export default LikeDislikeIcon;
