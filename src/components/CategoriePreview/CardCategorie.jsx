import React,{useState} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


export default function CardCategorie(props) {
  const settings = {
    dots:true,
    arrows: false,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };
  
  
  return (<div
   className="relative rounded-lg card w-[280px] h-max bg-white shadow-2xl ring-5 ring-black-600 transition-colors duration-300 hover:bg-gray-100">
    <div className='absolute z-[999]  top-2 right-2 flex bg-white  rounded-full px-2 py-2 cursor-pointer'>  <FavoriteBorderOutlinedIcon  fontSize="medium" /></div>
     <Slider {...settings}>
      {props.images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
      <div className="card-body h-[1/2] flex justify-between">
        <div className="bg-bleu-500 flex justify-between items-center">
          <h3 className="card-title text-base text-black">Shoes!</h3>
          <div class="flex flex-row  ">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-orange-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p class="ml-2 px-1 text-sm font-bold text-gray-600 dark:text-black">4.95</p>
            <a href="#" class="text-sm font-medium text-gray-900 dark:text-black">
              73 reviews
            </a>
          </div>
        </div>
        <p className="text-base flex items-center ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ab amet esse odio, natus
          temporibus laboriosam provident facil
        </p>
      </div>
      </div>


  );
}