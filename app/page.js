import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block h-full w-44">
          <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[calc(100%-11rem)]">
        <div className="flex space-x-6">

          <div className="bg-blue-100 rounded-lg p-5 w-96">
            <h2 className="font-bold text-white mb-5 bg-blue-500 w-full rounded-lg">ข้อมูลสุขภาพของฉันล่าสุด</h2>
            <div className="grid grid-cols-2 gap-y-2">
              <div>
                <div>ส่วนสูง<div>XXX</div></div>
                <div>น้ำหนัก<div>XXX</div></div>
                <div>อายุ <div>XXX</div> </div>
              </div>
              <div>
                <div>IBM<div>XXX</div></div>
                <div>ความดันโลหิต<div>XXX</div></div>
                <div>น้ำตาลในเลือด<div>XXX</div></div>
                <div>แนวโน้มสุขภาพ<div className="text-green-500">ดีขึ้น</div></div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 flex items-center justify-center w-full">
            <span className="text-gray-600 font-bold">พื้นที่โฆษณา</span>
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