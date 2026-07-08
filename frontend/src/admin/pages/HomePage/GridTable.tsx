import React from 'react'
import HomeCategoryTable from './HomeCategoryTable'
import store, { useAppSelector } from '../../../State/Store'

const GridTable = () => {
  const {customer} =useAppSelector(store=>store);
  return (
    <div>
      <HomeCategoryTable data={customer.homePageData?.grid || []}/>
    </div>
  )
}

export default GridTable