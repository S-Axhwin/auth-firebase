"use client"
import { Button } from "@/components/ui/button";
import { UserAuth } from "../context/UserAuth.jsx"
import { Input } from "@/components/ui/input";

interface UserDetails  {
  user: any
}

const page = () => {
  const { user, googleSignIn, logOut, loading }  = UserAuth();
  console.log(user);
  
  if(loading) return <>loading</>
  if(!user) return (
    <div className="h-screen w-screen grid place-items-center">
      <Button onClick={async() => {googleSignIn()}}> login </Button>
    </div>
  )
  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="flex flex-col justify-center h-fit overflow-hidden gap-3 border-red-300 border-1 p-3 rounded-lg">
      <div className="flex justify-center">
      <img className="rounded-[50%]" src={user.photoURL} width={"50"} height={50} alt="profile image"/>
      </div>
      <Input disabled value={user.displayName} />
      <Button onClick={logOut}>logout</Button>
      </div>
    </div>
  )
}

export default page