import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, CircularProgress, Typography } from '@mui/material';
import useAuth from '../../Hooks/useAuth';

const ManageProducts = () => {
    const { user, token } = useAuth();
    const [productList, setProductList] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProductList(data))
    }, [productList])

    const handleCancelOrder = async (id) => {
        const conf = await window.confirm('Are you sure want to delete your order?');
        if (conf) {
            const url = await fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE'
            });
            const res = await url.json();
            if (res.deletedCount) {
                const remainingProducts = productList.filter(product => product._id !== id)
                setProductList(remainingProducts);
            }
        }
    }

    console.log(productList);
    console.log(productList);
    return (
        <>
            <Typography variant="h5" sx={{ my: 2 }}>Manage products: {productList.length}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product name</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    {
                        (productList[0]?.name) &&
                        <TableBody>
                            {productList.map((order) => (
                                <TableRow
                                    key={order?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="order?">{order?.name}</TableCell>
                                    <TableCell align="left">$5</TableCell>
                                    <TableCell align="left">
                                        <Button onClick={() => handleCancelOrder(order._id)}>Cancel</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    }
                </Table>
            </TableContainer>
        </>
    );
};

export default ManageProducts;