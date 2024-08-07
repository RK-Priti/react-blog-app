import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { onSnapshot, collection, query, where } from 'firebase/firestore'
import { db } from '../firebase-config'
import BlogCard from './BlogCard'

function Profile() {
    const [blogs, setblogs] = useState([])
    useEffect(() => {
        onSnapshot(query(collection(db, 'blogs'), where('author', '==', window.sessionStorage.getItem('email'))), snapshot => {
            console.log(snapshot.docs)
            setblogs(snapshot.docs)
        })
    }, [])
    return (<>
        <div className="user-info-container">
            <h1>
                Your Blogs
            </h1>
        </div>
        <div className="user-blogs blogs-container">
            {
                blogs && blogs.map(blog => {
                    return <BlogCard blog={blog.data()} />
                })
            }
        </div>
        <Link to='/addblog'><button className='add-blog-btn'>+ Add Blog</button></Link>
    </>)
}

export default Profile