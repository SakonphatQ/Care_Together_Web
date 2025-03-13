import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import data from "@/data/analytics";
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


export default function Home() {
  const latestData = data[0];

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block w-44">
          <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[calc(100%-11rem)]">
          <div className="flex space-x-8">
            <div className="bg-blue-100 rounded-lg p-5 w-96">
              <div className="font-bold text-black text-center mb-5 w-full rounded-lg">ข้อมูลสุขภาพของฉันล่าสุด</div>
              <div className="grid grid-cols-2 gap-y-2 py-3">
                <div>
                  <div className="py-3">ส่วนสูง</div>
                  <div className="py-3">น้ำหนัก</div>
                  <div className="py-3">ความดันโลหิต</div>
                  <div className="py-3">BMI</div>
                  <div className="py-3">น้ำตาลในเลือด</div>
                  <div className="py-3">แนวโน้มสุขภาพ</div>
                </div>
                <div>
                <div className="py-3">{latestData.height}</div>
                <div className="py-3">{latestData.weight}</div>
                <div className="py-3">{latestData.bloodPressure}</div>
                <div className="py-3">{latestData.bmi}</div>  
                <div className="py-3">{latestData.bloodSugar}</div>
                <div className="text-green-500 py-3">ดีขึ้น</div>
                </div>
              </div>
            </div>

            <div className="px-10 w-1/2 ">
              <Carousel>
                <CarouselContent>
                  <CarouselItem><Image src={Product_advertising1} alt='TraversyPress' width={800} /></CarouselItem>
                  <CarouselItem><Image src={Product_advertising2} alt='TraversyPress' width={800} /></CarouselItem>
                  <CarouselItem>...</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

          </div>

          <div>
            <div className="grid gap-4 w-full h-9 p-2 bg-green-600 rounded-lg font-bold text-white mb-4 text-left mt-4">แผนการดูแลสุขภาพรายวัน</div>
          </div>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <div className="bg-white shadow rounded-lg p-4 w-60 h-80 mb-8">xxxxxxxxxxxxxxx</div>
            <div className="bg-white shadow rounded-lg p-4 mb-8">xxxxxxxxxxxxxxx</div>
            <div className="bg-white shadow rounded-lg p-4 mb-8">xxxxxxxxxxxxxxx</div>
            <div className="bg-white shadow rounded-lg p-4 mb-8">xxxxxxxxxxxxxxx</div>
            <div className="bg-white shadow rounded-lg p-4 mb-8">xxxxxxxxxxxxxxx</div>
            <div className="bg-white shadow rounded-lg p-4 mb-8">xxxxxxxxxxxxxxx</div>
          </div>
        </div>
      </div>
    </>
  );
}