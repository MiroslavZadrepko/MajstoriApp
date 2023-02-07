import { useState, useEffect } from "react";
import { Box, TextField, Button } from '@mui/material/';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spiner from './Spiner';

const LogIn = () => {

    const [loginUser, setLoginUser] = useState({
        user_email: "",
        user_password: "",
    })

    const { user_email, user_password } = loginUser;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        
        if (isError) { toast.error(message) }
        if (isSuccess && user && !user.admin) { navigate('/') }
        if (isSuccess && user && user.admin) { navigate('/Admin') }
        dispatch(reset())
    }, [user, isError, isSuccess, message, dispatch, navigate]);

    const handleChange = (e) => {
        setLoginUser((loginUser) => ({
            ...loginUser,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            user_email,
            user_password,
            admin:false
        };
        dispatch(login(user));
    }

    if (isLoading) {
        return <Spiner />
    }

    return (
        <Box
            component='form'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                m: 5,
            }}
            onSubmit={handleSubmit}
        >
            <TextField
                variant="filled"
                type="email"
                name="user_email"
                label="unesite e-mail"
                value={user_email}
                onChange={handleChange}
                required
            />
            <TextField
                variant="filled"
                type="password"
                name="user_password"
                label="unsesite šifru"
                value={user_password}
                onChange={handleChange}
                required
            />
            <br />
            <Button variant="contained" type="submit">Ulogujte se</Button>
        </Box>
    )
}

export default LogIn;