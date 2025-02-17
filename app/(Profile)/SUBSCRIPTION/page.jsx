"use client"; // ✅ ต้องใช้เพราะมี useState

import React, { useState } from "react";

const SubscriptionPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("1 เดือน");

  const plans = [
    { name: "1 เดือน", price: "52 บาท" },
    { name: "1 ปี", price: "450 บาท" },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-lg font-semibold">Subscription</h2>

      {/* ตัวเลือกแพ็กเกจ */}
      <div className="flex gap-4 mt-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-4 w-40 border rounded-lg text-center cursor-pointer shadow-md ${
              selectedPlan === plan.name
                ? "bg-gradient-to-b from-blue-500 to-blue-700 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <h3 className="font-bold">{plan.name}</h3>
            <p className="text-lg">{plan.price}</p>
            <p className="text-sm">xxxxxxxxxxxxx</p>
          </div>
        ))}
      </div>

      {/* สิทธิประโยชน์ */}
      <div className="mt-6 w-full max-w-md p-4 border rounded-lg shadow">
        <h3 className="font-bold">สิทธิประโยชน์</h3>
        <p className="text-sm mt-2">
          xxxxxxxxxxxxxxxxxxxxxxxxxxxx
          <br />
          xxxxxxxxxxxxxxxxxxxxxxxxxxxx
          <br />
          xxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
