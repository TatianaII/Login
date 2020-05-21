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
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" href="./Login" >Login</button>
                    </div>
                        <hr className="my-2"></hr>
                    <div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" href="./Registro" >Registro</button>
                    </div>
                    </form>

                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to = {"/Navegation"} >The easy way (MainPage)</Link>
      </div>
    );

  }


  
  export default Home;