import React, { useState } from 'react'
import { Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon          from '@mui/icons-material/Menu'
import SearchIcon        from '@mui/icons-material/Search'
import Avatar            from '@mui/material/Avatar'
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material'
import CategorySheet from './CategorySheet'
import { useNavigate } from 'react-router-dom'

// The 7 navbar categories
const NAV_CATEGORIES = [
  'Laptop',
  'Core',
  'Case',
  'Monitor',
  'Accessories',
  'Routers',
  'Software',
]

const Navbar = () => {
  const theme   = useTheme()
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'))

  // Which category is currently hovered (null = none → dropdown hidden)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const navigate=useNavigate()

  return (
    // Wrap in a container that tracks mouse leave for the whole navbar+dropdown
    <Box
      onMouseLeave={() => setActiveCategory(null)}
      sx={{ position: 'relative', zIndex: 100 }}
    >
      {/*Top bar */}
      <div className='flex items-center justify-between px-5 lg:px-20 h-[70px] border-b bg-white'>

        {/* Left: logo + category links */}
        <div className='flex items-center gap-9'>
          <div className='flex items-center gap-2'>
            {!isLarge && (
              <IconButton>
                <MenuIcon />
              </IconButton>
            )}
            <h1 onClick={()=>navigate("/")} className='logo cursor-pointer text-lg md:text-2xl text-primary-color'>
              E-Shop
            </h1>
          </div>

          {/* Category list — only show on large screens */}
          {isLarge && (
            <ul className='flex items-center font-medium text-gray-800'>
              {NAV_CATEGORIES.map((item) => (
                <li
                  key={item}
                  onMouseEnter={() => setActiveCategory(item)}
                  className={`
                    cursor-pointer mainCategory hover:text-primary-color
                    hover:border-b-2 h-[70px] px-4 border-primary-color
                    flex items-center transition-colors
                    ${activeCategory === item ? 'text-primary-color border-b-2' : ''}
                  `}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right: search / auth / cart */}
        <div className='flex gap-1 lg:gap-6 items-center'>
          <IconButton>
            <SearchIcon />
          </IconButton>

          {true ? (
            <Button onClick={()=>navigate("account/orders")}
            className='flex items-center gap-2'>
              <Avatar
                sx={{ width: 29, height: 29 }}
                src='https://api.dicebear.com/7.x/adventurer/svg?seed=Felix'
              />
              <h1 className='font-semibold hidden lg:block'>Name</h1>
            </Button>
          ) : (
            <Button variant='contained'>Login</Button>
          )}

          <IconButton>
            <FavoriteBorder className='text-red-500' sx={{ fontSize: 29 }} />
          </IconButton>
          <IconButton onClick={()=>navigate("/cart")}>
            <AddShoppingCart className='text-red-500' sx={{ fontSize: 29 }} />
          </IconButton>

          {isLarge && (
            <Button 
            onClick={()=>navigate("/become-seller")}
            startIcon={<Storefront />} variant='outlined'>
              Become Seller
            </Button>
          )}
        </div>
      </div>

      {/*Dropdown sheet */}
      {activeCategory && (
        <div
          className='absolute left-0 right-0'
          // Keep dropdown open while hovering over it
          onMouseEnter={() => setActiveCategory(activeCategory)}
        >
          <CategorySheet activeCategory={activeCategory} />
        </div>
      )}
    </Box>
  )
}

export default Navbar