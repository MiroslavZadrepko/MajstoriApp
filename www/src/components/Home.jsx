import Craftsmans from "./Craftsmans"
import { getAllCraftsmans } from "../service.js"
import { useState, useEffect } from "react"
import { SearchInput } from "./styles/SearchInput.styled"
import Toggle from "./Toggle"

const Home = ({ isLoged, searchTerm, setSearchTerm, isVisible }) => {

    const [craftsmans, setCraftsmans] = useState([])

    let filtrirani = craftsmans.filter(craftsman => craftsman.craftsman_profession.includes(searchTerm));

    useEffect(() => {

        getAllCraftsmans().then(res => {
            setCraftsmans(res.data)
        })
    }, [])

    return (
        <>
            <div>
                <div>
                    <h2>Nađite dobrog majstora sa preporukom i ocenom.</h2>
                </div>

                <SearchInput
                    type="text"
                    value={searchTerm}
                    placeholder="Pronađite majstora"
                    onChange={(e) => { setSearchTerm(e.target.value) }} />

                {searchTerm != '' ? <Craftsmans craftsmans={filtrirani} isLoged={isLoged} /> : ''}

                {isVisible && <Toggle />}
            </div>
        </>
    );
}
export default Home;