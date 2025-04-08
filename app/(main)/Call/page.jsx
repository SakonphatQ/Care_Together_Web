"use client";

import { useState } from "react";

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "สวัสดี! ฉันสามารถช่วยอะไรคุณได้บ้าง?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // เพิ่มข้อความของผู้ใช้
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // เพิ่มข้อความตอบกลับจากบอท (ตัวอย่าง)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "ขอบคุณสำหรับข้อความของคุณ!" },
      ]);
    }, 1000);

    setInput(""); // ล้างช่องป้อนข้อความ
  };
  
  // เพิ่มสไตล์พื้นหลังและการจัดวาง
  const containerStyle = {
    backgroundImage: "linear-gradient(to bottom, #a8edea, #fed6e3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "20px",
  };

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
    <div className="flex flex-col justify-between p-4 h-screen bg-gray-200 rounded-lg shadow-md">{/*bg-blue-100  */}
      {/* แสดงข้อความ */}
      <div className="flex flex-col space-y-4 h-full overflow-y-auto flex-grow">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === "bot" ? "items-start" : "justify-end"
              }`}
          >
            {message.sender === "bot" && (
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                🤖
              </div>
            )}
            <div
              className={`bg-white border border-gray-300 p-3 rounded-lg shadow-md w-fit max-w-md ${message.sender === "bot" ? "ml-2" : "self-end"
                }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* ช่องป้อนข้อความ */}
      <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full mt-4">
        <input
          type="text"
          className="flex-grow outline-none text-lg p-2"
          placeholder="พิมพ์ข้อความ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-3 hover:bg-blue-600"
        >
          ส่ง
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;