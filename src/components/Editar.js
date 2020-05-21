import React from "react";
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";


const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

const data = [
  ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
  ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
  ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
  ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
];


const Editar = () =>{
    return (

        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top mb-5 shadow">
            <div class="container">
                <a class="navbar-brand" href="/">Empresa</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Navegation">Volver</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">Logout</NavDropdown.Item>
      </NavDropdown>
                </ul>
                </div>
            </div>
            </nav>


        <MDBCard className="container"> 
            <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
                Administrar
            </MDBCardHeader>
            <MDBCardBody>
                <MDBTableEditable data={data} columns={columns} striped bordered />
            </MDBCardBody>
        </MDBCard>
        </header>

    );

 
};

export default Editar;
