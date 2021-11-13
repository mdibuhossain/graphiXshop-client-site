import { Alert, Button, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const AddReview = () => {
    const [isReviewSubmit, setIsReviewSubmit] = useState(false);
    const { reviewValue, setReviewValue, user } = useAuth();
    const initReviewData = {
        name: user?.displayName,
        description: "",
        occupation: "",
        rating: null
    }
    const [reviewData, setReviewData] = useState(initReviewData);
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const tmpReview = { ...reviewData };
        tmpReview[field] = value;
        tmpReview["rating"] = reviewValue;
        setReviewData(tmpReview);
    }
    const handleSubmitReview = (e) => {
        fetch('https://shielded-headland-50795.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId)
                    setIsReviewSubmit(true);
            })
        e.preventDefault();
    }
    return (
        <Box>
            <Typography variant="h5" sx={{ my: 2 }}>Feedback</Typography>
            <form onSubmit={handleSubmitReview}>
                <TextField
                    sx={{ width: '100%', margin: 'auto', mb: 3 }}
                    label="Feedback"
                    name="description"
                    multiline
                    required
                    rows={4}
                    onBlur={handleOnBlur}
                />
                <TextField
                    sx={{ width: '100%', margin: 'auto', mb: 3 }}
                    label="Occupation"
                    name="occupation"
                    variant="standard"
                    required
                    onBlur={handleOnBlur}
                />
                <Rating
                    name="size-large"
                    value={reviewValue || null}
                    precision={0.5}
                    size="large"
                    onChange={(event, newValue) => {
                        setReviewValue(newValue);
                    }}
                />
                <Button type="submit" variant="contained" sx={{ display: 'block', my: 3 }}>Send Review</Button>
            </form>
            {isReviewSubmit && <Alert severity="success">Review submitted!</Alert>}
        </Box>
    );
};

export default AddReview;