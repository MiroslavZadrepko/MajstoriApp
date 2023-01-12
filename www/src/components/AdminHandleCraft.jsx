import { useEffect, useState } from 'react';
import { addCraftsman, delTempCraftsman, getTmpCraftsman } from '../service'
import { AdminDiv } from './styles/AdminDiv.styled';

const AdminHandleCraft = () => {

    const [allTmpCraftsman, setAllTmpCraftsman] = useState([]);

    useEffect(() => {
        getTmpCraftsman().then(res => {
            console.log(res.data);
            setAllTmpCraftsman(res.data);
        });
    }, []);

    const deleteCraftsman = id => {
        const removeCraftsman = [...allTmpCraftsman].filter(craft => craft.id !== id);

        setAllTmpCraftsman(removeCraftsman);
        console.log(removeCraftsman);
        delTempCraftsman(id).then(res => {
            //console.log(res.data);
        });

    };

    const replaceCraftsman = (name, last_name, profession, email, phone, id) => {
        addCraftsman (name, last_name, profession, email, phone).then(delTempCraftsman(id).then(res => {
            //console.log(res.data);
        }));

    }

    //slice, ubacivanje tog elemnta u novi niz,  pa filter bez tog elementa
    return (
        <>
            <AdminDiv>

                {allTmpCraftsman.map(el =>
                    <div>
                        {el.craftsman_name}{el.craftsman_last_name} <br />
                        {el.craftsman_profession} <br />
                        {el.craftsman_email} <br />
                        {el.craftsman_phone} <br />

                        <button onClick={()=> replaceCraftsman(el.craftsman_name, el.craftsman_last_name, el.craftsman_profession, el.craftsman_email, el.craftsman_phone, el.id)}>Dodaj</button>
                        <button onClick={() => deleteCraftsman(el.id)}>Obriši</button> <hr />
                    </div>
                )}
            </AdminDiv>

        </>
    );

}

export default AdminHandleCraft;