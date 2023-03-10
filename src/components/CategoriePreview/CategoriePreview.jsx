import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../TopRated/Card'
import CardCategorie from "./CardCategorie"
export default function CategoriePreview() {
  const {id}=useParams()
  const image1="https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=600"
  const image2="https://images.pexels.com/photos/12307800/pexels-photo-12307800.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  const  image3="https://images.pexels.com/photos/15517793/pexels-photo-15517793.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  return (
    <div className='   mt-[88px] text-3xl flex justify-center items-center flex-col  pt-6 p-4 bg-white ' >
      <h1 className="text-3xl shadow-xl shadow-zinc lg:text-xl md:text-lg text-sm font-bold text-white-800 tracking-wide p-4 px-6 border-b-4 border-orange-500"> {id}</h1>  
      <div className=" pt-[10px]  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6 m-4 	 ">
     <CardCategorie images={[image1,image2,image3]}  />
     <CardCategorie  images={[image1,image2,image3]} />
     <CardCategorie  images={[image1,image2,image3]} />
     <CardCategorie  images={[image1,image2,image3]} />
     <CardCategorie  images={[image1,image2,image3]} />
     <CardCategorie  images={[image1,image2,image3]} />
     <CardCategorie  images={[image1,image2,image3]} />
     <CardCategorie  images={[image1,image2,image3]} />
     <CardCategorie  images={[image1,image2,image3]} />
     <CardCategorie  images={[image1,image2,image3]} />
     <CardCategorie  images={[image1,image2,image3]} />
     <CardCategorie  images={[image1,image2,image3]} />
     <CardCategorie  images={[image1,image2,image3]} />
      </div>

    </div>
  )
}
