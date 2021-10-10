import React from 'react';
import { Link , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hoooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInWithGoogle}=useAuth();
    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from || '/shop';

    const handleGoogleLogin= () =>{
        signInWithGoogle()
        .then( result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                </form>
                <p> Are you new User? <Link to="/register">Create Account</Link></p>
                <div>
                    --------------Or---------------
                </div>
                <br />
                <button onClick={handleGoogleLogin} className="btn-regular"> Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;