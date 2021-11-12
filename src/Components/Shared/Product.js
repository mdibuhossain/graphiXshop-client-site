import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Product = ({ product }) => {
    const { setOrder } = useAuth();
    const handleBuyNow = async () => {
        const orderedProduct = await { ...product };
        setOrder(orderedProduct);
    }

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
                <Link to='/purchase' style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Button onClick={handleBuyNow} variant="contained" sx={{ width: 1, borderRadius: 0 }}>
                        Buy now
                    </Button>
                </Link>
            </Card>
        </Grid>
    );
};

export default Product;