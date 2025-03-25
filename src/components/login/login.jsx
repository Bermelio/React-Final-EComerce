import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useState } from 'react';
import './login.css';

export default function Login(){

const [user, setUser] = useState(null);

onAuthStateChanged(auth, (user) => {
    if (user) {
        setUser(user)
    } else {
        setUser(null)
    }
});

    return (
        <>
            <section className="loginContainer">
                <h1 className="title">Login 🔑</h1>
                <div className="conteinerDet">
                    <input type="text" name="text" className="input" placeholder="Write your email"/>
                    <input type="Password" name="text" className="input" placeholder="Write a password"/>
                </div>
                <div className="text">
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
                <div>
                    <a className="btn">Login</a>
                </div>
            </section>
        </>
    )
}