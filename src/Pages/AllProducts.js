import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Title from '../Components/Shared/Title';
import Product from '../Components/Shared/Product';
import Navigation from '../Components/Shared/Navigation';
import Footer from '../Components/Shared/Footer';

const AllProducts = () => {
    const [disProduct, setDisProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setDisProduct(data))
    }, [])
    return (
        <>
            <Navigation />
            <Box sx={{ my: 5 }}>
                <Container>
                    <Title
                        subTitle="PRODUCT"
                        title="All Product"
                    />
                    <Grid container spacing={2}>
                        {
                            disProduct.map(product => <Product
                                key={product._id}
                                product={product}
                            />)
                        }
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default AllProducts;