import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ReplyForm from "./ReplyForm/ReplyForm";
import ReplyList from "./ReplyList/ReplyList";
import Axios from "../Routes/RoutesAxios";

const Reply = (props) => {
  const [returnedReplies, setReturnedReplies] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [update, setUpdate] = useState(false);
  const forceUpdate = React.useCallback(() => setUpdate(!update), []);

  useEffect(() => {
    let result = getReplies(props.commentId)
    .then((result) => setReturnedReplies(result))
    .then(() => setIsloading(false));
  }, [update]);

  async function getReplies(commentId) {
    let replies = await Axios.getReplies(commentId);
    return replies;
  }

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return (
    <div id='replies'>
      <ReplyForm
        replies={returnedReplies}
        commentId={props.commentId}
        setReturnedReplies={setReturnedReplies}
        forceUpdate={forceUpdate}
      />
      <ReplyList replies={returnedReplies} commentId={props.commentId} />
    </div>
  );
};

export default Reply;
