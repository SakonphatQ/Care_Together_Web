import React from 'react';

const ServicesPage = () => {
    return (
        <div>
            <header>
                <h1 className='text-center font-bold text-5xl'> ฟีเจอร์หลัก </h1>
            </header>
            <div className='container mx-auto px-4'>
                <section>
                    <div className="bg-white shadow-xl rounded-lg p-4 mb-8">
                        <h2 className='font-bold '> บันทึกข้อมูลสุขภาพ </h2>
                        <p>ผู้ใช้สามารถบันทึกข้อมูลสุขภาพสวนตวของผู้ใช้งาน
                            เช่น นำหนัก, สวนสูง, ระดับนำตาลในเลือด และค่าความดนโลหต เป็นตน</p>
                    </div>

                </section>
                <section>
                    <div className="bg-white shadow-xl rounded-lg p-4 mb-8">
                        <h2 className='font-bold'> แนะนำแผนการดูแล </h2>
                        <p> ระบบสามารถวิเคราะห์ข้อมูลสุขภาพที่ผู้ใช้บันทึกไว้ และเสนอแผนการดูแลสุขภาพส่วนบุคคล เช่น การออกกำลังกาย การควบคุมอาหาร และการพักผ่อน </p>
                    </div>
                </section>
                <section>
                    <div className="bg-white shadow-xl rounded-lg p-4 mb-8">
                        <h2 className='font-bold'> ติดตามระดับน้ำตาล-ความดัน </h2>
                        <p> ระบบมีการแสดงกราฟและข้อมูลสถิติที่เข้าใจง่าย เพื่อช่วยผู้ใช้ติดตามแนวโน้มสุขภาพ </p>
                    </div>
                </section>
                <section>
                    <div className="bg-white shadow-xl rounded-lg p-4 mb-8">
                        <h2 className='font-bold'> ปรึกษาผู้เชี่ยวชาญ </h2>
                        <p> ผู้ใช้สามารถนัดหมายปรึกษาแพทย์ นักโภชนาการ หรือผู้เชี่ยวชาญด้านสุขภาพผ่านแอป </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServicesPage;