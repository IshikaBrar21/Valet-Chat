"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <div className="font-bold text-lg">Valet Chat</div>
            <div className="space-x-4">
                <Link href="/">Dashboard</Link>
                <Link href="/chat">Chat</Link>
                <Link href="/profile">Profile</Link>
            </div>
        </nav>
    );
}
