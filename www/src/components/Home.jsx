import Craftsmans from "./Craftsmans";
import { useDispatch, useSelector } from 'react-redux';
import { findCraftsmen, reset } from '../features/craftsman/craftsmanSlice';
import { useState } from "react"
import { Box, Button, TextField } from "@mui/material"

const Home = () => {

    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    
    const { craftsman, message } = useSelector((state) => state.craftsman)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchTerm);
        dispatch(findCraftsmen(searchTerm))

        return () => {
            dispatch(reset());
        }
    }

    return (
        <>
            <Box component='div'>

                <Box component='form' onSubmit={handleSubmit} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    m: 5,
                }}>
                    <h2>Nađite dobrog majstora sa preporukom i ocenom.</h2>
                    <TextField
                        type="text"
                        value={searchTerm}
                        label="Unesite profesiju majstora"
                        variant="filled"
                        onChange={(e) => { setSearchTerm(e.target.value) }}
                    /> <br />
                    <Button variant="contained" type='submit'>Pretražite</Button>
                </Box>
                { console.log(craftsman)}
                {craftsman != null ? <Craftsmans craftsman={craftsman}/> : '' }

            </Box>
        </>
    );
}
export default Home;