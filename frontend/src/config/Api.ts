import axios from "axios"
// 1. ĐỊA CHỈ SERVER (Nơi chứa cơ sở dữ liệu gốc của toàn hệ thống)
// Hiện tại chạy trên máy cá nhân (localhost) ở cổng 5454
export const API_URL="http://localhost:5454"

export const api=axios.create({
    baseURL: API_URL, // Tự động gắn địa chỉ Server vào trước mọi đường dẫn gọi API
    headers: {
        "Content-Type": "application/json", // Mặc định gửi và nhận dữ liệu dưới dạng JSON
    }
})