import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material/';
import { toast } from 'react-toastify';
import authSlice, { addUser, reset } from '../features/auth/authSlice';


const Register = ({ setUser }) => {

    const [newUser, setNewUser] = useState({
        user_name: "",
        user_email: "",
        user_password: ""
    })

    const { user_name, user_email, user_password } = newUser;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => auth.state);

    

    const handleChange = (e) => {
        setNewUser((newUser) => ({
            ...newUser,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailExists = async () => await db.users.findOne({
            user_email: newUser.user_email
        });

        const passExists = async () => await db.users.findOne({
            user_password: newUser.user_password
        });

        if (emailExists) {
            toast.error('e-mail already exist')
        } else if (passExists) {
            toast.error('password already exist')
        } else {
            const user = {
                user_name,
                user_email,
                user_password
            };
            dispatch(addUser(user));
        }
    }

    return (

        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                m: 5
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