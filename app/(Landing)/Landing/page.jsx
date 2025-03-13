"use client"; // ใช้ hooks ใน client component

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/img/logo.png';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
    const [selectedPlan, setSelectedPlan] = useState("1เดือน");

    return (
        <div className="font-sans">
            {/* Header */}
            <header className="flex justify-between items-center p-5 bg-white shadow-md">
                <Link href='/Landing'>
                    <div className='flex items-center text-blue-800 font-semibold text-xl'><Image src={logo} alt='Logo' width={50} />ดูแลกัน - Care Together</div>
                </Link>

                <div className='flex space-x-5 items-center font-semibold'>
                    <Link href='/about'>
                        <div className='text-black'>เกี่ยวกับเรา</div>
                    </Link>
                    <Link href='/services'>
                        <div className='text-black'>บริการของเรา</div>
                    </Link>
                    <Link href='/HowTO'>
                        <div className='text-black'>วิธีใช้งาน</div>
                    </Link>
                    <Link href='/contact'>
                        <div className='text-black'>ติดต่อเรา</div>
                    </Link>
                </div>
                <Link href='/auth'>
                    <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg">เข้าสู่ระบบ</Button>
                </Link>
            </header>

            {/* Head Section */}
            <section className="text-center p-10 bg-blue-100">
                <h2 className="text-3xl font-bold">ดูแลกัน - Care Together</h2>
                <p className="text-gray-600 mt-2">แอปพลิเคชันผู้ช่วยสำหรับผู้ดูแลผู้สูงอายุและผู้ป่วยโรคเรื้อรังที่ช่วยให้คุณติดตามและจัดการสุขภาพได้ง่ายดายและมีประสิทธิภาพ</p>
                <Link href='/auth'>
                    <Button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg">เริ่มต้นใช้งาน</Button>
                </Link>

            </section>

            {/* เป้าหมายทางธุรกิจ Section */}
            <section className="text-center p-10 bg-white">
                <div className="grid grid-cols-3 gap-6">
                    <div className="p-5 text-center">
                        <p className="mt-2 text-black font-semibold">เป้าหมายทางธุรกิจ</p>
                        <p className="mt-2 text-black ">XXXX</p>
                    </div>
                    <div className="p-5 text-center  ">
                        <p className="mt-2 text-black font-semibold">เริ่มต้นฟรี</p>
                        <p className="mt-2 text-black ">XXXX</p>
                    </div>
                    <div className="p-5 text-center ">
                        <p className="mt-2 text-black font-semibold">คำแนะนำที่มีประโยชน์</p>
                        <p className="mt-2 text-black ">XXXX</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="p-10">
                <h3 className="text-2xl font-bold text-center">ฟีเจอร์หลัก</h3>
                <div className="grid grid-cols-4  gap-6  mt-6">
                    <div className="p-5 gap-6 items-center">
                        <p align="center" ><Image src={logo} alt='Logo' width={100} className="" /></p>
                        <p className="mt-2 text-center">บันทึกข้อมูลสุขภาพ</p>
                        <p className="mt-2 text-center">xxxxxxxxxx</p>
                    </div>
                    <div className="p-5 gap-6  ">
                        <p align="center" ><Image src={logo} alt='Logo' width={100} className="" /></p>
                        <p className="mt-2 text-center">แนะนำการดูแล</p>
                        <p className="mt-2 text-center">xxxxxxxxxx</p>
                    </div>
                    <div className="p-5 gap-6 ">
                        <p align="center" ><Image src={logo} alt='Logo' width={100} className="" /></p>
                        <p className="mt-2 text-center">ติดตาระดับน้ำตาล-ความดัน</p>
                        <p className="mt-2 text-center">xxxxxxxxxx</p>
                    </div>
                    <div className="p-5 gap-6 ">
                        <p align="center" ><Image src={logo} alt='Logo' width={100} className="" /></p>
                        <p className="mt-2 text-center">ปรึกษาผู้เชี่ยวชาญ</p>
                        <p className="mt-2 text-center">xxxxxxxxxx</p>
                    </div>
                </div>

            </section >

            {/* Reviews Section */}
            <section className="p-10 bg-gray-100" >
                <h3 className="text-2xl font-bold text-center">รีวิวจากผู้ใช้งาน</h3>
                <div className="flex justify-center gap-6 mt-5">
                    <ReviewCard name="XX" rating={5} />
                    <ReviewCard name="XX" rating={4} />
                    <ReviewCard name="XX" rating={5} />
                </div>
            </section >

            {/* Business Partners */}
            < section className="p-10 text-center" >
                <h3 className="text-2xl font-bold">พันธมิตรทางธุรกิจ</h3>
                <div className="grid grid-cols-2 gap-5 mt-6">
                    <div className="p-5 text-center font-bold">
                        ด้านการพัฒนาผลิตภัณฑ์
                    </div>
                    <div className="p-5 text-center font-bold">
                        ด้านการใช้งานผลิตภัณฑ์
                    </div>
                    <div className="bg-white  p-4 rounded-lg shadow-md h-20">

                        <div className="flex items-center text-blue-800 font-semibold text-xl "> <Image src={logo} alt='TraversyPress' width={50} />สำนักวิชาเทคโนโลยีดิจิทัลประยุกต์  มหาวิทยาลัยแม่ฟ้าหลวง</div>
                    </div>
                    <div className="bg-white  p-4 rounded-lg shadow-md h-20">

                        <div className="flex items-center text-blue-800 font-semibold text-xl"> <Image src={logo} alt='TraversyPress' width={50} />โรงพยาบาลส่งเสริม สุขภาพตำบล</div>
                    </div>
                    <div className="bg-white  p-4 rounded-lg shadow-md h-20">

                        <div className="flex items-center text-blue-800 font-semibold text-xl"> <Image src={logo} alt='TraversyPress' width={50} />สวนจัดการทรัพย์สินทางปัญญา และนวัตกรรม (MFii)</div>
                    </div>
                    <div className="bg-white  p-4 rounded-lg shadow-md h-20">

                        <div className="flex items-center text-blue-800 font-semibold text-xl "> <Image src={logo} alt='TraversyPress' width={50} />สำนักงานกองทุนสนับสนุน การสร้างเสริมสขุภาพ</div>
                    </div>
                    <div className="bg-white  p-4 rounded-lg shadow-md h-20">

                        <div className="flex items-center text-blue-800 font-semibold text-xl "> <Image src={logo} alt='TraversyPress' width={50} />บริษัท เอไอ ดิลิเจนท์ จำกัด</div>
                    </div>
                    <div className="bg-white  p-4 rounded-lg shadow-md h-20">

                        <div className="flex items-center text-blue-800 font-semibold text-xl "> <Image src={logo} alt='TraversyPress' width={50} />กระทรวงสาธารสุข ประเทศไทย</div>
                    </div>
                </div>
            </section >

            {/* Footer */}
            < footer className="p-5 bg-white" >
                <div className='flex items-center text-blue-800 font-semibold text-xl'><Image src={logo} alt='TraversyPress' width={50} />ดูแลกัน - Care Together</div>
                <p className="text-black text-left">© 2024 XXX</p>
            </footer >
        </div >
    );
}

