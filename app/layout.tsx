import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata = {
  title: "Valet Chat",
  description: "Organize and sync receipts with chat assistance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
