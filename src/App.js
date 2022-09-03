import React from 'react';
import './App.css';
import {Button, Paper, Stack} from "@mui/material";

function App() {
  return (
    <div className="App">
        <Stack alignItems={'center'} padding={20}>
            <Button variant={'contained'} onClick={() => alert('hello heroku')}>
                hello heroku
            </Button>
            <Button variant={'contained'} onClick={() => alert('hello heroku')}>
                hello heroku
            </Button>
        </Stack>
    </div>
  );
}

export default App;
