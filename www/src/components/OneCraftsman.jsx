import { Box, Button, Card, CardContent, IconButton, Collapse, CardActions, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { Navigate } from "react-router";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OneRev from "./OneRev";
import Review from "./Review";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const OneCraftsman = ({ filtrirani, id }) => {

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const user = JSON.parse(localStorage.getItem('user'));

    let majstor = filtrirani.find(element => element._id == id);
    
    const [click, setClick] = useState(false)

    return majstor ?
    
        <>
            <Box>
                <Card variant="outlined" sx={{
                    m: 1,
                    boxShadow: "0 10px 20px 12px rgb(8, 8, 8)",
                    "&:hover": {
                        boxShadow: "0 20px 40px 12.125px rgba(0,0,0)"
                    },
                    width: "50vw"
                }} >

                    <CardActions disableSpacing>
                        <CardContent sx={{ py: 0, pl: 1, my: 0 }} >
                            <Typography variant="subtitle2" mb={0} fontSize={22}>{majstor.craftsman_name} {majstor.craftsman_last_name}, {majstor.craftsman_city}</Typography>
                        </CardContent>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent sx={{ py: 0 }} >
                            <Typography>{majstor.craftsman_professionion}</Typography>
                            <p>{majstor.craftsman_phone}</p>
                            <Typography variant="subtitle2" mb={0} fontSize={22}>Recenzije:</Typography>
                            {majstor.craftsman_rev.length > 0 ? 
                            majstor.craftsman_rev.map((el) => <OneRev key={el} majstor={majstor}/>) : click ? '' : <p>Još nema recenzija</p>}
                            {!user ? '' :
                                !click ?
                                    <Button variant="contained" onClick={() => { setClick(!click) }}> Dodajte recenziju </Button>
                                    : <Button variant="contained" onClick={() => { setClick(!click) }}> Nazad </Button>}
                            {click && <Review id={id} />}
                        </CardContent>
                    </Collapse>
                </Card>
            </Box>
        </>
        : <Navigate to='/Craftsmans' />
}

export default OneCraftsman;