export default function Profile() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Profile Settings</h1>
            <div>
                <label className="block text-gray-700">Connected Emails:</label>
                <input
                    type="email"
                    placeholder="Add your email"
                    className="border p-2 w-full"
                />
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Add Email
                </button>
            </div>
        </div>
    );
}
