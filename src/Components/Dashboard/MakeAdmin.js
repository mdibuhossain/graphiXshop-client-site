import React, { useState } from 'react';
import { Alert, Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useAuth from '../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [makeAdminSuccessfully, setMakeAdminSuccessfully] = useState(false);
    const { token } = useAuth();
    const handleOnChange = (e) => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = (e) => {
        const user = { email };
        fetch('https://shielded-headland-50795.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setMakeAdminSuccessfully(true);
                    setEmail('');
                }
            })
        e.preventDefault();
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: '500', mb: 5 }}>
                Make new Admin
            </Typography >
            <form onSubmit={handleMakeAdmin}>
                <Box sx={{ display: 'flex' }}>
                    <TextField onChange={handleOnChange} label="Email" variant="standard" />
                    <Button type="submit" variant="contained">Make Admin</Button>
                    {
                        makeAdminSuccessfully && <Alert severity="success">Admin successfully made</Alert>
                    }
                </Box>
            </form>
        </Box >
    );
};

export default MakeAdmin;