import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 2, mt: 2 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        My App &copy; {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

export default Footer;