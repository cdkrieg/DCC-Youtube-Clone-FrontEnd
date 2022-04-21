import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Axios from "../Routes/RoutesAxios";
import CommentForm from "./CommentForm";
import dummyComments from "../../dummyComments";

import CommentList from "../Comment/CommentList";

const Comment = ({ selectedVideo }) => {
  const [returnedComments, setReturnedComments] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    let result = getVideoComments(selectedVideo.id.videoId)
      .then((result) => setReturnedComments(result))
      .then(() => setIsloading(false));
  }, [selectedVideo]);

  async function getVideoComments(videoId) {
    let comments = await Axios.getComments(videoId);
    return comments;
  }
  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <CommentForm comments={dummyComments} />
      <CommentList comments={returnedComments} />
    </div>
  );
};

export default Comment;
