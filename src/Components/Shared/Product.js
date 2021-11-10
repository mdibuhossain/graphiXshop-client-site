import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Product = ({ product }) => {
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 370, margin: 'auto' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={product.img}
                        alt="graphic card"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Product;