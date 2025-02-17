"use client";  // ✅ เพิ่มบรรทัดนี้ที่ด้านบน

import React, { useState } from "react";

const UserForm = () => {
  const [pressure, setPressure] = useState("กลาง");

  return (
    <div className="flex flex-col items-center p-6">
      {/* รูปโปรไฟล์ */}
      <img src="https://via.placeholder.com/100" alt="Profile" className="w-24 h-24 rounded-full border-2 border-gray-300" />

      {/* ฟอร์มข้อมูล */}
      <div className="mt-4 w-80">
        <label className="block text-sm">ชื่อ-นามสกุล</label>
        <input type="text" className="w-full border p-2 rounded" />

        <div className="mt-3 flex gap-2">
          <div className="flex-1">
            <label className="block text-sm">วันเดือนปีเกิด</label>
            <input type="text" placeholder="xx/xx/xxxx" className="w-full border p-2 rounded" />
          </div>
          <div className="flex-1">
            <label className="block text-sm">เพศ</label>
            <select className="w-full border p-2 rounded">
              <option>XXX</option>
            </select>
          </div>
        </div>

        {/* ปุ่มเลือกระดับความดันโลหิต */}
        <label className="block mt-3 text-sm">ระดับความเคร่งครัด</label>
        <div className="flex justify-between">
          {["ต่ำ", "กลาง", "สูง"].map((level) => (
            <button
              key={level}
              className={`px-4 py-2 border rounded ${pressure === level ? "bg-red-300" : "bg-white"}`}
              onClick={() => setPressure(level)}
            >
              {level}
            </button>
          ))}
        </div>

        {/* เช็กลิสต์โรคประจำตัว */}
        <label className="block mt-3 text-sm">โรคประจำตัว</label>
        <div className="flex flex-col">
          {["เบาหวาน", "ความดัน", "อื่นๆ"].map((disease) => (
            <label key={disease} className="flex items-center">
              <input type="checkbox" className="mr-2" /> {disease}
            </label>
          ))}
        </div>

        {/* ปุ่มบันทึก */}
        <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded">บันทึก</button>
      </div>
    </div>
  );
};

export default UserForm;
