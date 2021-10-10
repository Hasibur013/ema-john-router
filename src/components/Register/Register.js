import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create New Account</h2>
                <form onSubmit="">
                <input type="text" placeholder="Your Email" />
                <br /><br />
                <input type="password" placeholder="Password"/>
                <br /><br />
                <input type="password" placeholder="re-enter password" />
                <br />
                <br />
                <input type="submit" value="Submit" />
                </form>
                <br /><br />
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>
                    --------------Or---------------
                </div>
                <br />
                <button className="btn-regular"> Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;