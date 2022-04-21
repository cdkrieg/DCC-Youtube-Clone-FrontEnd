import axios from 'axios';



const baseURl = 'http://localhost:3007/api/'
//TODO: determine CRUD methods
 async function getYoutubeData(url){
     try {
         let result = await axios.get(url)
         console.log(result.data)
         return result.data
     } catch (error) {
         console.log('Error getting data from YoutTube')
     }
 }

 async function getComments(videoId){
     try {
         let response = await axios.get(baseURl+"comments/?"+videoId)
         if(response){
             console.log(response.data)
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
        let response = await axios.post(baseURl+"comments/", obj,{"content-type":"application/json"})
        if(response){
            return response.data
        }
    } catch (error) {
       console.log('Error updating comments: ' + error)
    }
 }
const Axios = {getYoutubeData, getComments,updateComments, addComments}

 export default Axios
