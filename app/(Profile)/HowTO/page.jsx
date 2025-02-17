export default function TextComponent() {
    return (
      <div className="p-4">
        {/* ข้อความขีดเส้นใต้ */}
        <p className="underline font-bold">XXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
  
        {/* ข้อความหลายบรรทัด */}
        <p className="mt-4">
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br />
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br />
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br />
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br />
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        </p>
      </div>
    );
  }
  