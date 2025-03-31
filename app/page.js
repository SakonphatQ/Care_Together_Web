"use client";

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getHealthData } from "@/data/analytics";
import Product_advertising1 from '@/img/Product_advertising1.jpg';
import Product_advertising2 from '@/img/Product_advertising2.jpg';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

{/* ฟังก์ชันที่ใช้ในการวิเคราะห์สุขภาพ*/ }
const analyzeHealth = (latestData) => {
  let healthTrend = "ปกติ";
  let healthColor = "text-green-500";

  if (latestData.bmi > 25 || latestData.bloodPressure > 140 || latestData.bloodSugar > 100) {
    healthTrend = "มีความเสี่ยง";
    healthColor = "text-yellow-500";
  }
  if (latestData.bmi > 30 || latestData.bloodPressure > 160 || latestData.bloodSugar > 126) {
    healthTrend = "มีความเสี่ยงสูง";
    healthColor = "text-red-500";
  }

  return { healthTrend, healthColor };
};

export default function Home() {
  const [latestData, setLatestData] = useState(null);

  useEffect(() => {
    // โหลดข้อมูลจาก Local Storage
    const savedHistory = localStorage.getItem('healthHistory');
    if (savedHistory) {
      const history = JSON.parse(savedHistory);
      setLatestData(history[0]); // ดึงข้อมูลล่าสุด
    }
  }, []);

  if (!latestData) {
    return <div>Loading...</div>;
  }

  const { healthTrend, healthColor } = analyzeHealth(latestData);

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block w-44">
          <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[calc(100%-11rem)]">
          <div className="flex space-x-8">

            {/*ข้อมูลสุขภาพของฉันล่าสุด*/}
            <div className="bg-blue-100 rounded-lg shadow-md w-1/3">
              <div className="bg-blue-600 text-white px-4 py-2 flex justify-center rounded-t-lg">ข้อมูลสุขภาพของฉันล่าสุด</div>
              <div className="grid grid-cols-2 gap-y-2 py-3 px-12">
                <div >
                  <div className="py-3">ส่วนสูง</div>
                  <div className="py-3">น้ำหนัก</div>
                  <div className="py-3">ความดันโลหิต</div>
                  <div className="py-3">BMI</div>
                  <div className="py-3">น้ำตาลในเลือด</div>
                  <div className="py-3">แนวโน้มสุขภาพ</div>
                </div>
                <div className="px-8">
                  <div className="py-3">{latestData.height}</div>
                  <div className="py-3">{latestData.weight}</div>
                  <div className="py-3">{latestData.bloodPressure}</div>
                  <div className="py-3">{latestData.bmi}</div>
                  <div className="py-3">{latestData.bloodSugar}</div>
                  <div className={`py-3 ${healthColor}`}>{healthTrend}</div>
                </div>
              </div>
            </div>

            {/*โฆษณา*/}
            <div className="px-10 py-2 w-1/2 h-96">
              <Carousel className="">
                <CarouselContent>
                  <CarouselItem><Image src={Product_advertising1} alt='TraversyPress' width={800} /></CarouselItem>
                  <CarouselItem><Image src={Product_advertising2} alt='TraversyPress' width={800} /></CarouselItem>
                  <CarouselItem>ตัวอย่าง</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          {/*แผนการดูแลสุขภาพรายวัน*/}
          <div>
            <div className="grid gap-4 w-full h-9 p-2 bg-green-600 rounded-lg font-bold text-white mb-4 text-left mt-4">แผนการดูแลสุขภาพรายวัน</div>
          </div>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <div className="bg-blue-100 shadow-xl rounded-lg p-4 h-80 mb-8">
              <h3 className="font-bold mb-2">ออกกำลังกาย</h3>
              <p>เดินเร็ว 30 นาที</p>
              <p>โยคะ 15 นาที</p>
            </div>
            <div className="bg-blue-100 shadow-xl rounded-lg p-4 h-80 mb-8">
              <h3 className="font-bold mb-2">โภชนาการ</h3>
              <p>รับประทานผักและผลไม้</p>
              <p>หลีกเลี่ยงอาหารทอด</p>
            </div>
            <div className="bg-blue-100 shadow-xl rounded-lg p-4 h-80 mb-8">
              <h3 className="font-bold mb-2">การดื่มน้ำ</h3>
              <p>ดื่มน้ำอย่างน้อย 8 แก้ว</p>
            </div>
            <div className="bg-blue-100 shadow-xl rounded-lg p-4 h-80 mb-8">
              <h3 className="font-bold mb-2">การพักผ่อน</h3>
              <p>นอนหลับอย่างน้อย 7 ชั่วโมง</p>
            </div>
            <div className="bg-blue-100 shadow-xl rounded-lg p-4 h-80 mb-8">
              <h3 className="font-bold mb-2">การจัดการความเครียด</h3>
              <p>ฝึกสมาธิ 10 นาที</p>
              <p>ฟังเพลงผ่อนคลาย</p>
            </div>
            <div className="bg-blue-100 shadow-xl rounded-lg p-4 h-80 mb-8">
              <h3 className="font-bold mb-2">การตรวจสุขภาพ</h3>
              <p>วัดความดันโลหิต</p>
              <p>ตรวจน้ำตาลในเลือด</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}