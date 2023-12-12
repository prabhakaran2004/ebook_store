import React from 'react';
import './Welcome.css';
class Welcome extends React.Component{
    render(){
        return(
            <><div className='wrapper'>
                <><><><><div className="l1">
                <p>INDIA'S LARGEST BOOKSTORE</p>
            </div>
                <div className="l2">
                    <p>Browse through variety of genres such as Fiction, Classics, Children's Books ,Textbooks ,and much more</p>
                </div></>
                <div className='l3'>
                    <p></p>
                </div></>
                <div>
                    <button id='login'>
                        <a href="Login.jsx">
                            Login
                        </a></button>
                </div></>
                <div className='sign'>
                    <button id='signup'>Sign Up</button>
                </div></>
                </div></>
        );
    }
}

export default Welcome;