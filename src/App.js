import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar, Feed, VideoDetail, SearchFeed, ChannelDetail} from './components';

const App = () => (
  
    <BrowserRouter>
      <Box sx={{backgroundColor: "#000"}}>
        < Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed/>} />
          <Route path="/video/:id" element={<VideoDetail/>}/>
          <Route path="/channel/:id" element={<ChannelDetail/>}/>
          <Route path="/search/:seacrhTerm" element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter> 
);

export default App;
