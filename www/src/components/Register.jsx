import { useState } from 'react';
import { addUser, getAllUsers } from '../service';
import { LogRegInput } from './styles/LogRegInput.styled'
import { LogRevSend } from './styles/LogRevSend.styled';

const Register = ({ setUser, user }) => {

    const [newUser, setNewUser] = useState({
        user_name: "",
        user_email: "",
        user_password: ""

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

        const user = { user_name, user_email, user_password};
        const respons = fetch('/api/user', {
            method: POST,
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })


        getAllUsers().then(res => {

            if (!res.data.some(user => user.user_password == newUser.user_password || user.user_email == newUser.user_email)) {
                addUser(newUser.user_name, newUser.user_email, newUser.user_password)
                .then(res => { 
                    setUser(res.data) }
                )
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
                    name="user_name"
                    placeholder="Unesite korisničko ime"
                    value={newUser.user_name}
                    onChange={handleChange}
                    required
                />
            </label><br />
            <label>
                <LogRegInput
                    type="email"
                    name="user_email"
                    placeholder="Unesite e-mail"
                    value={newUser.user_email}
                    onChange={handleChange}
                    required
                />
            </label><br />
            <label>
                <LogRegInput
                    type="password"
                    name="user_password"
                    placeholder="Unesite šifru"
                    value={newUser.user_password}
                    onChange={handleChange}
                    required
                />
            </label><br />
            <LogRevSend type="submit" value="Registrujte se" />
        </form>
    );
}

export default Register;