import Craftsmans from "./Craftsmans"
//import { getAllCraftsmans } from "../service.js"
import { useState, useEffect } from "react"
import { Box, TextField } from "@mui/material"

const Home = () => {

    const [craftsmans, setCraftsmans] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    //Rešiti find({craftsman_professionion: 'searchterm'})

    let filtrirani = craftsmans.filter(craftsman => craftsman.craftsman_profession.includes(searchTerm));

    /**    useEffect(() => {
    
            getAllCraftsmans().then(res => {
                setCraftsmans(res.data)
            })
        }, [])*/


    return (
        <>
            <Box component='div'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                <div>
                    <h2>Nađite dobrog majstora sa preporukom i ocenom.</h2>
                </div>

                <TextField

                    type="text"
                    value={searchTerm}
                    label="Unesite profesiju majstora"
                    variant="filled"
                    onChange={(e) => { setSearchTerm(e.target.value) }} />

                {searchTerm != '' ? <Craftsmans craftsmans={filtrirani} /> : ''}

            </Box>
        </>
    );
}
export default Home;