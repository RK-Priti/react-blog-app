import React,{useState,useEffect} from 'react'
import BlogCard from './BlogCard'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import {db}from '../firebase-config';
import { useParams } from 'react-router-dom';

function Blogs() {
  const [blogs, setblogs] = useState([])
  const {email}=useParams()
  useEffect(() => {
    const collRef=collection(db,'blogs')
    onSnapshot(email?query(collRef,where('author','==',email)):collRef,snapshot=>{
      console.log(snapshot.docs)
      setblogs(snapshot.docs)
    })
  }, [email])
  
  return (
    <div className='blogs-container'>
      {
        blogs && blogs.map(blog=>{
          return <BlogCard blog={blog.data()}/>
        })
      }
      {
        blogs.length===0 && <h1>No Blogs</h1>
      }
    </div>
  )
}

export default Blogs