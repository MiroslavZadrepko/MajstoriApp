import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import { Box, TextField, Button } from '@mui/material/';
import { createTmpCraftsman } from "../features/craftsman/craftsmanSlice";

const AddCraftsman = () => {

    const dispatch = useDispatch()

    const [tmpCraftsman, setTmpCraftsman] = useState({
        craftsman_name: '',
        craftsman_last_name: '',
        craftsman_professionion: '',
        craftsman_city: '',
        craftsman_email: '',
        craftsman_phone: '',
        craftsman_rev: []
    })

    const {
        craftsman_name,
        craftsman_last_name,
        craftsman_professionion,
        craftsman_city,
        craftsman_email,
        craftsman_phone,
        craftsman_rev } = tmpCraftsman;

    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setTmpCraftsman((tmpCraftsman) => ({
            ...tmpCraftsman,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const craftsman = {
            craftsman_name,
            craftsman_last_name,
            craftsman_professionion,
            craftsman_city,
            craftsman_email,
            craftsman_phone,
            craftsman_rev
        };
        dispatch(createTmpCraftsman(craftsman))
        setSent(true)
    }

    return (
        <>
            <Box component='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    m: 5
                }}
                onSubmit={handleSubmit} >

                <TextField
                    type="text"
                    name="craftsman_name"
                    label="ime majstora"
                    value={craftsman_name}
                    onChange={handleChange}
                    required />

                <TextField
                    type="text"
                    name="craftsman_last_name"
                    label="prezime majstora"
                    value={craftsman_last_name}
                    onChange={handleChange}
                    required />

                <TextField
                    type="text"
                    name="craftsman_professionion"
                    label="profesija majstora"
                    value={craftsman_professionion}
                    onChange={handleChange}
                    required />

                <TextField
                    type="text"
                    name="craftsman_city"
                    label="grad"
                    value={craftsman_city}
                    onChange={handleChange}
                    required />

                <TextField
                    type="email"
                    name="craftsman_email"
                    label="e-mail majstora"
                    value={craftsman_email}
                    onChange={handleChange} />

                <TextField
                    type="tel"
                    name="craftsman_phone"
                    pattern="[0-9]{10}"
                    label="broj telefona majstora"
                    value={craftsman_phone}
                    onChange={handleChange}
                    required /><br />

                <Button type="submit" variant="contained">Dodaj majstora</Button>
            </Box>
            {sent ? <Navigate to="/" /> : ''}
        </>
    );
}

export default AddCraftsman;