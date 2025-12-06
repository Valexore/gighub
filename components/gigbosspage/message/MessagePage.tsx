"use client"

export default function MessagePage() {
    // Temporary sample messages
    const chats = [
        { from: "them", text: "Hi! How’s the project going?" },
        { from: "me", text: "Almost done! Just finishing the UI." },
        { from: "them", text: "Nice! Can you send the update later?" },
        { from: "me", text: "Yes, I’ll send it before 5 PM." },
        { from: "them", text: "Thanks! Appreciate it 😊" },
    ];

    return (
        <main className="w-[75%] bg-white rounded-lg h-full flex flex-col mr-5 border-r">

            {/* ---------------- Header ---------------- */}
            <div className="flex items-center justify-between px-5 py-3 border-b">
                <div className="flex items-center gap-4">
                    <div className="relative">
                    <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center">
                        <i className="ri-user-line text-3xl text-gray-600"></i>
                    </div>

                    {/* Online dot */}
                    <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></span>
                </div>

                <div className="flex flex-col">
                    <span className="text-xl font-semibold">Sophia Rhodes</span>
                    <span className="text-sm text-gray-500">Online</span>
                </div>

                </div>
                <div className="flex gap-5">
                    <i className="text-[1.7rem] ri-phone-line"></i>
                    <i className="text-[1.7rem] ri-error-warning-fill"></i>
                </div>
            </div>

            {/* ---------------- Messages Area ---------------- */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">

                {chats.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`px-4 py-2 max-w-[60%] rounded-xl text-sm shadow-sm
                            ${msg.from === "me"
                                    ? "bg-blue-500 text-white rounded-br-none"
                                    : "bg-gray-200 text-gray-900 rounded-bl-none"
                                }`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}

            </div>

            {/* ---------------- Input Bar ---------------- */}
            <div className="p-4 border-t flex items-center gap-3">
                <i className="text-[1.7rem] ri-image-add-line"></i>
                <i className="text-[1.7rem] ri-attachment-line"></i>
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 py-3 px-4 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="px-3 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                    <i className="ri-send-plane-2-fill text-xl"></i>
                </button>
            </div>

        </main>
    );
}
