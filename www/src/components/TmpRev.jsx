import { Box, Button, Typography } from '@mui/material';
import services from '../features/craftsman/craftsmanService.js';

const TmpRev = ({ el, allTmpReview, setAllTmpReview }) => {

    const { deleteTmpRev, addReview } = services;

    const removeRev = (id) => {
        const removeRev = [...allTmpReview].filter(rev => rev._id !== id);
        setAllTmpReview(removeRev);
        deleteTmpRev(id).then(res => {
            console.log(res);
        });
    };

    const addRev = (id) => {
        const removeRev = [...allTmpReview].filter(rev => rev._id !== id);
        setAllTmpReview(removeRev);
        addReview(id).then(res => {
            console.log(res);
        })
        deleteTmpRev(id)
    }

    return (

        <Box sx={{
            backgroundColor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            m: 1,
            width: 500,
        }} >

            <p>Created by: {el.creator.user_name}, {el.creator.user_email}</p>
            <Typography style={{ wordWrap: "break-word" }}>{el.revTxt}</Typography>
            <Box sx={{ mt: 3 }}>
                <Button variant='contained'
                    onClick={() => removeRev(el._id)}>Obriši recenziju</Button>
                <Button variant='contained'
                    onClick={() => addRev(el._id)}>Dodaj recenziju</Button>
            </Box>
        </Box>
    )
}

export default TmpRev;