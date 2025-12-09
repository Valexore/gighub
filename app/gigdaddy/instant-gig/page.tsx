'use client'
import { useRouter } from "next/navigation";
import Head from "next/head";
import {
    Home,
    Briefcase,
    PhilippinePeso,
    MessageSquare,
    User,
    Settings,
    Shield,
    AlertCircle,
    CheckCircle,
    Zap,
    Search,
    FileText,
    BarChart,
    TrendingUp,
    Clock,
    Star,
    Award,
    Calendar,
    MapPin,
} from "lucide-react";
import Map from "@/components/Map";

const earningsData = {
    currentBalance: "₱12,500.00",
    totalEarned: "₱45,800.00",
    pending: "₱3,200.00",
    withdrawn: "₱30,100.00",
};


export default function InstantGig() {
    const router = useRouter();


    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
                    rel="stylesheet"
                />
            </Head>

            {/* Left Navigation */}
            <div className="w-64 bg-linear-to-b from-primary-50 to-white shadow-xl border-r border-gray-200 flex-col sticky top-0 h-screen hidden md:flex">
                <div className="p-6 border-b border-primary-100 bg-white">
                    <div className="flex items-center space-x-3">
                        <div>
                            <img
                                src="/gigdaddy-logo2.png"
                                alt="Gigdaddy Logo"
                                className="w-64 h-16"
                            />
                        </div>
                    </div>
                </div>

                <nav className="flex-1 p-4">
                    <div className="mb-6">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
                            Main Menu
                        </h3>
                        <ul className="space-y-1">
                            <li>
                                <button
                                    onClick={() => router.push("/gigdaddy")}
                                    className="flex items-center px-4 py-3 text-primary-700 bg-primary-50 rounded-lg border border-primary-200 shadow-sm w-full text-left">

                                    <Home className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                                    <span>Dashboard</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push("/gigdaddy/myjobs")}
                                    className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-primary-600 hover:shadow-sm rounded-lg transition-all duration-200 group w-full text-left"
                                >
                                    <Briefcase className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                                    <span>Browse Jobs</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push("/gigdaddy/analytics")}
                                    className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-primary-600 hover:shadow-sm rounded-lg transition-all duration-200 group w-full text-left">
                                    <PhilippinePeso className="w-5 h-5 mr-3" />
                                    <span className="font-semibold">Earnings</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push("/gigdaddy/message")}
                                    className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-primary-600 hover:shadow-sm rounded-lg transition-all duration-200 group w-full text-left"
                                >
                                    <MessageSquare className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                                    <span>Message</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
                            Account
                        </h3>
                        <ul className="space-y-1">
                            <li>
                                <button
                                    onClick={() => router.push("/gigdaddy/profile")}
                                    className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-primary-600 hover:shadow-sm rounded-lg transition-all duration-200 group w-full text-left"
                                >
                                    <User className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                                    <span>Profile</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push("/gigdaddy/settings")}
                                    className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-primary-600 hover:shadow-sm rounded-lg transition-all duration-200 group w-full text-left"
                                >
                                    <Settings className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                                    <span>Settings</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="p-4 border-t border-primary-100 bg-white">
                    <div className="flex items-center space-x-3 p-3 bg-linear-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-100">
                        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-white font-semibold text-sm">JU</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate">
                                Jay-ar Untalan
                            </p>
                            <p className="text-xs text-primary-600 font-medium">
                                Balance: {earningsData.currentBalance}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col overflow-hidden relative">
                <Map />
            </div>
        </div>
    )
}