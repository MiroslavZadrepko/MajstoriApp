import Craftsmans from "./Craftsmans";
import { useDispatch, useSelector } from 'react-redux';
import { findCraftsmen, reset } from '../features/craftsman/craftsmanSlice';
import { useState } from "react"
import { Box, Button, TextField } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const { craftsman, message } = useSelector((state) => state.craftsman)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(findCraftsmen(searchTerm));
        return () => {
            dispatch(reset());
        }
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            dispatch(findCraftsmen(searchTerm));
            return () => {
                dispatch(reset());
            }
        }
        navigate('/');
    }

    return (

        <Box component='div'>

            <Box component='div'
                sx={{ //možda ceo sx da premestim sprat više
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
                    onKeyDown={handleKey}
                /> <br />
                <Button variant="contained" onClick={handleSubmit}>Pretražite</Button>
            </Box>

            {craftsman != null ? <Craftsmans craftsman={craftsman} /> : ''}

        </Box>
    );
}
export default Home;