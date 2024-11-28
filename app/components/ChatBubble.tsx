type ChatBubbleProps = {
    message: string;
    isUser: boolean;
};

export default function ChatBubble({ message, isUser }: ChatBubbleProps) {
    return (
        <div
            className={`p-3 max-w-xs ${isUser ? "bg-blue-500 text-white self-end" : "bg-gray-200"
                } rounded-lg shadow-md`}
        >
            {message}
        </div>
    );
}
