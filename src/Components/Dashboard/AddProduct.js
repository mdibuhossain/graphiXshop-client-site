import { Alert, Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const AddProduct = () => {

    const [isProductAdded, setIsProductAdded] = useState(false);
    const initReviewData = {
        name: '',
        price: '',
        description: '',
        img: ''
    }
    const [newProductData, setNewProductData] = useState(initReviewData);
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const tmpProduct = { ...newProductData };
        tmpProduct[field] = value;
        setNewProductData(tmpProduct);
    }
    const handleAddProduct = (e) => {
        fetch('https://shielded-headland-50795.herokuapp.com/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProductData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId){
                    setIsProductAdded(true);
                    setNewProductData({});
                }
            })
        e.preventDefault();
    }

    return (
        <Box>
            <Typography variant="h5" sx={{ my: 2 }}>Add new product</Typography>
            <form onSubmit={handleAddProduct}>
                <TextField
                    sx={{ width: '100%', margin: 'auto', mb: 3 }}
                    label="Product name"
                    name="name"
                    required
                    value={newProductData?.name||''}
                    onBlur={handleOnBlur}
                />
                <TextField
                    sx={{ width: '100%', margin: 'auto', mb: 3 }}
                    label="Price"
                    name="price"
                    required
                    value={newProductData?.price||''}
                    onBlur={handleOnBlur}
                />
                <TextField
                    sx={{ width: '100%', margin: 'auto', mb: 3 }}
                    label="Product details"
                    name="description"
                    multiline
                    required
                    rows={4}
                    value={newProductData?.description||''}
                    onBlur={handleOnBlur}
                />
                <TextField
                    sx={{ width: '100%', margin: 'auto', mb: 3 }}
                    label="Product image link"
                    name="img"
                    variant="standard"
                    required
                    value={newProductData?.img||''}
                    onBlur={handleOnBlur}
                />
                <Button type="submit" variant="contained" sx={{ display: 'block', my: 3 }}>add product</Button>
            </form>
            {isProductAdded && <Alert severity="success">New product added successfully!</Alert>}
        </Box>
    );
};

export default AddProduct;