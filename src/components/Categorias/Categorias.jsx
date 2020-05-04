import React, { Component } from "react";
import { connect } from "react-redux";
import { returnImg } from "../../utils/returnImg";
import { Link } from "react-router-dom";

class Categorias extends Component {
    componentDidMount() {}
    render() {
        return (
            <main id="home">
                <div className="grid-articulos">
                    <Link to="/categoria/arte" className="articulo">
                        <img src={returnImg("/arte/cuadro-1.jpg")} alt="Arte" />
                        <h1>Arte</h1>
                    </Link>
                    <Link to="/categoria/calzado" className="articulo">
                        <img
                            src={returnImg("/calzado/nike-air.jpg")}
                            alt="Calzado"
                        />
                        <h1>Calzado</h1>
                    </Link>
                    <Link to="/categoria/articulos" className="articulo">
                        <img
                            src={returnImg("/accesorios/reloj.jpg")}
                            alt="Accesorios"
                        />
                        <h1>Accesorios</h1>
                    </Link>
                    <Link to="/categoria/ropa" className="articulo">
                        <img
                            src={returnImg("/ropa/playera-3.jpg")}
                            alt="Ropa"
                        />
                        <h1>Ropa</h1>
                    </Link>
                </div>
            </main>
        );
    }
}
const mapStateToProps = state => ({
    articulos: state.products.list
});

export default connect(mapStateToProps)(Categorias);
