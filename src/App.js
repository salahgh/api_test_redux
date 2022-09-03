import React from 'react';
import './App.css';
import getLanguages from "./test";
import {Button, Paper, Stack} from "@mui/material";

function App() {
  const getData = getLanguages
  const data = getData() ;
  return (
    <div className="App">
        <Stack alignItems={'center'} padding={20}>
            <Button variant={'contained'} onClick={() => alert('hello heroku')}>
                hello heroku
            </Button>
        </Stack>
    </div>
  );
}

export default App;
