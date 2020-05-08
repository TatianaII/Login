import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const Login = () => {
  return (
    <div className="center">
       <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <hr class="my-3"></hr>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input type="text" id="inputUser" className="form-control" placeholder="Nombre Usuario" required autofocus/>
                    <label for="inputUser">Usuario</label>
                  </div>
                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <label for="inputPassword">Contraseña</label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" for="customCheck1">Recordar contraseña</label>
                  </div>
                  <div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Ingresar</button>
                  </div>
                  <hr class="my-3"></hr>
                  <div className="text-center">
                  <Link to = {"/Registro"} > Registrarse </Link></div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to = {"/Registro"} > Registrarse </Link>
    </div>
  );
}

export default Login;
