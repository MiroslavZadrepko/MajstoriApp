import { Box, Grid  } from "@mui/material";
import OneCraftsman from "./OneCraftsman";

const Craftmans = ({ craftsman }) => {

    return (
        <>
            <Box component='div'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    m: 5,
                }} >
                {craftsman.map(onecraftsman =>

                    <Grid key={onecraftsman._id}>
                        <OneCraftsman craftsman={craftsman} id={onecraftsman._id} />
                    </Grid>
                )}
            </Box >
        </>
    );
}

export default Craftmans;