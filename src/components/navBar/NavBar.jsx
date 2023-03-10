import React,{useState,useContext} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';
export default function NavBar() {
  const {user}=useContext(AuthContext);
  const[isClick,setIsClick]=useState(false)
  return (
    <div className=' fixed top-0 z-[999]  w-full'>
      
<header class="bg-white">
  <div class="container mx-auto px-4 py-4 flex justify-around items-center">


    <Link to="/" class="md:w-48 flex-shrink-0">
      <h1>REVIEWHUB</h1>
    </Link>
    <div className='flex '>
  <div className="flex w-full flex-row   max-w-xs xl:max-w-lg 2xl:max-w-2xl xl:flex items-center justify-between ">
    <div class=" bg-gray-100 rounded-md  flex items-center">
    <select
  class="bg-transparent xl:block hidden uppercase font-bold text-sm p-4 mr-4"
  onChange={(event) => {
    const value = event.target.value;
    if (value === 'hotels') {
      window.location.href = '/categorie/hotel';
    } else if (value === 'malls') {
      window.location.href = '/categorie/Malls';
    } else if (value === 'cafes') {
      window.location.href = '/categorie/cafes';
    } else if (value === 'restaurants') {
      window.location.href = '/categorie/restaurants';
    } else if (value === 'amusement-parks') {
      window.location.href = '/categorie/AmusementParks';
    }
  }}
>
  <option value="">all categories</option>
  <option value="hotels">Hôtels</option>
  <option value="malls">Malls</option>
  <option value="cafes">cafes</option>
  <option value="restaurants">Restaurants</option>
  <option value="amusement-parks">Amusement Parks</option>
</select>

      <input class="disabled:resize-none w-28 xl:w-full focus:border-t-transparent focus:outline-0 border-gray-300 bg-transparent font-semibold text-md py-4 px-2 xl:p-4" type="text" placeholder="I'm searching for ..." />
      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ml-auto h-5 xl:h-12 px-4 text-gray-500 svg-inline--fa fa-search fa-w-16 fa-9x"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
    
    </div>
       
    </div>

    </div>

  
      
   
        
   
    <div className=" flex items-center  ">
        <Link to="/favorite" class="relative">
            <div class="absolute -top-1 right-0 z-10 bg-orange-500 text-xs font-bold px-1 py-0.5 rounded-lg text-white">3</div>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-9 lg:h-10 p-2 text-gray-500 svg-inline--fa fa-heart fa-w-16 fa-9x"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
          </Link>
        {
          user?<div  class="relative  ml-2">
          <svg onClick={()=>{setIsClick(!isClick)}}  aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="cursor-pointer h-9 lg:h-10  p-2 text-gray-500 svg-inline--fa fa-user fa-w-14 fa-9x"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
       <div  onMouseEnter={()=>{setIsClick(true)}} onMouseLeave={()=>{setIsClick(false)}} className={isClick?"bg-white shadow-2xl border-t-2  border-b-2  rounded-2xl text-gray-600  pt-4 flex flex-col absolute right-1 h-40 w-60":"hidden"}>
       <Link className="flex justify-between border-b-2 h-full  pb-2 px-4" to="/setting"> <div><h1>Signed in as</h1>
        <h1 className="font-semibold max-w-sm text-black">{user.username}</h1></div>
        <div className='rounded-full bg-orangew p-1'><img className="h-10 w-10 object-cover rounded-full  " src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=417&q=80"></img>
        </div></Link>
        <Link className=" border-b-2 py-2 px-4" to="/setting"> 
        <h1 className=" text-black">Setting</h1></Link>
        <Link className="  py-2 px-4" to="/logout"> 
        <h1 className=" text-black">Sign out</h1></Link>
       </div>
        </div>:
        <div>
  <div class="hidden md:flex lg:flex xl:flex   items-center space-x-1">
      <Link to="/login" class="py-5 h1 px-3">Login</Link>
      <Link to="/register" class="py-2 h1 px-3 bg-orangew hover:bg-orange-300 text-white hover:text-orange-800 rounded transition duration-300">Register</Link>
    </div>
    <Link to="/login" class="cursor-pointer flex items-center md:hidden lg:hidden xl:hidden ml-2" >
          <svg  aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-9 lg:h-10  p-2 text-gray-500 svg-inline--fa fa-user fa-w-14 fa-9x"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
        </Link>
    </div>
        }  
       
       
       
        </div>
    
        
          
   
  </div>
  
  <hr></hr>
</header>
    </div>
  )
}