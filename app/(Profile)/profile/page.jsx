import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';


const UserProfile = () => {
    return (
        <div className="flex flex-col items-center space-y-8 bg-gray-100 min-h-screen py-10">
            {/* ชื่อผู้ใช้ */}
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mt-5">
                ชื่อผู้ใช้
            </h1>

            {/* รูปโปรไฟล์ */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                <Avatar className="w-full h-full">
                    <AvatarImage src="https://github.com/shacn.png" alt="@shadcn" />
                    <AvatarFallback className="text-black">BT</AvatarFallback>
                </Avatar>
            </div>

            {/* ปุ่มต่าง ๆ */}
            <div className="w-full max-w-xs flex flex-col gap-4">
                <a
                    href="/Setting"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md text-center hover:bg-blue-600 transition duration-300 ease-in-out"
                    aria-label="แก้ไขข้อมูลส่วนตัว - ไปที่หน้าตั้งค่าโปรไฟล์"
                >
                    แก้ไขข้อมูลส่วนตัว
                </a>
                <a
                    href="/SUBSCRIPTION"
                    className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-md text-center hover:bg-yellow-500 transition duration-300 ease-in-out"
                    aria-label="จัดการการสมัครสมาชิก - ไปที่หน้าการจัดการสมาชิก"
                >
                    จัดการการสมัครสมาชิก
                </a>
                <a
                    href="/HowTO"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md text-center hover:bg-blue-600 transition duration-300 ease-in-out"
                    aria-label="วิธีการใช้งานระบบ - ไปที่หน้าคำแนะนำการใช้งาน"
                >
                    วิธีการใช้งานระบบ
                </a>
                <a
                    href="/auth"
                    className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md text-center hover:bg-red-600 transition duration-300 ease-in-out"
                    aria-label="ออกจากระบบ - ลงชื่อออกจากบัญชี"
                >
                    ออกจากระบบ
                </a>
            </div>
        </div>
    );
};

export default UserProfile;
