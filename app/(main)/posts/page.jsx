const HealthDashboard = () => {
    return (
        <>
            <div className="container mx-auto p-4 flex space-x-4 col-span-2">
                {/* กรอกข้อมูลสุขภาพ */}
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md w-96 h-50">
                    <h2 className="text-lg font-bold">กรอกข้อมูลสุขภาพของฉัน</h2>
                    <div className="grid grid-cols-2 gap-4 text-black">
                        <input className="p-2 border rounded" placeholder="ส่วนสูง" />
                        <input className="p-2 border rounded" placeholder="น้ำหนัก" />
                        <input className="p-2 border rounded" placeholder="อายุ" />
                        <input className="p-2 border rounded" placeholder="BMI" />
                        <input className="p-2 border rounded" placeholder="ความดันโลหิต" />
                        <input className="p-2 border rounded" placeholder="น้ำตาลในเลือด" />
                    </div>
                    <button className="bg-white text-blue-500 mt-2 p-2 rounded">บันทึก</button>
                </div>

                {/* คำแนะนำ */}
                <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md w-full">
                    <h2 className="text-lg font-bold">คำแนะนำ</h2>
                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    <button className="bg-white text-blue-600 mt-2 p-2 rounded">ติดต่อผู้เชี่ยวชาญ</button>
                </div>
            </div>
            
            <div className="grid gap-4 w-full h-9 p-2 bg-green-600 rounded-lg font-bold text-white mb-4 text-left">ประวัติ</div>
            <div className="container mx-auto p-4 flex space-x-8 col-span-4">
                {/* ประวัติ */}
                <div className="bg-white text-black p-4 mt-4 rounded-lg shadow-md">
                    <div className="text-center h-52 w-56">น้ำหนัก
                        <div className=" grid grid-cols-2">
                            <div className="text-left mt-1">วันที่</div> <div className="text-right mt-1">Kg</div>
                        </div>   
                    </div>
                </div>
                <div className="bg-white text-black p-4 mt-4 rounded-lg shadow-md">
                    <div className="text-center h-52 w-56">BMI
                        <div className=" grid grid-cols-2">
                            <div className="text-left mt-1">วันที่</div> <div className="text-right mt-1">KG/M<sup>2</sup></div>
                        </div>   
                    </div>
                </div>
                <div className="bg-white text-black p-4 mt-4 rounded-lg shadow-md">
                    <div className="text-center h-52 w-56">ความดันโลหิต
                        <div className=" grid grid-cols-2">
                            <div className="text-left mt-1">วันที่</div> <div className="text-right mt-1">mmHg</div>
                        </div>   
                    </div>
                </div>
                <div className="bg-white text-black p-4 mt-4 rounded-lg shadow-md">
                    <div className="text-center h-52 w-56">น้ำตาลในเลือด
                        <div className=" grid grid-cols-2">
                            <div className="text-left mt-1">วันที่</div> <div className="text-right mt-1">mg/dL</div>
                        </div>   
                    </div>
                </div>
                

            </div>
            <div className="">
                {/* คำแนะนำเพิ่มเติม */}
                <div className="bg-blue-400 text-white p-4 mt-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold">ประวัติคำแนะนำ</h2>
                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    <button className="bg-white text-blue-400 mt-2 p-2 rounded">ให้คะแนน</button>
                </div>
            </div>
        </>
    );
};

export default HealthDashboard;
