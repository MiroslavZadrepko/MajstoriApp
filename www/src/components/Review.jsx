import { useState } from "react";
import { addTmpReview } from "../service";
import { RevTextareaStyled } from "./styles/RevTextarea.styled";
import { Box, Button } from "@mui/material";

const Review = ({ id }) => {

    const [recenzija, setRecenzija] = useState('')
    const [status, setStatus] = useState(NaN)

    return (

        <>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    m: 5,
                }}
                onSubmit={(e) => {
                    e.preventDefault()

                    addTmpReview(recenzija, id).then(res => {
                        const timer = setTimeout(() => {
                            setStatus(res.status)
                            return () => clearTimeout(timer);
                        }, 500);
                    });
                }
                }> {isNaN(status) ?
                    <>
                        <RevTextareaStyled type="text" placeholder="Napišite recenziju" onChange={(e) => { setRecenzija(e.target.value) }} /><br />
                        <Button variant="contained" type="submit"> Pošaljite recenziju </Button></> : <p>Hvala na recenziji, biće razmotrena</p>
                }
            </Box>

        </> //ovde ubaciti redirect, verovatno na klik
    );
}

export default Review;


