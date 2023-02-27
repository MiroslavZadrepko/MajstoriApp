import { Box } from "@mui/system";
import { Navigate, useParams } from "react-router";
import Review from "./Review";
import { OneCraftDivStyled } from "./styles/OneCraftDiv.styled"

const OneCraftsman = ({ craftsman }) => {

    let { id } = useParams();
    let majstor = craftsman.find(element => element._id == id)

    return majstor ?
        <>
            <Box>
                <div>
                    <h3>{majstor.craftsman_name} {majstor.craftsman_last_name}</h3>
                    <p>{majstor.craftsman_professionion}</p>
                    <p>{majstor.craftsman_city}</p>
                    <p>{majstor.craftsman_phone}</p>
                    <h3>Recenzije:</h3>
                    {majstor.craftsman_rev.length > 0 ? majstor.craftsman_rev.map((el) => <p key={el}>"{el}"</p>) : <p>Još nema recenzija</p>}
                </div>
                <div>
                    {  /* IMPORT USER FROM STATE user ? <Review id={id} /> : ''*/}
                </div>

            </Box>

        </>
        : <Navigate to='/Craftsmans' />
}

export default OneCraftsman;