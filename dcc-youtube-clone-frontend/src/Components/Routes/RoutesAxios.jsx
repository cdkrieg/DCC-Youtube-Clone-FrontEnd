import axios from 'axios';



const baseURl = 'http://localhost:3007/api/'
//TODO: determine CRUD methods
 async function getYoutubeData(url){
     try {
         let result = await axios.get(url)
         return result.data
     } catch (error) {
         console.log('Error getting data from YoutTube')
     }
 }

 async function getComments(videoId){
     try {
         let response = await axios.get(baseURl+"comments/?"+videoId)
         if(response){
             return response.data
         }
     } catch (error) {
        console.log('Error getting comments: ' + error)
     }
 }

 async function updateComments(id, obj){
    try {
        let response = await axios.put(baseURl+"comments/"+id, obj)
        if(response){
            return response.data
           
        }
    } catch (error) {
       console.log('Error updating comments: ' + error)
    }
 }
 async function addComments(obj){
    try {
        let response = await axios.post(baseURl+"comments", obj,{"content-type":"application/json"})
        if(response){
            return response.data
        }
    } catch (error) {
       console.log('Error updating comments: ' + error)
    }
 }

 async function getReplies(id){
    try {
        let response = await axios.get(baseURl+"replies/?"+id)
        if(response){
            return response.data
        }
    } catch (error) {
       console.log('Error getting comments: ' + error)
    }
}

async function addReplies(obj){
    try {
        let response = await axios.post(baseURl+"replies", obj,{"content-type":"application/json"})
        if(response){
            return response.data
        }
    } catch (error) {
       console.log('Error updating comments: ' + error)
    }
 }

const Axios = {getYoutubeData, getComments,updateComments, addComments, getReplies, addReplies}

 export default Axios
