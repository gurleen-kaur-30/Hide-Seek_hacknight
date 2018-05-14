
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = (
    <Route>
        <Route exact path="/lost" component={Lost} />
        <Route exact path="/found" component={Found}/>
        <Route exact path="/" component={App} />
    </Route>
) 

export default routes;