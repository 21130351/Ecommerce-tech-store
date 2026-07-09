import React from 'react'
import HomeCategoryTable from './HomeCategoryTable'
import { useAppSelector } from '../../../State/Store';

const ElectronicTable = () => {
  const {customer} =useAppSelector(store=>store);
  return (
    <div>
      <HomeCategoryTable data={customer.homePageData?.electricsCategories || []}/>
    </div>
  )
}

export default ElectronicTable