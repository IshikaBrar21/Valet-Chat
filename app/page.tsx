import ReceiptCard from "@/app/components/ReceiptCard";

type Receipt = {
  vendor: string;
  date: string;
  amount: string;
};

export default function Dashboard() {
  const receipts: Receipt[] = [
    { vendor: "Amazon", date: "2024-11-28", amount: "$50" },
    { vendor: "Uber", date: "2024-11-27", amount: "$20" },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Recent Receipts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {receipts.map((receipt, idx) => (
          <ReceiptCard key={idx} {...receipt} />
        ))}
      </div>
      <button className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition">
        Sync Emails
      </button>
    </div>
  );
}
