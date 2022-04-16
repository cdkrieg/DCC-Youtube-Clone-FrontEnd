import React from 'react'
import axios from 'axios';
import '../../config'
import googleAPIKey from '../../config';



//TODO: determine CRUD methods
 async function getYoutubeData(url){
     try {
         let result = await axios.get(url)
         return result
     } catch (error) {
         console.log('Error getting data from YoutTube')
     }
 }

 export default axios.create({

    baseURL: 'https://www.googleapis/yputube/v3/',
    params:{
        part: 'snippet',
        maxResults: 8,
        key: googleAPIKey
    }
 })
