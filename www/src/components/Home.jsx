import Craftsmans from "./Craftsmans";
import { useDispatch, useSelector } from 'react-redux';
import { findCraftsmen, reset } from '../features/craftsman/craftsmanSlice';
import { useState } from "react"
import { Box, Button, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [city, setCity] = useState('')
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const { craftsman } = useSelector((state) => state.craftsman);

    const handleCity = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city == '') {
            toast.warning('Morate izabrati grad !', {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            dispatch(findCraftsmen(searchTerm));
            return () => {
                dispatch(reset());
            }
        }
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            if (city == '') {
                toast.warning('Morate izabrati grad !', {
                    position: toast.POSITION.TOP_CENTER
                });
            } else {
                dispatch(findCraftsmen(searchTerm));
                return () => {
                    dispatch(reset());
                }
            }
        }
        navigate('/');
    }

    let filtrirani = null;

    if (craftsman != null && city != '') {
        filtrirani = craftsman.filter((craftsman) => {
            return craftsman.craftsman_city.toLowerCase().includes(city.toLowerCase())
        })
    };

    return (
        <Box component='div'>
            <Box component='div'
                sx={{                    
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    m: 5,
                }}>
                <FormControl variant="filled" >
                    <InputLabel id="demo-simple-select-filled-label" >Izaberite grad</InputLabel>
                    <Select 
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={city}
                        label="Izaberite grad"
                        onChange={handleCity}
                        required
                    >
                        <MenuItem value="">
                            <em>Izaberite grad</em>
                        </MenuItem>
                        <MenuItem value={'Novi Sad'}>Novi Sad</MenuItem>
                        <MenuItem value={'Beograd'}>Beograd</MenuItem>
                    </Select>

                    <TextField
                        type="text"
                        value={searchTerm}
                        label="Unesite profesiju majstora"
                        variant="filled"
                        onChange={(e) => { setSearchTerm(e.target.value) }}
                        onKeyDown={handleKey}
                        required
                    /> <br />
                </FormControl>
                <Button variant="contained" onClick={handleSubmit}>Pretra??ite</Button>
            </Box>

            {filtrirani != null ? <Craftsmans filtrirani={filtrirani} /> : ''}

        </Box>
    );
}
export default Home;