import React, {useContext} from 'react'
import UserContext from '../context/Usercontext'

function Profile() {
  const {user} = useContext(UserContext)
  if (!user) return <div className='text-red-400 font-mono font-medium text-xl'>Please Login!</div>
  return <div className='text-green-500'>
    Welcome <span className='text-white text-xl '>{user.username}</span>
  </div>
  
}
  export default Profile