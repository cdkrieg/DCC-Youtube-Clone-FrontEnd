import React from 'react'
import axios from 'axios';
import '../../config'



//TODO: determine CRUD methods
 async function getYoutubeData(url){
     try {
         let result = await axios.get(url)
         return result.data
     } catch (error) {
         console.log('Error getting data from YoutTube')
     }
 }

 export default getYoutubeData
