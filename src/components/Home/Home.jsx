import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../Redux/actions";
import { returnImg } from "../../utils/returnImg";
import { toast } from "react-toastify";
import "./Home.scss";
class Home extends Component {
    componentDidMount() {}
    render() {
        const { articulos } = this.props;
        return (
            <main id="home">
                <div className="grid-articulos">
                    {Object.keys(articulos).map((keyname, index) => (
                        <div key={index} className="articulo">
                            <img
                                src={returnImg(articulos[keyname]?.img)}
                                alt=""
                            />
                            <h1>{articulos[keyname]?.name}</h1>
                            <div className="descripcion">
                                <p>{articulos[keyname]?.category}</p>
                                <p>${articulos[keyname]?.price}</p>
                            </div>
                            <button
                                onClick={async () => {
                                    await this.props.addItem({
                                        cantidad: 1,
                                        id: keyname,
                                        precio: parseInt(
                                            articulos[keyname]?.price
                                        )
                                    });
                                    toast.success(
                                        `Producto: '${articulos[keyname]?.name}' agregado al carrito! 🛒    Subtotal: ${this.props.cart.subtotal}`
                                    );
                                }}
                            >
                                Agregar
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    };
};

const mapStateToProps = state => ({
    articulos: state.products.list,
    cart: state.cart
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
