import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollTop from "react-router-scroll-top";
import { toast } from "react-toastify";
import Ruta from "./components/Ruta/Ruta";
import Home from "./components/Home/Home";
import { setProducts } from "./components/Redux/actions";
import { connect } from "react-redux";
import { API_ENDPOINT } from "./constants/endpoint";
import Categoria from "./components/Categoria/Categoria";
import Categorias from "./components/Categorias/Categorias";
import Carrito from "./components/Carrito/Carrito";
import "react-toastify/dist/ReactToastify.css";
import Caja from "./components/Caja/Caja";

toast.configure();

class App extends Component {
    componentDidMount() {
        this.loadProducts();
    }

    async loadProducts() {
        const response = await fetch(`${API_ENDPOINT}/api/product`);
        if (response) {
            const toJson = await response.json();
            this.props.updateItems(toJson.data);
        }
    }

    render() {
        return (
            <Router>
                <ScrollTop>
                    <Switch>
                        <Ruta path="/" exact component={Home} />
                        <Ruta path="/categorias" exact component={Categorias} />
                        <Ruta path="/cart" exact component={Carrito} />
                        <Ruta path="/caja" exact component={Caja} />
                        <Ruta
                            path="/categoria/:categoria"
                            exact
                            component={Categoria}
                        />
                    </Switch>
                </ScrollTop>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateItems: products => dispatch(setProducts(products))
    };
};

export default connect(null, mapDispatchToProps)(App);
