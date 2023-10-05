// import axios from 'axios';

// axios = require('axios');


// const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';

// let options = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: BASE_URL,
//   headers: { 
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com', 
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
//   }
// };


// export const fetchFromAPI = async (url) => {
//   const {data} =  await axios.get(`${BASE_URL}/${url}`, options);

//   return data;

// }


import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromAPI = async (url) => {
    const {data} =  await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  
  }