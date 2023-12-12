import React from 'react';
import './Login.css';


class Login extends React.Component{
    render(){
        return(
            <div className='wrapper'>
                <div id="welcome">
                    <br></br>
                    <h1 id="welcome_txt">Welcome back to</h1><h1 id="title">E-STORE</h1><br></br>
                </div>
                <div>
                    <h3 id="email_text">
                        Email
                    </h3>
                    <input type="email" placeholder="Email" id="text">
                    </input><br></br>
                    <h3 id="password_text">
                        Password
                    </h3>
                    <input type="password" placeholder="Password" id="text">
                    </input><br></br><br></br>
                    <h4 id="forgot_pass">Forgot your password?</h4>
                    <button id="login_button">Login</button><br></br><br></br><br></br>
                    <hr className='hr'></hr>
                    <h3 id="sign_msg">New to QuantumQuill?, Try Signing in </h3>
                    <button id="login_button1">Sign up</button>
                </div>
            </div>
        );
    }
}
export default Login;
