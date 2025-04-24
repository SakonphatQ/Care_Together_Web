"use client";

import { useState } from "react";

const ChatComponent = () => {
  // สถานะสำหรับเก็บข้อความในแชท
  const [messages, setMessages] = useState([
    { sender: "bot", text: "สวัสดี! ฉันสามารถช่วยอะไรคุณได้บ้าง?" },
  ]);
  // สถานะสำหรับเก็บข้อความที่ผู้ใช้พิมพ์
  const [input, setInput] = useState("");

  // ฟังก์ชันสำหรับส่งข้อความ
  const handleSend = () => {
    if (input.trim() === "") return; // ถ้าข้อความว่างเปล่า ให้หยุดการทำงาน

    // เพิ่มข้อความของผู้ใช้ลงในสถานะ messages
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // เพิ่มข้อความตอบกลับจากบอท (ตัวอย่าง)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "ขอบคุณสำหรับข้อความของคุณ!" },
      ]);
    }, 1000); // ตั้งเวลาให้บอทตอบกลับหลังจาก 1 วินาที

    setInput(""); // ล้างช่องป้อนข้อความ
  };

  // สไตล์พื้นหลังและการจัดวางของคอนเทนเนอร์
  const containerStyle = {
    backgroundImage: "linear-gradient(to bottom, #a8edea, #fed6e3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "20px",
  };

  // สไตล์ของกล่องแชท
  const chatBoxStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "600px",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    overflow: "hidden",
  };

  return (
    <div className="flex flex-col justify-between p-4 h-screen bg-gradient-to-b from-blue-100 to-pink-100 rounded-lg shadow-lg">
      {/* แสดงข้อความ */}
      <div className="flex flex-col space-y-4 h-full overflow-y-auto flex-grow p-4 bg-white rounded-lg shadow-inner">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "bot" ? "items-start" : "justify-end"
            }`}
          >
            {message.sender === "bot" && (
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                🤖
              </div>
            )}
            <div
              className={`bg-gray-100 border border-gray-200 p-3 rounded-lg shadow-md w-fit max-w-md ${
                message.sender === "bot" ? "ml-2" : "self-end"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      {/* ช่องป้อนข้อความ */}
      <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full mt-4 bg-white shadow-md">
        <input
          type="text"
          className="flex-grow outline-none text-lg p-2 bg-transparent"
          placeholder="พิมพ์ข้อความ..."
          value={input}
          onChange={(e) => setInput(e.target.value)} // อัปเดตข้อความที่ผู้ใช้พิมพ์
        />
        <button
          onClick={handleSend} // เรียกฟังก์ชัน handleSend เมื่อกดปุ่ม
          className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-3 hover:bg-blue-600 shadow-md"
        >
          ส่ง
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;