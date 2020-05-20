import React from "react";
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';


const Editar = () =>{
    return (

        <header className="masthead-1">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Prueba navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav classNameName="mr-auto"></Nav>
            <Nav>
            <NavDropdown title="Configuración" id="collasible-nav-dropdown">
                <NavDropdown.Item href="./Navegation">Inicio</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">LogOut</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

            
            <div className="container" >
                <div className="row align-items-center">
                <div className="col-12 text-center"></div>
                <div className="container">
                <div className="card border-0 shadow my-5">
                    <div className="card-body p-5">
                    <h2 classNameName="font-weight-light">Administrar Usuarios</h2>
                    <p classNameName="lead">
                        <div classNameName="spc-20"></div>
                    <Table striped bordered hover size="sm" classNameName="justify-content-md-center">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Mail</th>
                                <th>Empresa</th>
                                <th>Administrar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>
                                <Button variant="primary" size="sm">Editar</Button>
                                <Button variant="danger" size="sm">Eliminar</Button>
                                </td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>
                                <Button variant="primary" size="sm">Editar</Button>
                                <Button variant="danger" size="sm">Eliminar</Button>
                                </td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                <Button variant="primary" size="sm">Editar</Button>
                                <Button variant="danger" size="sm">Eliminar</Button>
                                </td>
                                </tr>
                            </tbody>
                        </Table>
                    </p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </header>

    );

 
};

export default Editar;
