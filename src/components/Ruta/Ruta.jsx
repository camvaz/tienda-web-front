import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { FaReact, FaNodeJs, FaDigitalOcean } from "react-icons/fa";
import { DiMongodb, DiNginx } from "react-icons/di";
import { GiRolledCloth } from "react-icons/gi";

const Navbar = styled.div`
    display: flex;
    align-items: center;
    padding: 1.7rem 1.5rem;
    svg {
        width: 30px;
        height: 30px;
        margin-right: 20px;
    }
    .icons {
        margin-left: auto;
        display: flex;
        svg {
            width: 30px;
            height: 30px;
            margin: 0 10px;
        }
    }
`;

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 25% 75%;
`;

const SideMenu = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 100px;
        width: 80%;
        a {
            font-size: 18px;
            width: 100%;
            text-transform: uppercase;
            margin: 10px auto;
            color: #000000;
            &.main {
                font-weight: 600;
            }
        }
        .sublinks {
            display: flex;
            flex-direction: column;
            margin-left: 25px;
        }
    }
`;

export default class Ruta extends Component {
    render() {
        const { path, exact, component } = this.props;
        return (
            <Route
                path={path}
                exact={exact}
                render={props => (
                    <>
                        <Navbar>
                            <GiRolledCloth />
                            <h1>Dope</h1>
                            <div className="icons">
                                <p>Hecho con:</p>
                                <FaNodeJs />
                                <DiMongodb />
                                <FaReact />
                                <FaDigitalOcean />
                                <DiNginx />
                            </div>
                        </Navbar>
                        <MainWrapper>
                            <SideMenu>
                                <div className="links">
                                    <Link className="main" to="/">
                                        Inicio
                                    </Link>

                                    <Link className="main" to="/categorias">
                                        Categorias
                                    </Link>
                                    <div className="sublinks">
                                        <Link to="/categoria/ropa">Ropa</Link>
                                        <Link to="/categoria/accesorios">
                                            Accesorios
                                        </Link>
                                        <Link to="/categoria/calzado">
                                            Calzado
                                        </Link>
                                        <Link to="/categoria/arte">Arte</Link>
                                    </div>
                                    <Link className="main" to="/cart">
                                        Carrito
                                    </Link>
                                    <Link to="/caja" className="main">
                                        Caja
                                    </Link>
                                </div>
                            </SideMenu>
                            {React.createElement(component, props)}
                        </MainWrapper>
                    </>
                )}
            />
        );
    }
}
