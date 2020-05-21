import React from "react";
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';


const Navegation = () =>{
    return (
        <header className="masthead ">  

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top mb-5 shadow">
            <div class="container">
                <a class="navbar-brand" href="/">Empresa</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Editar">Editar</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">Logout</NavDropdown.Item>
      </NavDropdown>
                </ul>
                </div>
            </div>
            </nav>


            <div className="container">
                <div class="overlay"></div>
                <div className="card border-0 shadow my-10">
                    <div className="card-body p-1">
            <Carousel>                
                <Carousel.Item >
                    <img 
                    className="d-block w-100"
                    src="https://images8.alphacoders.com/926/thumb-1920-926492.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/fe/9c/6b/fe9c6be5759c12298688b2dd97cd5fd1.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://s1.1zoom.me/b5050/596/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1920x1080.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            </div>


            </div>
            <section class="my-3">
            <div class="container">
              <div class="row">
                <div class="col-md-12 mx-auto">
                  <p>The HTML5 video element uses an mp4 video as a source. Change the source video to add in your own background! The header text is vertically centered using flex utilities that are build into Bootstrap 4.</p>
                  <p>The overlay color can be changed by changing the <code>background-color</code> of the <code>.overlay</code> class in the CSS.</p>
                </div>
              </div>
            </div>
          </section>
            </div>     
                        


            </header>




    );
};


export default Navegation;
