import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import services from "../features/craftsman/craftsmanService.js"
import TmpRev from "./TmpRev.jsx";

const AdminHandleRev = () => {
    const { getAllTmpRevs } = services;
    const [allTmpReview, setAllTmpReview] = useState([]);

    useEffect(() => {
        getAllTmpRevs().then(res => {
            setAllTmpReview(res);
        });
    }, []);

    return (
        <>
            <Box  sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        m: 5,
                    }}>
                {allTmpReview ?
                    allTmpReview.map((el =>(<TmpRev allTmpReview = {allTmpReview} setAllTmpReview={setAllTmpReview} key={el._id} el={el} />))) : 
                    <p>Nema novih predloga majstora</p> }
            </Box>

        </>
    );
}

export default AdminHandleRev;