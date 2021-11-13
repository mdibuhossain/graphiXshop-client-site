import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

const ManageAllOrders = () => {
    const [orderList, setOrderList] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://shielded-headland-50795.herokuapp.com/allorders`)
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [orderList])

    const handleCancelOrder = async (id) => {
        const conf = await window.confirm('Are you sure want to delete this order?');
        if (conf) {
            const url = await fetch(`https://shielded-headland-50795.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            });
            const res = await url.json();
            if (res.deletedCount) {
                const remainingOrders = orderList.filter(order => order._id !== id)
                setOrderList(remainingOrders);
            }
        }
    }

    const handleStatus = (id) => {
        fetch(`https://shielded-headland-50795.herokuapp.com/order/status/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <>
            <Typography variant="h5" sx={{ my: 2 }}>Manage all orders: {orderList.length}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product name</TableCell>
                            <TableCell>User</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderList.map((order) => (
                            <TableRow
                                key={order?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="order?">{order?.product?.name}</TableCell>
                                <TableCell component="th" scope="order?">{order?.email}</TableCell>
                                <TableCell align="left">
                                    {order?.status} <Button onClick={()=>handleStatus(order._id)} variant="contained" sx={{ ml: 2 }}>shipped</Button>
                                </TableCell>
                                <TableCell align="left">
                                    <Button onClick={() => handleCancelOrder(order._id)}>Cancel</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ManageAllOrders;