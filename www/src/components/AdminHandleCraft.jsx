import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTmpCraftsman, reset } from '../features/craftsman/craftsmanSlice';
import Spiner from './Spiner';
import TmpCraftsman from './TmpCraftsman';

const AdminHandleCraft = () => {

    const dispatch = useDispatch();

    const { craftsman, isLoading, isError, message } = useSelector((state) => state.craftsman)

    useEffect(() => {

        dispatch(getAllTmpCraftsman());

        return () => {
            dispatch(reset());
        }

    }, [isError, message, dispatch]);

    if(isLoading) {
        return <Spiner/>
    }

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

                {craftsman != null ? craftsman.map((el) => (<TmpCraftsman key={el._id} el={el} />)) 
                
                : (<p>Nema novih predloga majstora</p>) 
               }
            </Box>
        </>
    )
}




export default AdminHandleCraft;