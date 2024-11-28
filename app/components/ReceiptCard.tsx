type ReceiptCardProps = {
    vendor: string;
    date: string;
    amount: string;
};

export default function ReceiptCard({ vendor, date, amount }: ReceiptCardProps) {
    return (
        <div className="bg-white rounded-lg shadow p-4 hover:scale-105 transition-transform">
            <h3 className="text-lg font-semibold">{vendor}</h3>
            <p className="text-sm text-gray-500">{date}</p>
            <p className="text-xl font-bold">{amount}</p>
        </div>
    );
}
