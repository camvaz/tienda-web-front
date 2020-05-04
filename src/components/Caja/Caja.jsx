import React, { Component } from "react";
import { API_ENDPOINT } from "../../constants/endpoint";
import "./Caja.scss";
export default class Caja extends Component {
    state = {
        ventas: {},
        total: 0,
        subtotal: 0,
        iva: 0
    };

    componentDidMount() {
        this.loadCaja();
    }

    getNumbers() {
        let subtotal = 0;
        let iva = 0;
        let total = 0;
        const { ventas } = this.state;
        Object.keys(ventas).forEach((keyname, index) => {
            subtotal += ventas[keyname].subtotal;
            iva += ventas[keyname].iva;
            total += parseInt(ventas[keyname].total);
        });

        this.setState({
            subtotal,
            iva,
            total
        });
    }

    async loadCaja() {
        const response = await fetch(`${API_ENDPOINT}/api/sale`);

        if (response) {
            const resToJson = await response.json();
            await this.setState({ ventas: resToJson.data });
            this.getNumbers();
        }
    }
    render() {
        const { ventas, subtotal, total, iva } = this.state;
        return (
            <main id="caja">
                <h1>Ingresos</h1>
                <section className="numeros">
                    <h2>Subtotales: ${subtotal}</h2>
                    <h2>Impuestos: ${iva}</h2>
                    <h2>Totales: ${total}</h2>
                </section>
                <h1>Historial</h1>
                <section className="historial">
                    {Object.keys(ventas).map((keyname, index) => (
                        <div className="historia" key={index}>
                            <h2>{index + 1}</h2>
                            <p>Marca de tiempo: {ventas[keyname].date}</p>
                            <p>Subtotal ${ventas[keyname].subtotal}</p>
                            <p>Iva ${ventas[keyname].iva}</p>
                            <p>Total ${ventas[keyname].total}</p>
                        </div>
                    ))}
                </section>
            </main>
        );
    }
}
