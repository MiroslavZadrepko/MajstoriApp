import { useState } from "react";
import AdminHandleCraft from "./AdminHandleCraft";
import AdminHandleRev from "./AdminHandleRev";

const Admin = () => {

    const [choice, setChoice] = useState()

    return (
        <>
            <button onClick={() => setChoice(false)}>New craftmans</button>
            <button onClick={() => setChoice(true)}>New reviews</button>
            {choice ? <AdminHandleRev /> : <AdminHandleCraft /> }
        </>
    );
}

export default Admin;