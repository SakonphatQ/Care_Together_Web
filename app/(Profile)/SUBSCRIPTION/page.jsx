"use client"; // ✅ ต้องใช้เพราะมี useState

import React, { useState } from "react";

const SubscriptionPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("1 เดือน");

  const plans = [
    { name: "1 เดือน", price: "52 บาท" },
    { name: "1 ปี", price: "450 บาท" },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-200 h-screen rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Subscription</h2>

      {/* ตัวเลือกแพ็กเกจ */}
      <div className="flex gap-4 mt-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-4 w-60 h-30 border rounded-lg text-center cursor-pointer shadow-md ${selectedPlan === plan.name
                ? "bg-gradient-to-b from-blue-500 to-blue-700 text-white"
                : "bg-white text-black"
              }`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <h3 className="font-bold">{plan.name}</h3>
            <p className="text-lg">{plan.price}</p>
            {plan.name === "1 เดือน" && (
              <p className="text-sm">เดือนละ 52 บาท</p>
            )}
            {plan.name === "1 ปี" && (
              <p className="text-sm">เฉลี่ยเดือนละ 37.5 บาท</p>
            )}
          </div>
        ))}
      </div>
      {/* ปุ่มชำระเงิน */}
      <button
        className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
        onClick={() => alert(`คุณได้เลือกแพ็กเกจ: ${selectedPlan}`)}
      >
        ชำระเงิน
      </button>
      {/* สิทธิประโยชน์ */}
      <div className="mt-6 w-full max-w-md p-4 border rounded-lg shadow bg-white">
        <h3 className="font-bold">สิทธิประโยชน์</h3>
        <p className="text-sm mt-2">
          - เข้าถึงเนื้อหาพิเศษ {/* ตัวอย่าง */}
          <br />
          - ส่วนลดพิเศษสำหรับกิจกรรม {/* ตัวอย่าง */}
          <br />
          - การสนับสนุนลูกค้าแบบพิเศษ {/* ตัวอย่าง */}
        </p>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