/* 🔹 Component สำหรับฟีเจอร์ */
function FeatureCard({ title }) {
    return (
        <div className="p-5 bg-white shadow-md rounded-lg text-center">
            <h4 className="font-bold">{title}</h4>
            <p className="text-gray-600 text-sm">รายละเอียดเพิ่มเติมเกี่ยวกับ {title}</p>
        </div>
    );
}

/* 🔹 Component สำหรับ Subscription */
function SubscriptionCard({ title, price, selected, onSelect }) {
    return (
        <div
            className={`p-6 w-40 rounded-lg shadow-md text-center cursor-pointer ${selected ? "bg-blue-500 text-white" : "bg-white"
                }`}
            onClick={onSelect}
        >
            <h4 className="font-bold">{title}</h4>
            <p className="text-lg">{price}</p>
        </div>
    );
}

/* 🔹 Component สำหรับรีวิว */
function ReviewCard({ name, rating }) {
    return (
        <div className="p-5 bg-white shadow-md rounded-lg text-center w-40">
            <h4 className="font-bold">{name}</h4>
            <p className="text-yellow-500">{"⭐".repeat(rating)}</p>
        </div>
    );
}

/* 🔹 Component สำหรับพาร์ทเนอร์ */
function PartnerCard({ name }) {
    return (
        <div className="p-5 bg-gray-100 shadow-md rounded-lg text-center">
            <h4 className="font-bold">{name}</h4>
        </div>
    );
}
