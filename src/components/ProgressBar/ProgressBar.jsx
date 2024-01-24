import React, { useState } from 'react';

import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

export default function ProgressBar({progress}) {

  const normalise = (value) => ((value - 0) * 100) / (progress.length - 0);
  const progressValue = () => progress.filter((item) => item.completed).length
    
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', border: 1, p:1, borderRadius:2 } }>
  
      <Box sx={{width:500, mr: 3, ml: 3 }}>
        <LinearProgress variant="determinate" value={normalise(progressValue())} color='inherit' /> 
      </Box>
      <Box sx={{ minWidth: 80, mr: 3}}>
        <Typography variant="body2" color='inherit'>Done {progressValue()} of {progress.length}</Typography>
      </Box>
    </Box>
  )
}
