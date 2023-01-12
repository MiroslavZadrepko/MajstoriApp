import { useEffect, useState } from "react";
import { delTmpReview, getTmpReview } from "../service";
import { AdminDiv } from "./styles/AdminDiv.styled";

const AdminHandleRev = () => {
    //povlačenje recenzija, povlačenje majstora po ID iz poruka, po ID majstora push u recenzije
    const [allTmpReview, setAllTmpReview] = useState([]);

    useEffect(() => {
        getTmpReview().then(res => {
            setAllTmpReview(res.data);
        });
    }, []);

    const removeRev = id => {
        const removeRev = [...allTmpReview].filter(rev => rev.id !== id);

        setAllTmpReview(removeRev);

        delTmpReview(id).then(res => {
            //console.log(res.data);
        });
    };

    //slice, ubacivanje tog elemnta u novi niz,  pa filter bez tog elementa
    return (
        <>
            <AdminDiv>

                {allTmpReview.map((el => <>
                    <p key={el.id}> {el.rewTxt} </p>
                    <button>Dodaj</button>
                    <button onClick={() => removeRev(el.id)}>Obriši</button> <hr />
                </>
                ))}
            </AdminDiv>

        </>
    );
}

export default AdminHandleRev;