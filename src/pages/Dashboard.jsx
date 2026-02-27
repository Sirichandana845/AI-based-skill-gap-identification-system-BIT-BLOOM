import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LogOut, User } from "lucide-react";

export default function Dashboard() {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between items-center">
                        <div className="flex">
                            <div className="flex flex-shrink-0 items-center">
                                <span className="text-xl font-bold text-blue-600 tracking-tight">Skill Gap App</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center text-gray-700 space-x-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium">
                                <User className="h-4 w-4" />
                                <span>{user?.email || "Loading..."}</span>
                            </div>
                            <button
                                onClick={logout}
                                className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                            >
                                <LogOut className="h-4 w-4" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <div className="mx-auto max-w-7xl py-10 sm:px-6 lg:px-8">
                    <div className="px-4 py-8 sm:px-0">
                        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-8 text-center min-h-[400px] flex flex-col justify-center items-center">
                            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome to your Dashboard!</h1>
                            <p className="text-lg text-gray-500 max-w-xl mx-auto">
                                You have successfully authenticated. This is a protected route. From here, you can integrate your resume upload, skill analysis and more features securely.
                            </p>
                            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl w-full">
                                <div className="border border-gray-100 bg-blue-50 p-6 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                                    <h3 className="text-lg font-bold text-blue-900 mb-2">Upload Resume</h3>
                                    <p className="text-blue-700 text-sm">Upload your CV to automatically parse your existing skills.</p>
                                </div>
                                <div className="border border-gray-100 bg-indigo-50 p-6 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                                    <h3 className="text-lg font-bold text-indigo-900 mb-2">Analyze Gaps</h3>
                                    <p className="text-indigo-700 text-sm">Compare your profile against your dream job requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
