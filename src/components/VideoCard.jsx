import React from 'react';
import { Typography, Card, CardContent, CardMedia} from '@mui/material';
import {Link} from 'react-router-dom';
import {CheckCircle} from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoVideoUrl
, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: {id: {videoId}, snippet}})  => {
  return (
    <Card sx={{ width: {md: '320px', xs: '100%'},
    boxShadow: 'none', borderRadius: 4 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          alt={snippet?.title}
          sx={{ width: 358, height: 180}}
          image={snippet?.thumbnails?.high?.url} />
      </Link>

      <CardContent 
         sx={{ background: '#1e1e1e',
          height: '106px'
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1'
            fontWeight='bold' color='#fff'
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2'
            fontWeight='bold' color='gray'
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            <CheckCircle sx={{fontSize: 12, color: 'gray', ml: "5"}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
