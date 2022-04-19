
// import React, { useState, useEffect } from 'react';
// import { Form, Button, NavItem } from 'react-bootstrap';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';


// const Comments = (props) => {
//     const [comments, setComments] = useState([{}])
//     const [tempComment, setTempComment] = useState()
//     const [reply, setReply] = useState();
//     const [like, setLike] = useState(false);
//     const [dislike, setDislike] = useState(false);
//     const [id, setId] = useState(0);

//     useEffect(() => {
      
    
//       return () => {
//         second
//       }
//     }, [comments])

//     function addComment(event){
//         event.preventDefault();
//         comments.forEach( checkIfExists())
//         setComments({id: id, comment: {comment:tempComment, like: like, date: new Date()}, reply: [{reply: reply, like: like, date: new Date()}]})


//     }
//     function checkIfExists(item){
//         if(item.id === id){

//         }
//     }
    

//     return ( 
//         <div className='comments'>
//             <Form>
//                 <label>Enter Comment</label>
//                 <textArea type="text" onChange={(event) => {setTempComment(event.target.value)}}
//                     onKeyUp={(event) => {if(event.key==='Enter') addComment(event)}} id={id}/>
//                     <ThumbUpIcon type="button" id={id} onClick={()=> { setLike(!like); setDislike(false)}} />
//                     <ThumbDownIcon type="button" id={id} onClick={()=> {setDislike(!dislike); setLike(false)}} />
//             </Form>
            

//         </div>
//      );
// }
 
// export default Comments;