import React, { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Product from '../Shared/Product';
import Title from '../Shared/Title';
import { Link } from 'react-router-dom';

const DisplayProduct = () => {
    const [disProduct, setDisProduct] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/limit_products`)
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
                <Link to='/explore' style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Button variant="contained" sx={{ margin: '25px auto', display: 'block' }}>See more</Button>
                </Link>
            </Container>
        </Box>
    );
};

export default DisplayProduct;