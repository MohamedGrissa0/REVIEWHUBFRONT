import React,{useState} from 'react'
import BackupIcon from '@mui/icons-material/Backup';

export default function Setting() {
  const [username,setusername]=useState("")
  const [city,setcity]=useState("")
  const [country,setcountry]=useState("")
  const [email,setemail]=useState("")
  const [adress,setadress]=useState("")
  const [birthday,setbirthday]=useState("")
  const [phone,setphone]=useState("")
  const [zip,setzip]=useState("")
  const [organization,setorganization]=useState("")
  const [department,setdepartment]=useState("")
  const [currentpassword,setcurrentpassword]=useState("")
  const [confirmpassword,setconfirmpassword]=useState("")
  const [newpassword,setnewpassword]=useState("")
  const [filename,setfilename]=useState("")
  
  
  const handleUpdateInfo =async (e) => {
  
    e.preventDefault()
  }
    const handleUpdatePassword =async (e) => {
      
      e.preventDefault()
    }
 
  return (
    <div className='bg-zinc-50 px-10 pt-28 h-full pb-20 w-full' >
      <h1 className="font-semibold p my-4 text-3xl">User settings</h1>
      <div className=" 2 div flex justify-around ">
      <div className="bg-white h-max mr-4 flex justify-center flex-col items-center w-1/4 rounded-2xl shadow-xl px-5 py-4">
        <img className='object-cover h-20 w-20 rounded-2xl ' alt="profilePicture" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"></img> 
       <h1 className='text-2xl my-2 font-semibold'>Jese Leos</h1>
       <div class="flex   items-center justify-center bg-gray-100">
    <label class="flex flex-col items-center px-4 py-2 bg-white text-yellow-400 rounded-lg shadow-lg tracking-wide uppercase border border-yellow-600 cursor-pointer hover:bg-yellow-500 hover:text-white">
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Update profile picture</span>
        <input type='file' class="hidden" onChange={(e)=>{setfilename(e.target.files[0].name)}} ></input><h1>{filename} </h1>
    </label>
</div>
    </div>
    <div className="rightSide flex flex-col">
    <form onSubmit={handleUpdateInfo} className='bg-white rounded-xl px-6 py-6 w-max h-screen shadow-lg'>
      <h1 className="text-2xl mb-2 font-semibold">General information</h1>
      <div className="flex justify-between">
      <div className=" mr-6 pl-2">
        <h1 className="font-semibold">Username</h1>
        <input required value={username} onChange={(e)=>{setusername(e.target.value)}}  className="rounded-full w-80 bg-zinc-100   focus:border-t-transparent focus:outline-0 p-2 mt-1 mb-4" placeholder='username' type="text" name="username" />
        <h1 className="font-semibold">Country</h1>
        <input required value={country} onChange={(e)=>{setcountry(e.target.value)}} className="rounded-full w-80 bg-zinc-100   focus:border-t-transparent focus:outline-0  p-2 mt-1 mb-4" 
        placeholder='Country' type="text" name="country" />
        <h1 className="font-semibold">Address</h1>
        <input required value={adress} onChange={(e)=>{setadress(e.target.value)}}  className="rounded-full w-80 bg-zinc-100   focus:border-t-transparent focus:outline-0  p-2 mt-1 mb-4" 
        placeholder='Address' type="text" name="adress" />
        <h1 className="font-semibold">Phone Number</h1>
        <input required   value={phone} onChange={(e)=>{setphone(e.target.value)}} className="rounded-full w-80 bg-zinc-100   focus:border-t-transparent focus:outline-0  p-2 mt-1 mb-4"
         placeholder='+216xxxxxxxx' type="text" name="phone" />
       
        
      
      </div>
      <div className="">
        <h1 className="font-semibold">City</h1>
        <input  required   value={city} onChange={(e)=>{setcity(e.target.value)}}    className="rounded-full w-80 bg-zinc-100  focus:border-t-transparent focus:outline-0  p-2 mt-1 mb-4"
         placeholder='City' type="text" name="city" />
        <h1 className="font-semibold">Email</h1>
        <input required  value={email} onChange={(e)=>{setemail(e.target.value)}}  className="rounded-full w-80 bg-zinc-100   focus:border-t-transparent focus:outline-0  p-2 mt-1 mb-4" 
        placeholder='example@gmail.com' type="email" name="email" />
        <h1  className="font-semibold">Birthday</h1>
        <input  required  value={birthday} onChange={(e)=>{setbirthday(e.target.value)}} className="rounded-full w-80 bg-zinc-100   focus:border-t-transparent focus:outline-0  p-2 mt-1 mb-4" 
        placeholder='dd/mm/yyyy' type="text" name="birthday" />
        <h1 className="font-semibold">Zip/postal code</h1>
        <input  required  value={zip} onChange={(e)=>{setzip(e.target.value)}} className="rounded-full w-80 bg-zinc-100   focus:border-t-transparent focus:outline-0  p-2 mt-1 mb-4" 
        placeholder='Zip/postal code' type="text" name="zip" />
        
      
      </div>
     
      </div>
      <button class="bg-orangew flex items-center hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-600 hover:border-orange-500 rounded">
      <BackupIcon fontSize='small' className="mr-2 " />Save all
</button>
    </form>
    <form onSubmit={handleUpdatePassword} className="passworddiv bg-white rounded-xl px-6 py-6 w-full h-max mt-6 shadow-lg">
    <h1 className="text-2xl mb-2 font-semibold">Password information</h1>
      <div className="flex "><div  className="flex flex-col mr-4">
      <h1 className="font-semibold">Current password</h1>
        <input  required  value={currentpassword} onChange={(e)=>{setcurrentpassword(e.target.value)}}   className="rounded-full w-80 bg-zinc-100   focus:border-t-transparent focus:outline-0  p-2 mt-1 mb-4"
         placeholder='••••••••' type="password" name="currentpassword" />
        <h1 className="font-semibold">Confirm password</h1>
        <input required  value={confirmpassword} onChange={(e)=>{setconfirmpassword(e.target.value)}} className="rounded-full w-80 bg-zinc-100   focus:border-t-transparent focus:outline-0  p-2 mt-1 mb-4" 
        placeholder='••••••••' type="password" name="confirmpassword" />
        
      </div>
      <div>
      <h1 className="font-semibold">New password</h1>
        <input required  value={newpassword} onChange={(e)=>{setnewpassword(e.target.value)}} className="rounded-full w-80 bg-zinc-100   focus:border-t-transparent focus:outline-0  p-2 mt-1 mb-4"
         placeholder='••••••••' type="password" name="newpassword" />
       
      </div>
      </div>
         <button class="bg-orangew flex items-center justify-center w-max hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-600 hover:border-orange-500 rounded">
      <BackupIcon fontSize='small' className="mr-2 " />Save all
</button>
    </form>
 
    
    
    </div>
    
    
    
    </div>
    
    </div>
  )
}
