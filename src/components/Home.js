import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const Home = () => {

    return (
    
      <div className="center">
         <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Bienvenido</h5>
                  <form className="form-signin">
                  <div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" ><Link to = {"/Login"} > Ingresar</Link></button>
                    </div>
                        <hr className="my-2"></hr>
                    <div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" ><Link to = {"/Registro"} > Registrarse</Link></button>
                    </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }


  
  export default Home;