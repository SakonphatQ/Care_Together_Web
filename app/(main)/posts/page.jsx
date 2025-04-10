"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import data, { addHealthData } from '@/data/analytics';
import { addRecommendation, getRecommendations, updateRecommendationRating } from '@/data/Histroly';


const HealthDashboard = () => {
    const [healthData, setHealthData] = useState({
        height: '',
        weight: '',
        age: '',
        bmi: '',
        bloodPressure: '',
        bloodSugar: ''
    });

    const [history, setHistory] = useState([]);
    const [advice, setAdvice] = useState(''); // สถานะสำหรับคำแนะนำ


    useEffect(() => {
        // โหลดข้อมูลจาก Local Storage
        const savedHistory = localStorage.getItem('healthHistory');
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        } else {
            setHistory(data); // ดึงข้อมูลเริ่มต้นจาก analytics.js
        }
    }, []);


    const handleRating = (timestamp, rating) => {
        updateRecommendationRating('user123', timestamp, rating); // อัปเดตคะแนนใน Histroly.js
        const updatedRecommendations = getRecommendations('user123', 7); // ดึงข้อมูลที่อัปเดต
        setAdviceHistory(updatedRecommendations); // อัปเดตสถานะคำแนะนำ
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHealthData({
            ...healthData,
            [name]: value
        });
    };

    const handleSave = () => {
        const currentDate = new Date().toLocaleDateString();
        const newEntry = { ...healthData, date: currentDate };
        const updatedHistory = [newEntry, ...history].slice(0, 5); // เก็บข้อมูลล่าสุด 5 รายการ
        setHistory(updatedHistory);

        // บันทึกข้อมูลลง Local Storage
        localStorage.setItem('healthHistory', JSON.stringify(updatedHistory));

        // อัปเดตคำแนะนำ
        const adviceMessage = generateAdvice(newEntry);
        setAdvice(adviceMessage);

        // บันทึกคำแนะนำใน Histroly.js
        addRecommendation('user123', adviceMessage); // ใช้ userId ที่เหมาะสม
    };


    const generateAdvice = (data) => {
        let adviceMessage = 'สุขภาพของคุณอยู่ในเกณฑ์ปกติ';

        if (data.bmi > 25) {
            adviceMessage = 'คุณควรควบคุมน้ำหนักและออกกำลังกายอย่างสม่ำเสมอ';
        }
        if (data.bloodPressure > 140) {
            adviceMessage = 'คุณควรลดการบริโภคเกลือและพบแพทย์เพื่อตรวจสุขภาพ';
        }
        if (data.bloodSugar > 100) {
            adviceMessage = 'คุณควรลดการบริโภคน้ำตาลและอาหารที่มีคาร์โบไฮเดรตสูง';
        }

        return adviceMessage;
    };

    useEffect(() => {
        // โหลดคำแนะนำจาก Histroly.js
        const recommendations = getRecommendations('user123', 7); // ดึงคำแนะนำ 7 รายการล่าสุด
        setAdviceHistory(recommendations);
    }, []);

    const [adviceHistory, setAdviceHistory] = useState([]);

    return (
        <>
            <div className="flex space-x-6">
                {/* กรอกข้อมูลสุขภาพ */}
                <div className="bg-blue-100 rounded-lg shadow-md w-96 h-72">
                    <h2 className="bg-blue-600 text-white px-4 py-2 flex justify-center rounded-t-lg">กรอกข้อมูลสุขภาพของฉัน</h2>
                    <div className="grid grid-cols-2 gap-4 text-black px-4 py-4">
                        <input className="p-2 border rounded" placeholder="ส่วนสูง" name="height" value={healthData.height} onChange={handleChange} />
                        <input className="p-2 border rounded" placeholder="น้ำหนัก" name="weight" value={healthData.weight} onChange={handleChange} />
                        <div className="p-2 border rounded bg-white">
                            {healthData.height && healthData.weight && (
                                <p>BMI: {((healthData.weight / ((healthData.height / 100) ** 2)).toFixed(2))}</p>
                            )}
                        </div>
                        <input className="p-2 border rounded" placeholder="อายุ" name="age" value={healthData.age} onChange={handleChange} />
                        <input className="p-2 border rounded" placeholder="ความดันโลหิต" name="bloodPressure" value={healthData.bloodPressure} onChange={handleChange} />
                        <input className="p-2 border rounded" placeholder="น้ำตาลในเลือด" name="bloodSugar" value={healthData.bloodSugar} onChange={handleChange} />
                        <Button
                            className="bg-blue-500 text-white mt-2 p-2 rounded shadow-xl"
                            onClick={() => {
                                const calculatedBmi = (healthData.weight / ((healthData.height / 100) ** 2)).toFixed(2);
                                const updatedHealthData = {
                                    ...healthData,
                                    bmi: calculatedBmi,
                                };
                                setHealthData(updatedHealthData);
                                addHealthData(updatedHealthData); // ส่งข้อมูล BMI เข้า data
                                handleSave();
                            }}
                        >
                            บันทึก
                        </Button>
                        {advice && (
                            <div className="text-green-600 font-bold p-2">
                                บันทึกข้อมูลสำเร็จ!
                            </div>
                        )}
                    </div>
                </div>

                {/* คำแนะนำ */}
                < div className="bg-blue-100 rounded-lg shadow-md w-full h-72" >
                    <h2 className="bg-blue-600 text-white px-4 py-2 flex justify-center rounded-t-lg">คำแนะนำ</h2>
                    <div className="text-black px-4">
                        <p>{advice}</p> {/* แสดงคำแนะนำ */}
                        <Link href={`/Call`}>
                            <Button className="bg-blue-500 text-white mt-2 p-2 rounded shadow-xl">ติดต่อผู้เชี่ยวชาญ</Button>
                        </Link>
                    </div>
                </div >
            </div >




            {/* ประวัติ */}
            < div className="py-2" />
            <div className="grid gap-4 w-full p-4 mb-4 bg-green-600 rounded-lg font-bold text-white shadow-md">ประวัติ</div>
            <div className="flex flex-wrap space-x-6 col-span-4">
                {history.map((entry, index) => (
                    <div key={index} className="bg-white text-black p-4 mt-4 rounded-lg shadow-md w-60">
                        <div className="text-center">วันที่: {entry.date}</div>
                        <div className="text-center mt-2">ส่วนสูง: {entry.height} cm</div>
                        <div className="text-center mt-2">น้ำหนัก: {entry.weight} Kg</div>
                        <div className="text-center mt-2">อายุ: {entry.age} ปี</div>
                        <div className="text-center mt-2">BMI: {entry.bmi} KG/M<sup>2</sup></div>
                        <div className="text-center mt-2">ความดันโลหิต: {entry.bloodPressure} mmHg</div>
                        <div className="text-center mt-2">น้ำตาลในเลือด: {entry.bloodSugar} mg/dL</div>
                    </div>
                ))}
            </div>

            {/* คำแนะนำเพิ่มเติม */}
            <div className="py-2" />
            <div className="w-full p-4 mb-4 bg-blue-500 rounded-lg font-bold text-white text-left shadow-md">
                <h2 className="text-lg font-bold">ประวัติคำแนะนำ</h2>
            </div>
            <div className="bg-blue-100 text-black p-4 mt-4 rounded-lg shadow-md">
                {adviceHistory.map((entry, index) => (
                    <div key={index} className="mb-4">
                        <p><strong>วันที่:</strong> {new Date(entry.timestamp).toLocaleDateString()}</p>
                        <p><strong>คำแนะนำ:</strong> {entry.recommendation}</p>
                        <div className="flex space-x-4 mt-2">
                            <Link href={`/posts/review?page=${entry.timestamp}`}>
                                <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
                                    ให้คะแนนคำแนะนำ
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default HealthDashboard;