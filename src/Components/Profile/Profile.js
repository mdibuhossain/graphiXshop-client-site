import { Button, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Profile = () => {
    const { user, userNewDataUpdate } = useAuth();
    const [newUserData, setNewUserData] = useState({});
    const handleChangeData = async (e) => {
        const tmpData = await { ...newUserData };
        tmpData[e.target.name] = await e.target.value;
        await setNewUserData(tmpData);
    }
    const handleSubmitData = async (e) => {
        if (newUserData?.displayName === '') {
            userNewDataUpdate({ photoURL: newUserData?.photoURL });
        }
        else if (newUserData?.photoURL === '') {
            userNewDataUpdate({ displayName: newUserData?.displayName });
        }
        else
            userNewDataUpdate(newUserData);
        e.preventDefault();
    }
    return (
        <Box sx={{ minHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper elevation={5} sx={{ mt: 8 }}>
                <Box sx={{ width: '280px', m: 5 }}>
                    <form onSubmit={handleSubmitData}>
                        <Typography sx={{ fontSize: '18px' }}>
                            Name: <span style={{ fontWeight: 500 }}>{user?.displayName}</span>
                        </Typography>
                        <img style={{ width: '100%', margin: '20px 0' }} src={user?.photoURL || 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'} alt="" />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField onChange={handleChangeData} defaultValue={newUserData?.displayName} name="displayName" label="New name" variant="outlined" />
                            <TextField onChange={handleChangeData} defaultValue={newUserData?.photoURL} name="photoURL" label="New profile photo (URL)" variant="outlined" sx={{ my: 3 }} />
                        </Box>
                        <Button type="submit" variant="contained" sx={{ width: 1 }}>Update</Button>
                    </form>
                </Box>
            </Paper>
        </Box >
    );
};

export default Profile;