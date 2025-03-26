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

  return (
    <div className="flex flex-col justify-between p-4 bg-gray-100 h-screen">
      {/* แสดงข้อความ */}
      <div className="flex flex-col space-y-4 overflow-y-auto flex-grow">
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
      <form
        className="flex items-center border border-gray-300 p-2 rounded-lg w-full mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <input
          type="text"
          className="flex-grow outline-none"
          placeholder="พิมพ์ข้อความ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-gray-500 hover:text-black ml-2"
        >
          ▶️
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;