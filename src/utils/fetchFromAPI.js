import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
  headers: { 
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com', 
    'X-RapidAPI-Key': '598980ad1dmsh2bb2f0c22633af6p11e26cjsn935338574650'
  }
};


export const fetchFromAPI = async (url) => {
  const {data} =  await axios.get(`${BASE_URL}/${url}`, options);
  // const {data} =  await axios.get(`https://youtube-v31.p.rapidapi.com/search?q=football&part=snippet%2Cid&regionCode=IN`, options);
  return data;

}


// import axios from 'axios';
// axios = require('axios');

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'

// const options = {
//   method: 'GET',
//   url: BASE_URL,
//   params: {
//     q: 'music',
//     part: 'snippet,id',
//     regionCode: 'US',
//     maxResults: '50',
//     order: 'date'
//   },  
//   headers: {
//     'X-RapidAPI-Key': '598980ad1dmsh2bb2f0c22633af6p11e26cjsn935338574650',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };
// export const fetchFromAPI = async (url) => {
//     const {data} =  await axios.get(BASE_URL, options);
  
//     return data;
  
