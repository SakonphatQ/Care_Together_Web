"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { updateRecommendationRating } from '@/data/Histroly';

const historyData = require('@/data/Histroly');

const Review = () => {
    const searchParams = useSearchParams();
    const page = searchParams.get('page'); // ดึงค่า 'page' จาก query string

    const [rating, setRating] = React.useState(0);

    const handleStarClick = (index) => {
        setRating(index + 1); // ตั้งค่าคะแนนตามจำนวนดาวที่คลิก
    };

    const handleConfirm = () => {
        if (rating === 0) {
            alert('กรุณาให้คะแนนก่อนยืนยัน!');
            return;
        }

        // อัปเดตคะแนนใน Histroly.js
        updateRecommendationRating('user123', page, rating);

        alert('ยืนยันการให้คะแนนสำเร็จ!');
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-[600px]">
                    {/* กล่องคำแนะนำ */}
                    <div className="bg-white rounded-lg shadow-md">
                        <div className="bg-blue-600 text-white px-4 py-2 flex justify-between rounded-t-lg">
                            <span>คำแนะนำ</span>
                            <span>{page ? new Date(page).toLocaleDateString() : 'กำลังโหลด...'}</span>
                        </div>
                        <div className="p-4 border border-gray-200">
                            <pre className="whitespace-pre-wrap text-sm">
                                {/* แสดงคำแนะนำที่เกี่ยวข้อง */}
                                {(() => {
                                    try {
                                        const recommendation = historyData.find(item => item.timestamp === page);
                                        return recommendation ? recommendation.recommendation : 'ไม่พบคำแนะนำที่เกี่ยวข้อง';
                                    } catch (error) {
                                        return 'เกิดข้อผิดพลาดในการโหลดข้อมูล';
                                    }
                                })()}
                            </pre>
                        </div>
                    </div>

                    {/* ให้คะแนนคำแนะนำ */}
                    <div className="mt-6 bg-white rounded-lg shadow-md">
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
                            ให้คะแนนคำแนะนำ
                        </div>
                        <div className="p-4 border border-gray-200">
                            <textarea
                                className="w-full h-16 p-2 border rounded-md resize-none"
                                placeholder="แสดงความคิดเห็น..."
                            ></textarea>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                            key={index}
                                            className={`text-xl cursor-pointer ${
                                                index < rating ? 'text-yellow-400' : 'text-gray-300'
                                            }`}
                                            onClick={() => handleStarClick(index)}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <Button
                                    className="bg-blue-600 text-white px-4 py-1 rounded-lg"
                                    onClick={handleConfirm}
                                >
                                    ยืนยัน
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;