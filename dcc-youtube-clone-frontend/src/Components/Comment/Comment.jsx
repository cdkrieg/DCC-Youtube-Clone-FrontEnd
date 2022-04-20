import React, { useState, useEffect } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

import CommentForm from './CommentForm';
import CommentList from './CommentList';
import dummyComments from '../../dummyComments';

const Comment = () => {
    return ( 
        <div>
            <CommentForm comments={dummyComments}/>
            <CommentList comments={dummyComments}/>
        </div>
     );
}
 
export default Comment;