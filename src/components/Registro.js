import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';


const Registro = () => {
    return (
            <header className="masthead">
                <div className="center">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-3">
                            <div className="card-body">
                            <h5 className="card-title text-center">Registro</h5>
                            <form className="form-signin">
                                <div>
                                    <hr class="my-3"></hr>

                                </div>
                                <div class="form-label-group">
                                    <input type="text" id="inputName" className="form-control" placeholder="Nombre" required autofocus/>
                                    <label for="inputName">Nombre</label>
                                </div>
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email" required autofocus/>
                                    <label for="inputEmail">Email</label>
                                </div>
                                <div className="form-label-group">
                                    <input type="text" id="inputUser" className="form-control" placeholder="Usuario" required autofocus/>
                                    <label for="inputUser">Usuario</label>
                                </div>
                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required/>
                                    <label for="inputPassword">Contraseña</label>
                                </div>
                                <div className="form-label-group">
                                    <input type="password" id="inputRepPassword" className="form-control" placeholder="RepContraseña" required/>
                                    <label for="inputRepPassword">Repite la Contraseña</label>
                                </div>
                                    <hr className="my-3"></hr>
                                <div className = "form-label-group">
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="Cancel">Cancelar</button></div>
                                <div className = "form-label-group">
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="Regist">Registrar</button></div>
                                <div className="text-center spc-10">
                            <Link to = {"/Login"} > Ya tengo un usuario </Link></div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
  }
  
  export default Registro;
