import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
  
export default class NotesList extends Component {
    render() {
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Somos un pequeño grupo de ingenieroa de software:</h1><hr></hr>
                        <h2>Juan Sebastian Esquivel Plazas</h2>
                        <p>Desarrollador Frontend</p>
                        <h2>Sebastian Fajardo Garzón</h2>
                        <p>Desarrollador Frontend</p>
                        <h2>Stiven Garces Sanchez</h2>
                        <p>Desarrollador backend</p>
                        <h2>Santiago Esteban Lozano Rodríguez</h2>
                        <p>desarrollador backend</p>
                    </div>
                </div>
            </div>
        );
    }
}