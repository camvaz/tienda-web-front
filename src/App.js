import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollTop from "react-router-scroll-top";
import { toast } from "react-toastify";
import Ruta from "./components/Ruta/Ruta";
import Home from "./components/Home/Home";

toast.configure();

function App() {
    return (
        <Router>
            <ScrollTop>
                <Switch>
                    <Ruta path="/" exact component={Home} />
                </Switch>
            </ScrollTop>
        </Router>
    );
}

export default App;
