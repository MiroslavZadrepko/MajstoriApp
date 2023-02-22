import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { getTmpCraftsman, addCraftsman, delTempCraftsman } from '../service'

const AdminHandleCraft = () => {

    const [allTmpCraftsman, setAllTmpCraftsman] = useState([]);

    useEffect(() => {
        getTmpCraftsman().then(res => {

            setAllTmpCraftsman(res.data);
           
        })
    }, []);

    const deleteCraftsman = (id) => {
        
        const removeCraftsman = [...allTmpCraftsman].filter(craft => craft._id !== id);
        setAllTmpCraftsman(removeCraftsman); 
        console.log('click' + removeCraftsman)
        delTempCraftsman(id).then(res => {
        console.log('deleted');
        });
    };

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

                {allTmpCraftsman.map(el =>

                    <Box key={el._id} sx={{
                        backgroundColor: 'background.paper',
                        boxShadow: 1,
                        borderRadius: 2,
                        p: 2,
                        m: 1,
                        minWidth: 300,
                    }} >

                        {el.craftsman_name} {el.craftsman_last_name}, {el.craftsman_city}  <br />
                        {el.craftsman_professionion} <br />
                        {el.craftsman_phone} <br />
                        {el.craftsman_email} <br />
                        <Button variant='contained'
                            onClick={()=> deleteCraftsman(el._id)} >Obriši</Button>
                        <Button variant='contained' >Dodaj u bazu</Button>

                    </Box>
                )}
            </Box>
        </>
    )
}

/*


    const replaceCraftsman = (name, last_name, profession, email, phone, id) => {
        addCraftsman (name, last_name, profession, email, phone).then(delTempCraftsman(id).then(res => {
            //console.log(res.data);
        }));
        
          <button onClick={()=> replaceCraftsman(el.craftsman_name, el.craftsman_last_name, el.craftsman_profession, el.craftsman_email, el.craftsman_phone, el.id)}>Dodaj</button>

*/


export default AdminHandleCraft;