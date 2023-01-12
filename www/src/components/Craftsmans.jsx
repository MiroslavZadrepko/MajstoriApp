import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OneCraftsman from "./OneCraftsman";
import { CraftmansDicStyled } from "./styles/CrafmansDiv.styled"

const Craftmans = ({ craftsmans, isLoged }) => {
    
    return (
        <>
            <Router>
                <CraftmansDicStyled>
                    {craftsmans.map(craftsman => <div key={craftsman.id}><Link to={`/oneCraftsman/${craftsman.id}`}>{craftsman.craftsman_name} {craftsman.craftsman_last_name}, {craftsman.craftsman_profession}</Link></div>)}
                    <Switch>
                        <Route path="/oneCraftsman/:id">
                            <OneCraftsman craftsmans={craftsmans} isLoged={isLoged} />
                        </Route>
                    </Switch>
                </CraftmansDicStyled>
            </Router>
        </>
    );
}

export default Craftmans;