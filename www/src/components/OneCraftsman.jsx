import { Redirect, useParams } from "react-router";
import Review from "./Review";
import { OneCraftDivStyled } from "./styles/OneCraftDiv.styled"

const OneCraftsman = ({ craftsmans, isLoged }) => {

    let { id } = useParams()
    let majstor = craftsmans.find(element => element.id == id)
        
    return majstor ?
        <>
            <OneCraftDivStyled>

                <div>
                    <h3>{majstor.craftsman_name} {majstor.craftsman_last_name}</h3>
                    <p>{majstor.craftsman_profession}</p>
                    <p>{majstor.craftsman_city}</p>
                    <p>{majstor.craftsman_email}</p>
                    <p>{majstor.craftsman_phone}</p>
                    <h3>Recenzije:</h3>
                    {majstor.craftsman_rev.length>0 ? majstor.craftsman_rev.map((el) => <p key={el}>"{el}"</p>) : <p>Još nema recenzija</p>}
                </div>
                <div>
                    {isLoged ? <Review id={id} /> : ''}
                </div>

            </OneCraftDivStyled>

        </>
        : <Redirect to='/Craftsmans' />
}

export default OneCraftsman;