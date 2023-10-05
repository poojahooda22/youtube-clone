import React from 'react'
import {Stack, Box}from '@mui/material';

const videos = ({videos}) => {

  console.log(videos);
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, idx) => (
      ))}
    </Stack>
  )
}

export default videos
