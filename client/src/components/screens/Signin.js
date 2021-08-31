import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className="mycard">
        <div className="card auth-card input-field ">
            <h2 className="Insta">Instagram</h2>
            <input type='text' placeholder='email'></input>
            <input type='text' placeholder='password'></input>
            <button class="btn waves-effect waves-light #29b6f6 light-blue lighten-1" >Login
            </button>
            <h6>Don't have an account?  <Link to="/signup" className="facilitate" >Register</Link></h6>
        </div>
        </div>
    )
}

export default Signin;