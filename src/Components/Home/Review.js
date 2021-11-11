import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Title from '../Shared/Title';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const responsive = {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1024: {
            items: 3
        }
    };
    return (
        <Container>
            <Title
            subTitle="TESTIMONIAL"
            title="Clients Feedback"
            />
            <AliceCarousel
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlayInterval={1000}
                disableButtonsControls={true}
            >
                {
                    reviews.map(review => {
                        return (
                            <Paper key={review._id} variant="outlined" sx={{ margin: '0 10px', padding: '15px' }}>
                                <Typography variant="subtitle1">
                                    {review.description}
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="subtitle2">
                                        {review.name}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ color: '#0864d6' }}>
                                        {review.occupation}
                                    </Typography>
                                </Box>
                            </Paper>
                        )
                    })
                }
            </AliceCarousel>
        </Container>
    );
};

export default Review;