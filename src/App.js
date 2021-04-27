import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./PrivateRoute";
import "./App.css";


export default function App () {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />{" "}
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>{" "}
    </Router>
  );
}