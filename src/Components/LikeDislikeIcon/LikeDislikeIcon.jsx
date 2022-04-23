import React, { useState, useEffect } from "react";
import Axios from "../Routes/RoutesAxios";
import {
  ThumbDownOffAlt,
  ThumbDownAlt,
  ThumbUpOffAlt,
  ThumbUpAlt,
} from "@mui/icons-material";
import "./LikeDislikeIcon.css";

const LikeDislikeIcon = (props) => {
  const [likeButton, setLikeButton] = useState(props.obj.like);
  const [dislikeButton, setDislikeButton] = useState(props.obj.dislike);
  const [update, setUpdate] = useState(false);
  const forceUpdate = React.useCallback(() => setUpdate(!update), []);

  useEffect(() => {
    updateLikeDislike(props.obj);
  }, [likeButton, dislikeButton]);

  async function updateLikeDislike(obj) {
    try {
      let result = await Axios.updateComments(obj._id, {
        videoId: obj.videoId,
        body: obj.body,
        like: likeButton,
        dislike: dislikeButton,
        replies: [],
      });
      forceUpdate();
    } catch (error) {
      console.log("Error updating Like/Dislike: " + error);
    }
  }

  function changeLikeDislike(event, button) {
    event.preventDefault();
    if (button === "ThumbUpOffAlt") {
      setLikeButton(true);
      setDislikeButton(false);
      forceUpdate();
    }
    if (button === "ThumbUpAlt") {
      setLikeButton(false);
      forceUpdate();
    }
    if (button === "ThumbDownOffAlt") {
      setDislikeButton(true);
      setLikeButton(false);
      forceUpdate();
    }
    if (button === "ThumbDownAlt") {
      setDislikeButton(false);
      forceUpdate();
    }
  }

  if (likeButton === true)
    return (
      <div className='likeButton'>
        <ThumbUpAlt
          id='buttonLike'
          type='button'
          onClick={(event) => {
            changeLikeDislike(event, "ThumbUpAlt");
          }}
        />
        <ThumbDownOffAlt
          type='button'
          id='button'
          onClick={(event) => {
            changeLikeDislike(event, "ThumbDownOffAlt");
          }}
        />
      </div>
    );
  else if (dislikeButton === true)
    return (
      <div className='likeButton'>
        <ThumbUpOffAlt
          type='button'
          id='button'
          onClick={(event) => {
            changeLikeDislike(event, "ThumbUpOffAlt");
          }}
        />
        <ThumbDownAlt
          type='button'
          id='buttonDislike'
          onClick={(event) => {
            changeLikeDislike(event, "ThumbDownAlt");
          }}
        />
      </div>
    );
  else
    return (
      <div className='likeButton'>
        <ThumbUpOffAlt
          type='button'
          id='button'
          onClick={(event) => {
            changeLikeDislike(event, "ThumbUpOffAlt");
          }}
        />
        <ThumbDownOffAlt
          type='button'
          id='button'
          onClick={(event) => {
            changeLikeDislike(event, "ThumbDownOffAlt");
          }}
        />
      </div>
    );
};

export default LikeDislikeIcon;
