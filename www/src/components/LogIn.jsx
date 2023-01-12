import { useState } from "react";
import { Redirect } from "react-router";
import { getAllUsers } from "../service";
import { LogRegInput } from "./styles/LogRegInput.styled"
import { LogRevSend } from "./styles/LogRevSend.styled"

const LogIn = ({ setUser, isLoged, setIsLoged, isAdmin, setIsAdmin }) => {

    const [userMail, setUserMail] = useState()
    const [userPass, setUserPass] = useState()

    return (

        <form onSubmit={(e) => {
            e.preventDefault()
            getAllUsers().then(res => {

                let activeUser = res.data.find(el => el.user_email == userMail && el.user_password == userPass)

                if (activeUser.admin) {

                    setIsAdmin(prev => !prev)
                    setIsLoged(prev => !prev)

                } else if (activeUser) {

                    setUser(activeUser);
                    setIsLoged(prev => !prev)
                }
            })
        }
        }>
            <div style={{ width: '66vw' }}>

                <label>
                    <LogRegInput type="email" placeholder="unesite e-mail" required onChange={(e) => { setUserMail(e.target.value) }} /> </label>
                <label>
                    <LogRegInput type="password" placeholder="unsesite šifru" required onChange={(e) => { setUserPass(e.target.value) }} /> </label>
                <label> <LogRevSend type="submit" value="Ulogujte se" /></label>

            </div>
            {isAdmin ? <Redirect to='/Admin' /> : isLoged ? <Redirect to='/' /> : ''}
        </form>
    )
}

export default LogIn;