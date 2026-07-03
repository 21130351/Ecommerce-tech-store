import { Divider, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface menuItem{

    name: string, // Tên hiển thị của menu
    path: string, // Route sẽ điều hướng tới khi click
    icon: any,    // Icon mặc định
    activeIcon: any, // Icon khi menu đang được chọn
}

interface DrawerListProps{
    menu:menuItem[],  // Danh sách menu chính
    menu2:menuItem[],  // Danh sách menu phụ
    toggleDrawer:()=>void // Hàm đóng/mở drawer
}

const DrawerList = ({menu, menu2, toggleDrawer}:DrawerListProps) => {
    // Lấy đường dẫn (URL) hiện tại để xác định menu nào đang được active
    const location=useLocation();
    const navigate=useNavigate();
  return (
    <div className='h-full'>
          {/* Container của Drawer */}
        <div className='flex flex-col justify-between h-full w-[300px] border-r py-5'>
             {/* Khu vực hiển thị menu */}
            
                <div className="space-y-2">
                 {/* Render từng item trong danh sách menu */}
                    {
                        menu.map((item, index:number)=> 
                            // Điều hướng đến trang tương ứng với menu được chọn
                             <div 
                            onClick={()=>navigate(item.path)}
                             className='pr-9 cursor-pointer' key={index}>
                                {/* Highlight menu đang active */}
                                <p className={`${item.path===location.pathname?"bg-primary-color text-white":"text-primary-color"}
                                flex items-center px-5 py-3 rounded-r-full`}>
                                    {/* Hiển thị icon tương ứng với trạng thái active/inactive */}
                                    <ListItemIcon>
                                        {item.path===location.pathname?item.activeIcon:item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name}/>
                                </p>
                            </div>
                        )
                    }
                </div>
                {/* menu thu 2 cua trang seller (account & logout) */}
                <Divider />
                <div className="space-y-2">
                 {/* Render từng item trong danh sách menu */}
                    {
                        menu2.map((item, index:number)=> 
                            // Điều hướng đến trang tương ứng với menu được chọn
                             <div 
                            onClick={()=>navigate(item.path)}
                             className='pr-9 cursor-pointer' key={index}>
                                {/* Highlight menu đang active */}
                                <p className={`${item.path===location.pathname?"bg-primary-color text-white":"text-primary-color"}
                                flex items-center px-5 py-3 rounded-r-full`}>
                                    {/* Hiển thị icon tương ứng với trạng thái active/inactive */}
                                    <ListItemIcon>
                                        {item.path===location.pathname?item.activeIcon:item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name}/>
                                </p>
                            </div>
                        )
                    }
                </div>
            

        </div>

    </div>
  )
}

export default DrawerList