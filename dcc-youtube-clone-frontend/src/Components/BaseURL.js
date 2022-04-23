import googleAPIKey from "../config"

const YouTubeBaseURL = 'https://www.googleapis.com/youtube/v3/search?type=video&key='+ googleAPIKey+'&'
const ServerBaseURL = 'http://localhost:3007/api/'
const BaseURL = {YouTubeBaseURL, ServerBaseURL}

export default BaseURL