import { useState } from "react";
import { Navigate } from "react-router-dom";
import { getAllUsers } from "../service";
import { Box, TextField, Button } from '@mui/material/';

const LogIn = ({ setUser, isLoged, setIsLoged, isAdmin, setIsAdmin }) => {

    const [userMail, setUserMail] = useState()
    const [userPass, setUserPass] = useState()

    return (
            <Box
                component='form'
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onSubmit={(e) => {
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
                }}>
                <TextField type="email" label="unesite e-mail" required onChange={(e) => { setUserMail(e.target.value) }} /><br />
                <TextField type="password" label="unsesite šifru" required onChange={(e) => { setUserPass(e.target.value) }} /><br />
                <Button variant="outlined" type="submit">Ulogujte se</Button> <br />
                {isAdmin ? <Navigate to='/Admin' /> : isLoged ? <Navigate to='/' /> : ''}
            </Box>
    )
}

export default LogIn;