import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';


const UserProfile = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-24">
            {/* รูปโปรไฟล์ */}
            <Avatar>
                <AvatarImage src='https://github.com/shacn.png' alt='@shadcn' />
                <avatarFallback className='text-black'>BT</avatarFallback>
            </Avatar>

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
