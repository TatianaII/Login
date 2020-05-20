import React from "react";
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navegation = () =>{
    return (
        <header className="masthead-1">  
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Prueba navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav classNameName="mr-auto"></Nav>
                        <Nav>
                            <NavDropdown title="Configuración" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="./Editar">Edit</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                <NavDropdown.Item href="./">LogOut</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            <div className="container" >
                <div className="row align-items-center">
                    <div className="abs-center col-12 text-center">
                        <h1 className="font-weight-light">Pagina Principal</h1>
                    </div>
                </div>
            </div>
        </header>

    );
};


export default Navegation;
