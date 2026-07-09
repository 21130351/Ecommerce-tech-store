import React from 'react'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

//Level Two (section headings) 
import { laptopLevelTwo }      from '../../../data/category/levelTwo/laptopLevelTwo'
import { coreLevelTwo }        from '../../../data/category/levelTwo/coreLevelTwo'
import { caseLevelTwo }        from '../../../data/category/levelTwo/caseLevelTwo'
import { monitorLevelTwo }     from '../../../data/category/levelTwo/monitorLevelTwo'
import { accessoriesLevelTwo } from '../../../data/category/levelTwo/accessoriesLevelTwo'
import { routersLevelTwo }     from '../../../data/category/levelTwo/routersLevelTwo'
import { softwareLevelTwo }    from '../../../data/category/levelTwo/softwareLevelTwo'

//Level Three (items under each section)
import { laptopLevelThree }      from '../../../data/category/levelThree/laptopLevelThree'
import { coreLevelThree }        from '../../../data/category/levelThree/coreLevelThree'
import { caseLevelThree }        from '../../../data/category/levelThree/caseLevelThree'
import { monitorLevelThree }     from '../../../data/category/levelThree/monitorLevelThree'
import { accessoriesLevelThree } from '../../../data/category/levelThree/accessoriesLevelThree'
import { routersLevelThree }     from '../../../data/category/levelThree/routersLevelThree'
import { softwareLevelThree }    from '../../../data/category/levelThree/softwareLevelThree'

// Types 
type LevelTwoItem = { id: number; name: string }

interface Props {
  activeCategory: string | null
}

//Data maps 
const categoryTwo: Record<string, LevelTwoItem[]> = {
  Laptop:      laptopLevelTwo,
  Core:        coreLevelTwo,
  Case:        caseLevelTwo,
  Monitor:     monitorLevelTwo,
  Accessories: accessoriesLevelTwo,
  Routers:     routersLevelTwo,
  Software:    softwareLevelTwo,
}

const categoryThree: Record<string, Record<string, string[]>> = {
  Laptop:      laptopLevelThree,
  Core:        coreLevelThree,
  Case:        caseLevelThree,
  Monitor:     monitorLevelThree,
  Accessories: accessoriesLevelThree,
  Routers:     routersLevelThree,
  Software:    softwareLevelThree,
}

// Component
const CategorySheet = ({ activeCategory }: Props) => {
  const navigate = useNavigate()
  if (!activeCategory) return null

  const sections  = categoryTwo[activeCategory]   ?? []
  const subItems  = categoryThree[activeCategory] ?? {}

  const handleItemClick = (sectionName: string, item: string) => {
  const params = new URLSearchParams()

  // Dựa vào tên section để biết nên set param nào
  if (sectionName === "By Brand") {
    params.set("brand", item)                    // ?brand=Dell
  } else if (sectionName === "By Price") {
    params.set("price", item)                    // ?price=Under $300
  } else if (sectionName === "Gaming Laptops") {
    params.set("brand", item)                    // ?brand=Asus ROG
  } else {
    // Các section khác (Resolution, Size...) dùng type chung
    params.set("type", sectionName)
    params.set("value", item)
  }

  navigate(`/products/${activeCategory}?${params.toString()}`)
}

  return (
    <Box
      className='bg-white border border-gray-200 shadow-xl rounded-b-lg'
      sx={{ maxHeight: 420, overflowY: 'auto' }}
    >
      <div className='flex flex-wrap gap-x-10 gap-y-6 px-8 py-6'>
        {sections.map((section) => (
          <div key={section.id} className='min-w-[140px]'>
            {/* Section heading — bold, primary colour */}
            <p className='text-primary-color font-bold text-sm mb-3 uppercase tracking-wide border-b border-primary-color pb-1'>
              {section.name}
            </p>

            {/* Sub-items */}
            <ul className='flex flex-col gap-1'>
              {(subItems[section.name] ?? []).map((item) => (
                <li
                  key={item}
                  onClick={() => handleItemClick(section.name, item)}
                  className='text-gray-600 text-sm hover:text-primary-color hover:translate-x-1 transition-all cursor-pointer'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  )
}

export default CategorySheet