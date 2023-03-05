import { Box, Grid  } from "@mui/material";
import OneCraftsman from "./OneCraftsman";

const Craftmans = ({ filtrirani }) => {

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
                {filtrirani.map(onecraftsman =>

                    <Grid key={onecraftsman._id}>
                        <OneCraftsman filtrirani={filtrirani} id={onecraftsman._id} />
                    </Grid>
                )}
            </Box >
        </>
    );
}

export default Craftmans;