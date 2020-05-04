import React, { Component } from "react";
import {
    removeItem,
    decreaseItem,
    increaseItem,
    resetCart
} from "../Redux/actions";
import { connect } from "react-redux";
import { returnImg } from "../../utils/returnImg";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { API_ENDPOINT } from "../../constants/endpoint";
import { toast } from "react-toastify";
import "./Carrito.scss";

class Carrito extends Component {
    state = {};
    componentDidMount() {}
    getDate() {
        const today = new Date();
        const date =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();
        const time =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
        const dateTime = date + " " + time;
        return dateTime;
    }
    async submitPago() {
        const { items, subtotal } = this.props.cart;
        const reqBody = {
            items,
            subtotal,
            iva: subtotal * 0.16,
            total: subtotal + subtotal * 0.16,
            date: this.getDate()
        };

        console.log(reqBody);

        const response = await fetch(`${API_ENDPOINT}/api/sale`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reqBody)
        });

        if (response) {
            const resToJson = await response.json();
            console.log(resToJson);
            if (resToJson.code === 201) {
                toast.success("Compra registrada con éxito! 😀");
                this.props.resetCart();
            }
        }
    }

    render() {
        const { items, subtotal } = this.props.cart;
        const { articulos } = this.props;
        return (
            <main id="carrito">
                <h1>Carrito</h1>
                <section className="item-grid">
                    {Object.keys(items).map((keyName, index) => {
                        return (
                            <div className="item-description" key={index}>
                                <img
                                    src={returnImg(articulos[keyName]?.img)}
                                    alt="Imagen"
                                />
                                <h2>{articulos[keyName]?.name}</h2>
                                <div className="qty-handler">
                                    <FiMinus
                                        onClick={async () => {
                                            await this.props.decreaseItem(
                                                keyName
                                            );
                                        }}
                                    />
                                    <p>{items[keyName]?.cantidad}</p>
                                    <FiPlus
                                        onClick={async () => {
                                            await this.props.increaseItem(
                                                keyName
                                            );
                                        }}
                                    />
                                </div>
                                <div className="precio">
                                    <p>Precio unitario:</p>
                                    <p>${items[keyName]?.precio}</p>
                                </div>
                                <FaTrashAlt
                                    onClick={async () => {
                                        await this.props.removeItem(keyName);
                                    }}
                                />
                            </div>
                        );
                    })}
                </section>
                <section className="totales">
                    <div className="total">
                        <h1>Subtotal: ${subtotal}</h1>
                        <h1>IVA: ${subtotal * 0.16}</h1>
                        <h1>Total: ${subtotal + subtotal * 0.16}</h1>
                    </div>
                    <button onClick={() => this.submitPago()}>Pagar</button>
                </section>
            </main>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: item_id => dispatch(removeItem(item_id)),
        increaseItem: item_id => dispatch(increaseItem(item_id)),
        decreaseItem: item_id => dispatch(decreaseItem(item_id)),
        resetCart: () => dispatch(resetCart())
    };
};

const mapStateToProps = state => ({
    articulos: state.products.list,
    cart: state.cart
});

export default connect(mapStateToProps, mapDispatchToProps)(Carrito);
