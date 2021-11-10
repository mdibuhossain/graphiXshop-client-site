import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import tacking from '../../images/tracking.png';

const trackingBD = {
    background: `url(${tacking}) no-repeat center center`,
    height: '500px'
}

const TrackingBanner = () => {
    return (
        <Box style={trackingBD} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container>
                <Box>
                    <Box sx={{ textAlign: 'center', color: 'white' }}>
                        <Typography variant="h4">
                            Tracking
                        </Typography>
                        <Typography variant="h4">
                            Track Your Shipment
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <TextField fullWidth sx={{ backgroundColor: 'white' }} />
                        <Button variant="contained">Track</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default TrackingBanner;