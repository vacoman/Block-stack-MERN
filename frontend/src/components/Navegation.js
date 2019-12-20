import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navegation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                    <img src="https://procesadordetexto.files.wordpress.com/2016/05/bloc-de-notas1.png" width="30" height="30" class="d-inline-block align-top" alt="icono"/>
                    Block
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-light" to="/">Notas</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-light" to="/creanotas">Crear Notas</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-light" to="/galeria">Galeria</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-light" to="/somos">Quienes somos</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-light" to="/entrar">Entrar</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="btn btn-outline-success" to="/user">Crear Usuario</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}