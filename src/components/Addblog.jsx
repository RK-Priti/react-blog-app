import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase-config'

function Addblog() {
  const [title, settitle] = useState('')
  const [blog, setblog] = useState('')
  const [imgUrl, setimgUrl] = useState('')
  const addBlog=async()=>{
    try{
      const collRef=collection(db,'blogs')
      await addDoc(collRef,{title,blog,date : Date(),author: window.sessionStorage.getItem('email'),imgUrl})
      setblog('')
      setimgUrl('')
      settitle('')
      window.alert("Blog added successfully")
    }catch(e){
      window.alert(e)
    }
  }
  return (
    <div className="addblog-container">
      <h1>Add Your Blog</h1>
      <input type="text" onChange={e=>setimgUrl(e.target.value)} value={imgUrl} placeholder='Blog Image Url'/>
      <input type="text" onChange={e=>settitle(e.target.value)} value={title} placeholder='Title'/>
      <textarea name="" id="" value={blog} onChange={e=>setblog(e.target.value)} placeholder='Blog'></textarea>
      <button onClick={addBlog}>Add Blog</button>
    </div>
  )
}

export default Addblog