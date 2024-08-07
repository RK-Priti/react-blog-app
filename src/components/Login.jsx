import React from 'react'
import { db } from '../firebase-config'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function  Login({setloggedin}) {

    const login=async(e)=>{
        e.preventDefault();
        const target=e.target;
        const email=target[0].value;
        const password=target[1].value;
        const usersColl=collection(db,'users')
        const user=await getDocs(query(usersColl,where('email','==',email)))
        if(user.docs.length===1){
            const userdata=user.docs[0].data()
            if(userdata['password']===password){
                window.sessionStorage.setItem('email',email)
                setloggedin(email)
                const redirect=document.getElementById("redirect")
                redirect.click();
            }else window.alert('Wrong Password')
        }else window.alert("Email does not exist! Please signup")
    }
    return (
        <div className="login-screen">
            <form className="login-container" onSubmit={login}>
                <h1>Welcome!</h1>
                <input type="email" name='email' placeholder='Email' required/>
                <input type="password" name='password' placeholder='Password' required/>
                <button type='submit'>Get Started</button>
            </form>
            <Link to="/" id="redirect">redirect</Link>
        </div>
    )
}

export default Login