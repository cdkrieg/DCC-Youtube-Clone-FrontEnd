import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Axios from "../Routes/RoutesAxios";
import CommentForm from "./CommentForm";
import dummyComments from "../../dummyComments";

import CommentList from "../Comment/CommentList";

const Comment = ({ selectedVideo, setSelectedVideo }) => {
  const [returnedComments, setReturnedComments] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [update, setUpdate] = useState(false)
  const forceUpdate = React.useCallback(()=> setUpdate(!update), [])

  useEffect(() => {
    let result = getVideoComments(selectedVideo.id.videoId)
      .then((result) => setReturnedComments(result))
      .then(() => setIsloading(false));
  }, [selectedVideo, update]);

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
    <div id="comments">
        <h4>Comments</h4>
      <CommentForm comments={returnedComments} selectedVideo={selectedVideo} forceUpdate={forceUpdate}/>
      <CommentList comments={returnedComments} />
    </div>
  );
};

export default Comment;
