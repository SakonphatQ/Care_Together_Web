const ChatComponent = () => {
    return (
      <div className="flex flex-col space-y-4 p-4 bg-gray-100 h-screen">
        
        {/* ข้อความจากบอท */}
        <div className="flex items-start space-x-2">
          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            🤖
          </div>
          <div className="bg-white border border-gray-300 p-3 rounded-lg shadow-md w-fit max-w-md">
            สวัสดี! ฉันสามารถช่วยอะไรคุณได้บ้าง?
          </div>
        </div>
  
        {/* ข้อความจากผู้ใช้ */}
        <div className="flex justify-end">
          <div className="bg-white border border-gray-300 p-3 rounded-lg shadow-md w-fit max-w-md self-end">
            ฉันต้องการข้อมูลสุขภาพของฉัน
          </div>
        </div>
  
        {/* ช่องป้อนข้อความ */}
        <div className="flex items-center border border-gray-300 p-2 rounded-lg w-full mt-auto">
          <input type="text" className="flex-grow outline-none" placeholder="พิมพ์ข้อความ..." />
          <button className="text-gray-500 hover:text-black ml-2">▶️</button>
        </div>
        
      </div>
    );
  };
  
  export default ChatComponent;
  