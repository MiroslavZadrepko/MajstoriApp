import { useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import { deleteTmpCraftsman, moveTmpCraftsman } from '../features/craftsman/craftsmanSlice';

const TmpCraftsman = ({ el }) => {

    const dispatch = useDispatch();

    return (

        <Box sx={{
            backgroundColor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            m: 1,
            minWidth: 300,
        }} >

            <p>Created by {el.user}</p>
            {el.craftsman_name} {el.craftsman_last_name}, {el.craftsman_city}  <br />
            {el.craftsman_professionion} <br />
            {el.craftsman_phone} <br />
            <Button variant='contained'
                onClick={() => dispatch(deleteTmpCraftsman(el._id))}>Obriši</Button>
            <Button variant='contained' 
                onClick={()=> dispatch(moveTmpCraftsman(el._id))}>Dodaj u bazu</Button>

        </Box>
    )
}

/*


    const replaceCraftsman = (name, last_name, profession, email, phone, id) => {
        addCraftsman (name, last_name, profession, email, phone).then(delTempCraftsman(id).then(res => {
            //console.log(res.data);
        }));
        
          <button onClick={()=> replaceCraftsman(el.craftsman_name, el.craftsman_last_name, el.craftsman_profession, el.craftsman_email, el.craftsman_phone, el.id)}>Dodaj</button>

*/

export default TmpCraftsman;