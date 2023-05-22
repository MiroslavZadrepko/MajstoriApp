import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Box, TextField, Button } from '@mui/material/';
import { createTmpCraftsman, reset } from "../features/craftsman/craftsmanSlice";

const AddCraftsman = () => {

    const [tmpCraftsman, setTmpCraftsman] = useState({
        craftsman_name: '',
        craftsman_last_name: '',
        craftsman_professionion: '',
        craftsman_city: '',
        craftsman_phone: '',
        craftsman_rev: []
    })

    const {
        craftsman_name,
        craftsman_last_name,
        craftsman_professionion,
        craftsman_city,
        craftsman_phone,
        craftsman_rev } = tmpCraftsman;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { craftsman, isSuccess, isError, message } = useSelector((state) => state.craftsman)

    useEffect(() => {

        if (isError) { toast.error(message) }
        if (isSuccess) {
            toast.success('Craftsman added to tmp base, will be visible after we check him', {
                position: toast.POSITION.TOP_RIGHT
            })
                && navigate('/');
        }
        dispatch(reset())
    }, [craftsman, isError, isSuccess, message, dispatch, navigate])


    const handleChange = (e) => {
        setTmpCraftsman((tmpCraftsman) => ({
            ...tmpCraftsman,
            [e.target.name]: e.target.name === 'craftsman_professionion' || e.target.name === 'craftsman_city' 
            ? e.target.value.toLowerCase() 
            : e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
 
        const craftsman = {
            craftsman_name,
            craftsman_last_name,
            craftsman_professionion,
            craftsman_city,
            craftsman_phone,
            craftsman_rev
        };
        dispatch(createTmpCraftsman(craftsman))
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
                variant="filled"
                    type="text"
                    name="craftsman_name"
                    label="ime majstora"
                    value={craftsman_name}
                    onChange={handleChange}
                    required />

                <TextField
                variant="filled"
                    type="text"
                    name="craftsman_last_name"
                    label="prezime majstora"
                    value={craftsman_last_name}
                    onChange={handleChange}
                    required />

                <TextField
                variant="filled"
                    type="text"
                    name="craftsman_professionion"
                    label="profesija majstora"
                    value={craftsman_professionion}
                    onChange={handleChange}
                    required />

                <TextField
                variant="filled"
                    type="text"
                    name="craftsman_city"
                    label="grad"
                    value={craftsman_city}
                    onChange={handleChange}
                    required />

                <TextField
                variant="filled"
                    type="tel"
                    name="craftsman_phone"
                    pattern="[0-9]{10}"
                    label="broj telefona majstora"
                    value={craftsman_phone}
                    onChange={handleChange}
                    required /><br />

                <Button type="submit" variant="contained">Dodaj majstora</Button>
            </Box>
        </>
    );
}

export default AddCraftsman;