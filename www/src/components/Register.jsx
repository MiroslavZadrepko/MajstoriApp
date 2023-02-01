import { useState } from 'react';
import { addUser, getAllUsers } from '../service';
import { Box, TextField, Button } from '@mui/material/';

const Register = ({ setUser, user }) => {

    const [newUser, setNewUser] = useState({
        user_name: "",
        user_email: "",
        user_password: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setNewUser({
            ...newUser,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
                const user = { user_name, user_email, user_password };
                const respons = fetch('/api/user', {
                    method: POST,
                    body: JSON.stringify(user),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
        */
        getAllUsers().then(res => {

            if (!res.data.some(user => user.user_password == newUser.user_password || user.user_email == newUser.user_email)) {
                addUser(newUser.user_name, newUser.user_email, newUser.user_password)
                    .then(res => {
                        setUser(res.data)
                    }
                    )
            }
            //gde se preusmerava, ubaciti isLoged=True
            //da ispiše grešku
        })
    }

    return (

        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                m:5
            }}
            onSubmit={handleSubmit} >

            <TextField
                variant="filled"
                type="text"
                name="user_name"
                label='Unesite korisničko ime'
                value={newUser.user_name}
                onChange={handleChange}
                required
            />
            <TextField
                variant="filled"
                type="email"
                name="user_email"
                label="Unesite e-mail"
                value={newUser.user_email}
                onChange={handleChange}
                required
            />
            <TextField
                variant="filled"
                type="password"
                name="user_password"
                label="Unesite šifru"
                value={newUser.user_password}
                onChange={handleChange}
                required
            />
            <br />
            <Button variant="contained" type="submit">Registrujte se</Button>
        </Box>

    );
}

export default Register;