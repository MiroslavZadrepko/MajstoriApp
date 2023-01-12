import { useState } from "react";
import { addTmpReview } from "../service";
import { RevFormStyled } from "./styles/RevForm.styled";
import { RevTextareaStyled } from "./styles/RevTextarea.styled"
import { RevInputSend } from "./styles/RevInputSend.styled"

const Review = ({ id }) => {

    const [recenzija, setRecenzija] = useState('')
    const [status, setStatus] = useState(NaN)

    return (
        
        <>
            <RevFormStyled onSubmit={(e) => {
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
                    <RevInputSend type="submit" value="Pošaljite recenziju" /> </> : <p>Hvala na recenziji, biće razmotrena</p>
                }
            </RevFormStyled>

        </> //ovde ubaciti redirect, verovatno na klik
    );
}

export default Review;


