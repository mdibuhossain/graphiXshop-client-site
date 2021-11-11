import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Title = ({ subTitle, title }) => {
    return (
        <Box sx={{textAlign: 'center', my: 8}}>
            <Typography variant="body1" sx={{fontWeight: '600', mb: 1, letterSpacing: 2, color: '#a6a6a6'}}>
                {subTitle}
            </Typography>
            <Typography variant="h3">
                {title}
            </Typography>
        </Box>
    );
};

export default Title;