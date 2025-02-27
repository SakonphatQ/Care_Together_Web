import { Button } from '@/components/ui/button';

const review = () => {
    return (
        <>
            <div class="flex justify-center items-center min-h-screen bg-gray-100">
                <div class="w-[600px]">
                    <div class="bg-white rounded-lg shadow-md">
                        <div class="bg-blue-600 text-white px-4 py-2 flex justify-between rounded-t-lg">
                            <span>คำแนะนำ</span>
                            <span>09/01/24</span>
                        </div>
                        <div class="p-4 border border-gray-200">
                            <pre class="whitespace-pre-wrap text-sm">
                                XXXXXXXXXXXXXXXXXXXXXXXXXXX
                                XXXXXXXXXXXXXXXX
                                XXXXXXXXXXXXXXXXXXXXXXXXXXX
                                XXXXXXXXXXXXXXXX
                                XXXXXXXXXXXXXXXXXXXXXXXXXXX
                                XXXXXXXXXXXXXXXXXXXXXXXXXXX
                                XXXXXXXXXX
                                XXXXXXXXXXXXXXXXXXXXXXXXXXX
                                XXXXXXXXXXXXXXXX
                                XXXXXXXXXXXXXXXXXXXXXXXXXXX
                                XXXXXXXXXXXXXXXXXXXXXXXXXXX
                                XXXXXXXXXX
                                XXXXXXXXXXXXXXXXXXXXXXXXXXX
                                XXXXXXXXXXXXXXXX
                                XXXXXXXXXXXXXXXXXXXXXXXXXXX
                                XXXXXXXXXXXXXXXXXXXXXXXXXXX
                            </pre>
                        </div>
                    </div>

                    <div class="mt-6 bg-white rounded-lg shadow-md">
                        <div class="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
                            ให้คะแนนคำแนะนำ
                        </div>
                        <div class="p-4 border border-gray-200">
                            <textarea class="w-full h-16 p-2 border rounded-md resize-none" placeholder="แสดงความคิดเห็น..."></textarea>
                            <div class="flex items-center justify-between mt-4">
                                <div class="flex space-x-1">
                                    <span class="text-yellow-400 text-xl">★</span>
                                    <span class="text-yellow-400 text-xl">★</span>
                                    <span class="text-yellow-400 text-xl">★</span>
                                    <span class="text-yellow-400 text-xl">★</span>
                                    <span class="text-yellow-400 text-xl">★</span>
                                </div>
                                <Button class="bg-blue-600 text-white px-4 py-1 rounded-lg">ยืนยัน</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default review