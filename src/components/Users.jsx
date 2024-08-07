import { collection, onSnapshot } from 'firebase/firestore'
import React,{useState,useEffect} from 'react'
import { Link, useFetcher } from 'react-router-dom'
import { db } from '../firebase-config'

function Users() {
  const [users, setusers] = useState([])
  useEffect(() => {
    onSnapshot(collection(db,'users'),snapshopt=>{
      setusers(snapshopt.docs)
    })
  }, [])
  
  return (
    <div className='users-main-container'>
      <ul>
        {
          users && users.map(user=>{
            const userdata=user.data();
            return <li><Link to={`/user/${userdata['email']}`}>{userdata['username']}</Link></li>
          })
        }
      </ul>
    </div>
  )
}

export default Users