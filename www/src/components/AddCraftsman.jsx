import { useState } from "react";
import { Redirect } from "react-router";
import { addTmpCraftsman } from "../service";
import { LogRegInput } from "./styles/LogRegInput.styled"
import { LogRevSend } from "./styles/LogRevSend.styled";


const AddCraftsman = () => {

    const [craftName, setCraftName] = useState('')
    const [craftSName, setCraftSName] = useState('')
    const [craftProfession, setCraftProfession] = useState('')
    const [craftCity, setCraftCity] = useState('')
    const [craftMail, setCraftMail] = useState('')
    const [craftPhone, setCraftPhone] = useState('')
    const [craftRev, setCraftRev] = useState([]) // add option to write rev on submit
    const [sent, setSent] = useState(false) 

    //need to change this part and send newCraft to temp, so admin can check submission

    return (
        <>
            <form style={{ width: '66vw' }} onSubmit={(e) => {
                e.preventDefault()
                addTmpCraftsman(craftName, craftSName, craftProfession, craftCity, craftMail, craftPhone, craftRev).then(res =>
                    setSent(true)
                    
                    )
                }}  >

                <LogRegInput type="text" placeholder="ime majstora" onChange={(e) => { setCraftName(e.target.value) }}required/> <br />
                <LogRegInput type="text" placeholder="prezime majstora" onChange={(e) => { setCraftSName(e.target.value) }} required/><br />
                <LogRegInput type="text" placeholder="majstor za...?" onChange={(e) => { setCraftProfession(e.target.value) }} required/><br />
                <LogRegInput type="text" placeholder="grad" onChange={(e) => { setCraftCity(e.target.value) }} required/><br />
                <LogRegInput type="email" placeholder="e-mail majstora" onChange={(e) => { setCraftMail(e.target.value) }} /><br />
                <LogRegInput type="tel" pattern="[0-9]{10}" placeholder="broj telefona majstora" onChange={(e) => { setCraftPhone(e.target.value) }} required/><br />
                <LogRevSend type="submit" value="Dodaj majstora" />

            </form>
            {sent ? <Redirect to="/" /> : ''}
        </>
    );
}

export default AddCraftsman;