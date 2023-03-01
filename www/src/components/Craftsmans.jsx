import { Box } from "@mui/material";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import OneCraftsman from "./OneCraftsman";

const Craftmans = ({ craftsman }) => {

    const [click, setClick] = useState(false)
    return (
        <>
            <Box component='div'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    m: 5,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7]
                    }
                }} >
                {craftsman.map(craftsman =>
                    <Box key={craftsman._id}>
                        <Link
                            to={`/oneCraftsman/${craftsman._id}`}
                            style={{ textDecoration: 'none' }}
                            
                        >
                            {craftsman.craftsman_name} {craftsman.craftsman_last_name}, {craftsman.craftsman_professionion}
                        </Link>

                    </Box>)}

                < Routes >
                    <Route path="/oneCraftsman/:id" element={<OneCraftsman craftsman={craftsman}  />} />
                </Routes>
            </Box >
        </>
    );
}

export default Craftmans;