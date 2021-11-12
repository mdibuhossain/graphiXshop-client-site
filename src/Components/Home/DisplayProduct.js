import React, { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Product from '../Shared/Product';
import Title from '../Shared/Title';

const DisplayProduct = () => {
    const [disProduct, setDisProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/limit_products`)
            .then(res => res.json())
            .then(data => setDisProduct(data))
    }, [])

    return (
        <Box sx={{ my: 5 }}>
            <Container>
                <Title
                    subTitle="PRODUCT"
                    title="Our Product"
                />
                <Grid container spacing={2}>
                    {
                        disProduct.map(product => <Product
                            key={product._id}
                            product={product}
                        />)
                    }
                </Grid>
                <Button variant="contained" sx={{ margin: '25px auto', display: 'block' }}>See more</Button>
            </Container>
        </Box>
    );
};

export default DisplayProduct;