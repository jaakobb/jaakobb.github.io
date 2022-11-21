import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export function StarRating(aProps) {
  const { rating } = aProps;
  
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
      style={{margin: '0 auto'}}
    >
      <Rating name="rating" value={rating} max={10} readOnly={true} />
    </Box> 
  );
}