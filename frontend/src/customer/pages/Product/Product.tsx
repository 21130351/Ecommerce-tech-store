import React, { useEffect, useState } from 'react'
import FilterSection, { FilterState } from './FilterSection'
import ProductCard from './ProductCard'
import {
  Box, Divider, Drawer, FormControl, InputLabel,
  MenuItem, Pagination, Select, useMediaQuery, useTheme,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { FilterAlt } from '@mui/icons-material'
import store, { useAppDispatch, useAppSelector } from '../../../State/Store'
import { fetchAllProducts } from '../../../State/customer/ProductSlice'
import { useParams, useSearchParams } from 'react-router-dom'

// Default / empty filter state 
const EMPTY_FILTERS: FilterState = {
  prices:    [],
  brands:    [],
  discounts: [],
}

const Product = () => {
  const theme   = useTheme()
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'))

  const [sort,          setSort]          = useState<string>('')
  const [filters,       setFilters]       = useState<FilterState>(EMPTY_FILTERS)
  const [drawerOpen,    setDrawerOpen]    = useState(false)   // mobile filter drawer
  const [page, setPage] =useState(1);
  const dispatch=useAppDispatch()
  const [searchParam, setSearchParams] = useSearchParams();
  const {category} = useParams();
  const {product}=useAppSelector((store=> store))

  // Handlers 
  const handleSortChange = (event: any) => setSort(event.target.value)

  const handlePageChange =(value:number) => {
    setPage(value)
  }

  useEffect(()=>{
    // Lấy thông tin khoảng giá từ URL (Ví dụ: "100-500" sẽ tách thành minPrice = "100", maxPrice = "500")
    // Nếu trên URL không có trường "price", nó sẽ trả về mảng rỗng []
    const [minPrice, maxPrice] = searchParam.get("price")?.split("-") || [];
    const brand=searchParam.get("brand")
    const minDiscount=searchParam.get("discount")?Number(searchParam.get("discount"))
    :undefined;
    const pageNumber=page-1;
    //  Đóng gói tất cả các tiêu chí lựa chọn trên thành một bộ lọc duy nhất (Object)
    const newFilter={
      brand:brand || "",
      minPrice : minPrice?Number(minPrice):undefined,
      maxPrice : maxPrice?Number(maxPrice):undefined,
      minDiscount,
      pageNumber
    };
   // Gửi bộ lọc này lên Server thông qua Redux Action để lấy danh sách sản phẩm mới về
    dispatch(fetchAllProducts({newFilter}))
  },[category, searchParam]) // CODE SẼ TỰ ĐỘNG CHẠY LẠI: Mỗi khi đổi danh mục (category) hoặc thay đổi bộ lọc trên URL (searchParam)

  const handleClearAll = () => setFilters(EMPTY_FILTERS)

  //  Filter panel (shared between desktop sidebar & mobile drawer) 
  const filterPanel = (
    <FilterSection
      filters={filters}
      onChange={setFilters}
      onClearAll={handleClearAll}
    />
  )

  return (
    <div className='mt-10'>
      {/* Page title */}
      <h1 className='text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase'>
        Laptop HP
      </h1>

      <div className='lg:flex'>
        {/* Desktop sidebar*/}
        <section className='hidden lg:block w-[20%]'>
          {filterPanel}
        </section>

        {/*Right panel  */}
        <div className='w-full lg:w-[80%] space-y-5'>
          {/* Toolbar */}
          <div className='flex justify-between items-center px-9 h-[40px]'>
            {/* Mobile filter button */}
            {!isLarge && (
              <IconButton onClick={() => setDrawerOpen(true)}>
                <FilterAlt />
              </IconButton>
            )}

            {/* Sort dropdown */}
            <FormControl size='small' sx={{ width: '200px', ml: 'auto' }}>
              <InputLabel>Sort</InputLabel>
              <Select
                value={sort}
                label='Sort'
                onChange={handleSortChange}
              >
                <MenuItem value='price_low'>Price: Low → High</MenuItem>
                <MenuItem value='price_high'>Price: High → Low</MenuItem>
                <MenuItem value='discount'>Best Discount</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Divider />

      
          {/* Product grid */}
          <section className='products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center'>
            {product.products.map((item, i) => (
              <ProductCard key={i} item={item} />
            ))}
          </section>
          <div className='flex justify-center py-10'>
            <Pagination onChange={(e, value) => handlePageChange(value)}
            count={10}
            variant="outlined" 
            color='primary'/>
          </div>
        </div>
      </div>

      {/* Mobile drawer*/}
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 280, pt: 2 }}>
          {filterPanel}
        </Box>
      </Drawer>
    </div>
  )
}

export default Product