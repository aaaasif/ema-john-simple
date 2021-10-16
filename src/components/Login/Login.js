import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div>
                <h2>Login</h2>
                <form onSubmit=''>
                    <input type="email" name='' id='' placeholder="Your Email" />
                    <br />
                    <input type="password" placeholder='Enter your password' name='' id='' />
                    <br />
                    <input type="submit" value='Submit' />
                </form>
                <p>New to Ema-john? <Link to="/register">Create Account</Link></p>
                <div>----------or----------</div>
                <button className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;