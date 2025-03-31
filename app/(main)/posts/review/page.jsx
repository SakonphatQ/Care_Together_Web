"use client";

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Review = () => {
    const searchParams = useSearchParams();
    const page = searchParams.get('page'); // ดึงค่า 'page' จาก query string

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
                                คำแนะนำที่เกี่ยวข้องกับ timestamp: {page || 'กำลังโหลด...'}
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
                                    <span className="text-yellow-400 text-xl">★</span>
                                    <span className="text-yellow-400 text-xl">★</span>
                                    <span className="text-yellow-400 text-xl">★</span>
                                    <span className="text-yellow-400 text-xl">★</span>
                                    <span className="text-yellow-400 text-xl">★</span>
                                </div>
                                <Button className="bg-blue-600 text-white px-4 py-1 rounded-lg">
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