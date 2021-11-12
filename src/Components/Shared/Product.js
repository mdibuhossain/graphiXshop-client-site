import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Product = ({ product }) => {
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 370, margin: 'auto' }}>
                <CardActionArea sx={{ minHeight: 400 }}>
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
                <Button variant="contained" sx={{ width: 1 }}>Bal</Button>
            </Card>
        </Grid>
    );
};

export default Product;