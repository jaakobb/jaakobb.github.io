import React, { useState } from 'react';

import './App.css';

import {Movies} from "../Movies/Movies";
import {Series} from "../Series/Series";
import {Music} from "../Music/Music";
import {Games} from "../Games/Games";
import {Books} from "../Books/Books";

import {TabPanel} from '../../components/TabPanel/index'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="App">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs aria-label="basic tabs example" value={activeIndex} >
            <Tab label="Startseite" onClick={() => setActiveIndex(0)} />
            <Tab label="Filme" onClick={() => setActiveIndex(1)} />
            <Tab label="Serien" onClick={() => setActiveIndex(2)} />
            <Tab label="Musik" onClick={() => setActiveIndex(3)} />
            <Tab label="Games" onClick={() => setActiveIndex(4)} />
            <Tab label="Bücher" onClick={() => setActiveIndex(5)} />
          </Tabs>
        </Box>
        <TabPanel index={0} isActive={activeIndex === 0}>
          Startseite
        </TabPanel>
        <TabPanel index={1} isActive={activeIndex === 1}>
          <Movies />
        </TabPanel>
        <TabPanel index={2} isActive={activeIndex === 2}>
          <Series />
        </TabPanel>
        <TabPanel index={3} isActive={activeIndex === 3}>
          <Music />
        </TabPanel>
        <TabPanel index={4} isActive={activeIndex === 4}>
          <Games />
        </TabPanel>
        <TabPanel index={5} isActive={activeIndex === 5}>
          <Books />
        </TabPanel>
    </div>
  );
}

export default App;
