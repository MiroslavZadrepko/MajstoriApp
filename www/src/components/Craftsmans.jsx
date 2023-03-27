import { Box, Grid, useScrollTrigger, Fade, CssBaseline, Toolbar, Fab } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import OneCraftsman from "./OneCraftsman";

function ScrollTop(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

const Craftmans = ({ filtrirani, props }) => {

    return (
        <>
            <CssBaseline />
            <Toolbar id="back-to-top-anchor" />
            <Box component='div'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    m: 5,
                    mt: 0
                }} >
                {filtrirani.map(onecraftsman =>

                    <Grid key={onecraftsman._id}>
                        <OneCraftsman filtrirani={filtrirani} id={onecraftsman._id} />
                    </Grid>
                )}
            </Box >

            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    );
}

export default Craftmans;