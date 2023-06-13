import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const LogOut = ({ setUser, isLoged, setIsLoged, isAdmin, setIsAdmin }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {

            if (isLoged) {

                setIsLoged(prev => !prev)
                setUser(null)
            }
            if (isAdmin) {
                setIsAdmin(prev => !prev)
                setUser(null)
            }

        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoged ? <h2 style={{ width: '48vw', marginLeft: '5vw', marginRight: '10vw' }}>Hvala i vratite se opet</h2> : dispatch(logout) && <Navigate to='/' />}
        </>
    );
}

export default LogOut;

