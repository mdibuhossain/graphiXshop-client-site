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
                        height="350px"
                        image={(product?.img?.startsWith('https')) ? product.img : `data:image/jpeg;base64,${product.img}`}
                        alt="graphic card"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{ color: '#1565C0', fontWeight: '600' }}>
                            ${product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"
                            sx={{
                                height: '100px'
                            }}
                        >
                            {product.description}
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