import { Box } from "@mui/system";
import { Navigate, useParams } from "react-router";
import Review from "./Review";


const OneCraftsman = ({ craftsman}) => {

    let { id } = useParams();
    
    let majstor = craftsman.find(element => element._id == id)

    return majstor ?
        <>
            <Box>
                <div>
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