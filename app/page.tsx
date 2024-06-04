"use client"
import { UserAuth } from "./context/UserAuth.jsx"
interface UserDetails  {
  user: any
}

const page = () => {
  const { user, googleSignIn, logOut, loading }  = UserAuth();
  if(loading) return <>loading</>
  if(!user) return (
    <>
      
      <button onClick={async() => {googleSignIn()}}> login </button>
    </>
  )
  return (
    <>
      <button onClick={logOut}>logout</button>
    </>
  )
}

export default page