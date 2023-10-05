import React from 'react'
import {Stack, Box}from '@mui/material';
import {VideoCard, ChannelCard} from '../components';
const videos = ({videos}) => {

  console.log(videos);
  return (
    <Stack>{videos.map((item, idx) =>  (
      <Box key={idx}>

      </Box>
    ))}

    </Stack>
  )
}

export default videos
