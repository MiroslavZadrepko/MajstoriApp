import { Box, Tab, Tabs } from "@mui/material";
import { Link as RouterLink, useNavigate } from 'react-router-dom';


const Admin = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                m: 5,
            }}>

            <Tabs >
                <Tab
                    label='Handle new craftsmen'
                    value='/admin/crafts'
                    to='/admin/crafts' 
                    component={RouterLink} />

                <Tab
                    label='Handle new reviews'
                    value="/admin/revs"
                    to="/admin/revs"
                    component={RouterLink} />
            </Tabs>

        </Box>
    );
}

export default Admin;