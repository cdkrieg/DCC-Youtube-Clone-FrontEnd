import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Axios from "../Routes/RoutesAxios";
import CommentForm from "./CommentForm/CommentForm";
import CommentList from "./CommentList/CommentList";
import './Comment.css'


const Comment = ({ selectedVideo, setSelectedVideo }) => {
  const [returnedComments, setReturnedComments] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [update, setUpdate] = useState(false)
  const forceUpdate = React.useCallback(()=> setUpdate(!update), [selectedVideo])

  useEffect(() => {
    getVideoComments(selectedVideo.id.videoId)

  }, [selectedVideo, update]);

  async function getVideoComments(videoId) {
    let comments = await Axios.getComments(videoId);
    setTimeout(() => {
      if(comments===undefined){
        comments=[]
      }
      setReturnedComments(comments)
      setIsloading(false)
    }, 50);
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
      {returnedComments.length > 0 && returnedComments[0].videoId === selectedVideo.id.videoId && <CommentList comments={returnedComments} />}
    </div>
  );
};

export default Comment;
