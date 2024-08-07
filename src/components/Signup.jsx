import React from 'react'
import { db } from '../firebase-config'
import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Signup({ setloggedin}) {

    const signup = async (e) => {
        e.preventDefault();
        const target = e.target;
        const username = target[0].value;
        const email = target[1].value;
        const password = target[2].value;
        const usersColl = collection(db, 'users')
        const user = await getDocs(query(usersColl, where('email', '==', email)))
        if (user.docs.length === 0) {
            const data = await addDoc(usersColl, { username, email, password })
            window.sessionStorage.setItem('email',email)
            setloggedin(true)
            const redirect = document.getElementById("redirect")
            redirect.click();
        } else window.alert("Email already exists.")
    }
    return (
        <div className="login-screen">
            <form className="login-container" onSubmit={signup}>
                <h1>Welcome!</h1>
                <input type="text" name='username' placeholder='Username' />
                <input type="email" name='email' placeholder='Email' required />
                <input type="password" name='password' placeholder='Password' required />
                <button type='submit'>Get Started</button>
            </form>
            <Link to="/" id="redirect">redirect</Link>
        </div>
    )
}

export default Signup