import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';


const UserProfile = () => {
    return (
        <div className="flex flex-col items-center ">{/*rounded-lg shadow-lg bg-blue-100*/}
            {/* ชื่อผู้ใช้ */}   
            <h1 className="text-3xl font-bold text-center mt-10">ชื่อผู้ใช้</h1>
            <div className="py-4"/>
            {/* รูปโปรไฟล์ */}
            <div className="w-32 h-32">
                <Avatar className="w-full h-full">
                    <AvatarImage src='https://github.com/shacn.png' alt='@shadcn' />
                    <AvatarFallback className='text-black'>BT</AvatarFallback>
                </Avatar>
            </div>

            {/* ปุ่มต่าง ๆ */}
            <div className="mt-20 flex flex-col gap-3">
                <a href='/Setting' className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md text-center">
                    แก้ไขข้อมูล
                </a>
                <a href='/SUBSCRIPTION' className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow-md text-center">
                    SUBSCRIPTION
                </a>
                <a href='/HowTO' className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md text-center">
                    วิธีใช้งาน
                </a>
                <a href='/auth' className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md text-center">
                    ออกจากระบบ
                </a>
            </div>
        </div>
    );
};

export default UserProfile;
