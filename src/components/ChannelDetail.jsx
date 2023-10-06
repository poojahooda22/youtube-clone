import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';

import { Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () =>  {

  const [channelDetail, setChannelDetail] = useState(null);

  const{ id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
  })
  return (
    <div>

    </div>
  )
}


export default ChannelDetail
