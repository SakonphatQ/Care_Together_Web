import React from "react";
import Image from "next/image";
import HowTO01 from "@/img/HowTO01.png";
import HowTO02 from "@/img/HowTO02.png";
import HowTO03 from "@/img/HowTO03.png";
import HowTO04 from "@/img/HowTO04.png";

export default function TextComponent() {
    return (
      <div className="p-4">
        <p className="underline font-bold">วิธีการใช้งาน</p>
        
        <p className="mt-4">
          เข้าไปกรอกข้อมูล <br /> 
          <Image src={HowTO01} alt="HowTo" width="100%" height="100%" />
          <Image src={HowTO02} alt="HowTo" width="100%" height="100%" />
          <Image src={HowTO03} alt="HowTo" width="100%" height="100%" />
          จากนั้นกดปุ่ม "บันทึก" เพื่อบันทึกข้อมูล<br />
          <br/>
          จากนั้นไปที่หน้า "กรอกข้อมูลสุขภาพ" เพื่อกรอกข้อมูลสุขภาพของคุณ<br/>          
          จากนั้นกดปุ่ม "บันทึก" เพื่อบันทึกข้อมูล<br />
          ดูคำแนะนำการรักษาสุขภาพที่เหมือกับคุณ <br />
          <Image src={HowTO04} alt="HowTo" width="100%" height="100%" />
        </p>
      </div>
    );
  }
  