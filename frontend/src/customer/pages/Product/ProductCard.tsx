import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { red, teal } from '@mui/material/colors';

const images=[
  "https://cdn.hstatic.net/products/1000296652/lt271-6_0707c3fd350e4d118ecf366be8787012_1024x1024.png",
  "https://cdn.hstatic.net/products/1000296652/lt271-9_e9cb20c2e4a14da8b9677e0b9f1ada6b_1024x1024.png",
  "https://cdn.hstatic.net/products/1000296652/lt271-8_737c08ca9ba142319a8f650194c3f027_1024x1024.png",
  "https://cdn.hstatic.net/products/1000296652/lt271-7_0269cbcccdce41f587e1d3337bcd4324_1024x1024.png"
];

const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered]=useState(false);

  /*
 * Khi người dùng hover vào sản phẩm:
 * - Tự động chuyển ảnh mỗi 1 giây
 * - Dừng chuyển ảnh khi rời chuột
 */
  useEffect(() => {

    let interval:any
    if(isHovered) {
      interval=setInterval(() =>{
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    }
    else if(interval) {
      clearInterval(interval);
      interval=null;
    }
    return () => clearInterval(interval);
  },[isHovered])
  
  return (
    <>
    <div className='group px-4 relative'>
      <div className='card'
      /**khi lia chuot vao thi anh chuyen dong, bo chuot ra thi anh dung */
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >

        {images.map((item, index) =>  
        <img 
        key={index}
        className='card-media object-top'
        src={item}
        alt=""
        style={{transform: `translateX(${(index - currentImage) * 100}%)`}}
        />)}

{/* Mục yêu thích và bình luận trên card sản phẩm */}

        {isHovered &&  <div className='indicator flex flex-col items-center space-y-2'>
          <div className='flex gap-3'>
            <Button variant='contained' color='secondary'>
              <Favorite sx={{color:red[500]}}/>

            </Button>
            <Button variant='contained' color='secondary'>
              <ModeComment sx={{color:red[500]}}/>

            </Button>
          </div>
        </div>
        }

      </div>
      <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
        <div className='name'>
          <h1>Laptop</h1>
          <p>Laptop HP</p> 

        </div>
        <div className='price flex items-center gap-3'>
          <span className='font-sans text-gray-800'>
            400₫
          </span>
          <span className='thin-line-through text-gray-400'>
            900₫
          </span>
          <span className='text-primary-color font-semibold'>
            60%
          </span>

        </div>
      </div>
    </div>
    </>
  )
}

export default ProductCard