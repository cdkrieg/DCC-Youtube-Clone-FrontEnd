import axios from 'axios';




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

 export default getYoutubeData
