import ChatBubble from "@/app/components/ChatBubble";

type Message = {
    text: string;
    isUser: boolean;
};

export default function Chat() {
    const messages: Message[] = [
        { text: "How can I assist you?", isUser: false },
        { text: "Show me my Amazon receipts.", isUser: true },
    ];

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 overflow-y-auto space-y-3 p-4">
                {messages.map((msg, idx) => (
                    <ChatBubble key={idx} message={msg.text} isUser={msg.isUser} />
                ))}
                <div className="flex items-center p-4 border-t">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 border rounded-l-lg p-2"
                />
                <button className="bg-blue-500 text-white p-2 rounded-r-lg">
                    Send
                </button>
            </div>
            </div>
            
        </div>
    );
}
