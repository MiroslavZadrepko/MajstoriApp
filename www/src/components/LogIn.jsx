import { useState } from "react";
import { Navigate } from "react-router-dom";
import { getAllUsers } from "../service";
import { Box, TextField, Button } from '@mui/material/';

const LogIn = ({ setUser, isLoged, setIsLoged, isAdmin, setIsAdmin }) => {

    const [userMail, setUserMail] = useState()
    const [userPass, setUserPass] = useState()

    const handleSubmit = (e) => {

        e.preventDefault()
        getAllUsers().then(res => {

            let activeUser = res.data.find(el => el.user_email == userMail && el.user_password == userPass)

            if (activeUser.admin) {
                setIsAdmin(prev => !prev)
                setIsLoged(prev => !prev)
            } else if (activeUser) {
                setUser(activeUser);
                setIsLoged(prev => !prev)
            }
        })
    }

    return (
        <Box
            component='form'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '& .MuiTextField-root': { mt: 5, width: '25ch' },
            }}
            onSubmit={handleSubmit}
        >
            <TextField
                variant="filled"
                type="email"
                label="unesite e-mail"
                required
                onChange={(e) => { setUserMail(e.target.value) }}
            />
            <TextField
                variant="filled"
                type="password"
                label="unsesite šifru" required
                onChange={(e) => { setUserPass(e.target.value) }}
            />
            <br />
            <Button variant="contained" type="submit">Ulogujte se</Button>
            {isAdmin ? <Navigate to='/Admin' /> : isLoged ? <Navigate to='/' /> : ''}
        </Box>
    )
}

export default LogIn;