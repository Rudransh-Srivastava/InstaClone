import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="mycard">
        <div className="card auth-card input-field ">
            <h2 className="Insta">Instagram</h2>
            <input type='text' placeholder='Name'></input>
            <input type='text' placeholder='Email'></input>
            <input type='text' placeholder='Password'></input>
            <button class="btn waves-effect waves-light #29b6f6 light-blue lighten-1" >Register
            </button>
            <h6>Already have an account?  <Link to="/signin" className="facilitate" >Signin</Link></h6>
        </div>
        </div>
    )
}

export default Signup;