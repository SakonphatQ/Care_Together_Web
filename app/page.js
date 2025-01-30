export default function CareTogether() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-20 bg-blue-600 text-white flex flex-col items-center py-4 space-y-4">
        <button className="w-12 h-12 bg-white text-blue-600 rounded-lg">
          🏠
        </button>
        <button className="w-12 h-12 bg-white text-blue-600 rounded-lg">
          📋
        </button>
        <button className="w-12 h-12 bg-white text-blue-600 rounded-lg">
          👤
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
          <h1 className="text-xl font-bold text-blue-600">ดูแลกัน - Care Together</h1>
          <nav className="flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-blue-600">
              เกี่ยวกับเรา
            </a>
            <a href="#" className="hover:text-blue-600">
              บริการของเรา
            </a>
            <a href="#" className="hover:text-blue-600">
              วิธีใช้งาน
            </a>
            <a href="#" className="hover:text-blue-600">
              ติดต่อเรา
            </a>
          </nav>
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span>👤</span>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex flex-1 p-8 space-x-4">
          {/* Health Info Card */}
          <div className="w-1/3 bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-bold text-blue-600 mb-4">ข้อมูลสุขภาพของฉันล่าสุด</h2>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div>ส่วนสูง</div>
              <div>XXX</div>
              <div>น้ำหนัก</div>
              <div>XXX</div>
              <div>อายุ</div>
              <div>XXX</div>
              <div>IBM</div>
              <div>XXX</div>
              <div>ความดันโลหิต</div>
              <div>XXX</div>
              <div>น้ำตาลในเลือด</div>
              <div>XXX</div>
              <div>แนวโน้มสุขภาพ</div>
              <div className="text-green-500 font-bold">ดีขึ้น</div>
            </div>
          </div>

          {/* Advertisement Section */}
          <div className="flex-1 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-gray-600 text-xl">พื้นที่โฆษณา</span>
          </div>
        </div>

        {/* Daily Health Plan */}
        <div className="bg-green-100 p-4 rounded-t-lg shadow-md">
          <h2 className="text-lg font-bold text-green-600 mb-4">แผนการดูแลสุขภาพรายวัน</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              xxxxxxxxxxxxx
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              xxxxxxxxxxxxx
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              xxxxxxxxxxxxx
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              xxxxxxxxxxxxx
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
