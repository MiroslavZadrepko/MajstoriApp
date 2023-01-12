import { useState } from 'react';
import { addUser, getAllUsers } from '../service';
import { LogRegInput } from './styles/LogRegInput.styled'
import { LogRevSend } from './styles/LogRevSend.styled';

const Register = ({ setUser, user }) => {

    const [newUser, setNewUser] = useState({
        userName: "",
        userMail: "",
        userPass: ""

    })

    const handleChange = (e) => {
        const value = e.target.value;
        setNewUser({
            ...newUser,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getAllUsers().then(res => {

            if (!res.data.some(user => user.user_password == newUser.userPass || user.user_email == newUser.userMail)) {
                addUser(newUser.userName, newUser.userMail, newUser.userPass).then(res => { setUser(res.data) })
            }
            //gde se preusmerava, ubaciti isLoged=True
            //da ispiše grešku
        })
    }

    return (
        <form onSubmit={handleSubmit} style={{ width: '66vw' }}>
            <label>
                <LogRegInput
                    type="text"
                    name="userName"
                    placeholder="Unesite korisničko ime"
                    value={newUser.userName}
                    onChange={handleChange}
                    required
                />
            </label><br />
            <label>
                <LogRegInput
                    type="email"
                    name="userMail"
                    placeholder="Unesite e-mail"
                    value={newUser.userMail}
                    onChange={handleChange}
                    required
                />
            </label><br />
            <label>
                <LogRegInput
                    type="password"
                    name="userPass"
                    placeholder="Unesite šifru"
                    value={newUser.userPass}
                    onChange={handleChange}
                    required
                />
            </label><br />
            <LogRevSend type="submit" value="Registrujte se" />
        </form>
    );
}

export default Register;