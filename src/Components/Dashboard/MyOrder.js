import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../Hooks/useAuth';
import { Button, Typography } from '@mui/material';

const MyOrder = () => {
    const { user, token } = useAuth();
    const [orderList, setOrderList] = React.useState([]);

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/orders?email=${user?.email}`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => setOrderList(data))
    }, [user?.email, token, orderList])

    const handleCancelOrder = async (id) => {
        const conf = await window.confirm('Are you sure want to delete your order?');
        if (conf) {
            const url = await fetch(`${process.env.REACT_APP_SERVER_URL}/orders/${id}`, {
                method: 'DELETE'
            });
            const res = await url.json();
            if (res.deletedCount) {
                const remainingOrders = orderList.filter(order => order._id !== id)
                setOrderList(remainingOrders);
            }
        }
    }

    return (
        <>
            <Typography variant="h5" sx={{ my: 2 }}>My orders: {orderList.length}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product name</TableCell>
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
                                <TableCell align="left">{order?.status}</TableCell>
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

export default MyOrder;