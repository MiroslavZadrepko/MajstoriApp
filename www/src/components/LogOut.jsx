import { Redirect } from "react-router";
import { useEffect } from "react";

const LogOut = ({ setUser, isLoged, setIsLoged, isAdmin, setIsAdmin }) => {

    useEffect(() => {
        const timer = setTimeout(() => {

            if (isLoged) {
               
                setIsLoged(prev => !prev)
                
                setUser(null)
            }
            if (isAdmin) {
                setIsAdmin(prev => !prev)
            }

        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoged ? <h2 style={{width: '48vw', marginLeft: '5vw', marginRight: '10vw'}}>Hvala i vratite se opet</h2> : <Redirect to='/' />}
        </>
    );
}

export default LogOut;

