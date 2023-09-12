import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTmpCraftsman, reset } from '../features/craftsman/craftsmanSlice';
import TmpCraftsman from './TmpCraftsman';
import Spiner from './Spiner';

const AdminHandleCraft = () => {

    const dispatch = useDispatch();

    const { craftsman, isError, message } = useSelector((state) => state.craftsman);

    useEffect(() => {
        dispatch(getAllTmpCraftsman());
        return () => {
            dispatch(reset());
        }
    }, [isError, message, dispatch]);

    if (craftsman === null) {

        return (<> <Spiner /> </>)

    } else {

        return (
            <>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        m: 5,
                    }}>

                    {craftsman != null ? craftsman.length > 0 ?   
                        craftsman.map((el) => (<TmpCraftsman key={el._id} el={el} />)) : 
                        <p>Nema novih predloga majstora</p> : ''} 
                </Box>
            </>
        )
    }
};

export default AdminHandleCraft;