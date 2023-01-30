import { useState } from "react";
import { Navigate } from "react-router-dom";
import { addTmpCraftsman } from "../service";
import { Box, TextField, Button } from '@mui/material/';

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
            <Box component='form' style={{ width: '66vw' }} onSubmit={(e) => {
                e.preventDefault()
                addTmpCraftsman(craftName, craftSName, craftProfession, craftCity, craftMail, craftPhone, craftRev).then(res =>
                    setSent(true)
                )
            }}  >

                <TextField type="text" label="ime majstora" onChange={(e) => { setCraftName(e.target.value) }} required /> <br />
                <TextField type="text" label="prezime majstora" onChange={(e) => { setCraftSName(e.target.value) }} required /><br />
                <TextField type="text" label="majstor za...?" onChange={(e) => { setCraftProfession(e.target.value) }} required /><br />
                <TextField type="text" label="grad" onChange={(e) => { setCraftCity(e.target.value) }} required /><br />
                <TextField type="email" label="e-mail majstora" onChange={(e) => { setCraftMail(e.target.value) }} /><br />
                <TextField type="tel" pattern="[0-9]{10}" label="broj telefona majstora" onChange={(e) => { setCraftPhone(e.target.value) }} required /><br />
                <Button type="submit" variant="outlined">Dodaj majstora</Button>
            </Box>
            {sent ? <Navigate to="/" /> : ''}
        </>
    );
}

export default AddCraftsman;