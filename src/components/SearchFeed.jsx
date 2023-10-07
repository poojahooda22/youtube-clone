import React from 'react';
import {useState, useEffect} from 'react';
import {Stack, Box, Typography} from '@mui/material';
import { Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

function SearchFeed () {
  const[videos, setVideos] = useState([]);



  useEffect(() => {
    // fetchFromAPI(`search?part=snippet&q=${selectedCategory}`) 
    fetchFromAPI(`search?part=snippet&q=${}`) 
    .then((data) => setVideos(data.items))

  }, []);


  return (
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}} >
          {}
          <span style={{color: '#f31503'}}> Videos

          </span>
        </Typography>

        <Videos videos={videos}/>
      </Box> 
  )
}

export default SearchFeed