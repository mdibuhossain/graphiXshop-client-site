import { Alert, Button, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [isProductAdded, setIsProductAdded] = useState(false);
    const initReviewData = {
        name: '',
        price: '',
        description: ''
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
        e.preventDefault();
        if (!image) {
            alert('Image not selected');
            return;
        }
        const formData = new FormData();
        formData.append('img', image);
        for (const key in newProductData) {
            formData.append(key, newProductData[key]);
        }

        fetch(`${import.meta.env.VITE_APP_SERVER_URL}/products`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setIsProductAdded(true);
                    setNewProductData({});
                }
            })
    }

    // const Input = styled('input')({
    //     display: 'none',
    // });

    return (
        <Box>
            <Typography variant="h5" sx={{ my: 2 }}>Add new product</Typography>
            <form onSubmit={handleAddProduct}>
                <TextField
                    sx={{ width: '100%', margin: 'auto', mb: 3 }}
                    label="Product name"
                    name="name"
                    required
                    defaultValue={newProductData?.name || ''}
                    onBlur={handleOnBlur}
                />
                <TextField
                    sx={{ width: '100%', margin: 'auto', mb: 3 }}
                    label="Price"
                    name="price"
                    required
                    defaultValue={newProductData?.price || ''}
                    onBlur={handleOnBlur}
                />
                <TextField
                    sx={{ width: '100%', margin: 'auto', mb: 3 }}
                    label="Product details"
                    name="description"
                    multiline
                    required
                    rows={4}
                    defaultValue={newProductData?.description || ''}
                    onBlur={handleOnBlur}
                />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target?.files[0])}
                />
                {/* <TextField
                    sx={{ width: '100%', margin: 'auto', mb: 3 }}
                    label="Product image link"
                    name="img"
                    variant="standard"
                    required
                    value={newProductData?.img || ''}
                    onBlur={handleOnBlur}
                /> */}
                <Button type="submit" variant="contained" sx={{ display: 'block', my: 3 }}>add product</Button>
            </form>
            {isProductAdded && <Alert severity="success">New product added successfully!</Alert>}
        </Box>
    );
};

export default AddProduct;