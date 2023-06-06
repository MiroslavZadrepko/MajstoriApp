import { useState } from "react";
import { addTmpReview } from "../features/craftsman/craftsmanSlice";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

const Review = ({ id }) => {

    const craftID = id;
    const dispatch = useDispatch();
    const [status, setStatus] = useState(NaN);

    const [tmpRev, setTmpRev] = useState({
        creator: {
            user_name: '',
            user_email: '',
            id: ''
        },
        revTxt: '',
        revCraftID: ''
    });

    const { creator, revTxt, revCraftID } = tmpRev

    const user = JSON.parse(localStorage.getItem('user'))

    const handleChange = (e) => {
        e.preventDefault();
        setTmpRev((tmpRev) => ({
            creator: {
                user_name: user.user_name,
                user_email: user.user_email,
                id: user._id
            },
            revTxt: e.target.value,
            revCraftID: craftID
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const tmpReview = {
            creator,
            revTxt,
            revCraftID
        }
        dispatch(addTmpReview(tmpReview));

        const timer = setTimeout(() => {
            setStatus(!status)
            return () => clearTimeout(timer);
        }, 500);

        toast.success('Review added to tmp base, will be visible after we check it', {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    return (
        <>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    m: 5,
                }}
                onSubmit={handleSubmit}
            >
                {isNaN(status) ?
                    <Box>
                        <TextField
                            fullWidth
                            id="outlined-multiline-flexible"
                            variant="outlined"
                            label="Napišite recenziju"
                            multiline
                            maxRows={4}
                            onChange={handleChange} />
                        <Button
                            variant="contained"
                            type="submit"
                        > Pošaljite recenziju </Button>
                    </Box> : ''}
            </Box>
        </>
    );
}

export default Review;


