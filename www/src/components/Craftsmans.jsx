import { Box } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import OneCraftsman from "./OneCraftsman";

const Craftmans = ({ craftsman }) => {

    return (
        <>

            <Box component='div'>
                { console.log(craftsman[0]._id) }
                {craftsman.map(craftsman => <div key={craftsman._id}><Link to={`/oneCraftsman/${craftsman._id}`}>{craftsman.craftsman_name} {craftsman.craftsman_last_name}, {craftsman.craftsman_professionion}</Link></div>)}
                <Routes>
                    <Route path="/oneCraftsman/:id" element={<OneCraftsman craftsman={craftsman} />} />
                </Routes>
            </Box>

        </>
    );
}

export default Craftmans;