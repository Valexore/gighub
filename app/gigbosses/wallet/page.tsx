"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, ArrowDownRight, Plus } from "lucide-react";
import Nav from "@/components/gigbosspage/Nav";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

export default function Wallet() {
    const [balance] = useState(1250.75);
    const [showTopUp, setShowTopUp] = useState(false);
    const [showWithdraw, setShowWithdraw] = useState(false);
    const [spendingRange, setSpendingRange] = useState("monthly");

    // Sample graph data
    const spendingDataToday = [
        { name: "8AM", amount: 120 },
        { name: "12PM", amount: 250 },
        { name: "4PM", amount: 180 },
        { name: "8PM", amount: 300 },
    ];

    const recentlyPaid = [
        {
            name: "John Doe",
            type: "GCash",
            price: 500,
            reference: "REF12345",
        },
        {
            name: "Maria Cruz",
            type: "Bank Transfer",
            price: 1200,
            reference: "REF67890",
        },
        {
            name: "Alex Tan",
            type: "GCash",
            price: 800,
            reference: "REF54321",
        },
    ]


    const spendingDataWeekly = [
        { name: "Mon", amount: 500 },
        { name: "Tue", amount: 700 },
        { name: "Wed", amount: 650 },
        { name: "Thu", amount: 800 },
        { name: "Fri", amount: 900 },
        { name: "Sat", amount: 750 },
        { name: "Sun", amount: 600 },
    ];


    const spendingDataMonthly = [
        { name: "Week 1", amount: 2400 },
        { name: "Week 2", amount: 3100 },
        { name: "Week 3", amount: 2800 },
        { name: "Week 4", amount: 3500 },
    ];


    const spendingData =
        spendingRange === "today"
            ? spendingDataToday
            : spendingRange === "weekly"
                ? spendingDataWeekly
                : spendingDataMonthly; ("monthly");

    return (

        <main className="min-h-screen bg-gray-50">
            <Nav />

            <div className="p-10 max-w-10xl mx-auto w-full grid grid-cols-6 mt-19 gap-3">
                <Card className="rounded-2xl col-span-2 shadow-md">
                    <CardContent className="p-4 flex flex-col h-full">
                        <h2 className="font-semibold mb-2">Monthly Spending</h2>

                        <div className="flex gap-2 mb-3">
                            {["today", "weekly", "monthly"].map((r) => (
                                <Button
                                    key={r}
                                    variant={spendingRange === r ? "default" : "outline"}
                                    className="rounded-xl"
                                    onClick={() => setSpendingRange(r)}
                                >
                                    {r.charAt(0).toUpperCase() + r.slice(1)}
                                </Button>
                            ))}
                        </div>

                        {/* Chart */}
                        <div className="flex-1">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={spendingData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="amount"
                                        stroke="#3b82f6"
                                        strokeWidth={3}
                                        dot={{ r: 4 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* LEFT AREA */}
                <div className="col-span-2 space-y-6">
                    {/* BALANCE */}
                    <Card className="rounded-2xl shadow-md">
                        <CardContent className="p-6 flex flex-col gap-4">
                            <p className="text-gray-500">Available Balance</p>
                            <h1 className="text-5xl font-bold">₱{balance.toLocaleString()}</h1>

                            <div className="flex gap-3 mt-4">
                                <Button className="rounded-xl flex items-center gap-2" onClick={() => setShowTopUp(true)}>
                                    <Plus size={18} /> Top Up
                                </Button>
                                <Button variant="outline" className="rounded-xl flex items-center gap-2" onClick={() => setShowWithdraw(true)}>
                                    <ArrowDownRight size={18} /> Withdraw
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* TABS */}
                    <Tabs defaultValue="transactions" className="w-full">
                        <TabsList className="grid grid-cols-3 rounded-xl mb-4">
                            <TabsTrigger value="transactions">Transactions</TabsTrigger>
                            <TabsTrigger value="security">Security</TabsTrigger>
                        </TabsList>

                        {/* TRANSACTIONS */}
                        <TabsContent value="transactions">
                            <Card className="rounded-2xl shadow-md">
                                <CardContent className="p-4 flex flex-col gap-4">
                                    <h2 className="font-semibold">Transaction History</h2>

                                    <div className="flex justify-between items-center border-b pb-3">
                                        <div>
                                            <p className="font-medium">Project Payment</p>
                                            <p className="text-sm text-gray-500">Dec 7, 2025</p>
                                        </div>
                                        <p className="text-green-600 font-semibold flex items-center gap-1">
                                            <ArrowUpRight size={16} /> +₱900
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center border-b pb-3">
                                        <div>
                                            <p className="font-medium">Withdrawal</p>
                                            <p className="text-sm text-gray-500">Dec 3, 2025</p>
                                        </div>
                                        <p className="text-red-600 font-semibold flex items-center gap-1">
                                            <ArrowDownRight size={16} /> -₱500
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-medium">Top-up</p>
                                            <p className="text-sm text-gray-500">Nov 29, 2025</p>
                                        </div>
                                        <p className="text-green-600 font-semibold flex items-center gap-1">
                                            <Plus size={16} /> +₱200
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* SECURITY TAB */}
                        <TabsContent value="security">
                            <Card className="rounded-2xl shadow-md">
                                <CardContent className="p-4 space-y-4">
                                    <h2 className="font-semibold">Security Settings</h2>
                                    <Button className="w-full rounded-xl" variant="outline">Enable 2FA</Button>
                                    <Button className="w-full rounded-xl">Change Wallet PIN</Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* RIGHT AREA */}
                <div className="col-span-2 space-y-6">
                    {/* PAYMENT METHODS */}
                    <Card className="rounded-2xl shadow-md">
                        <CardContent className="p-4">
                            <h2 className="font-semibold mb-3">Payment Methods</h2>

                            <div className="space-y-3">
                                <div className="p-3 rounded-xl border flex justify-between items-center">
                                    <p>GCash •••• 9123</p>
                                    <Button variant="outline" className="rounded-xl">Remove</Button>
                                </div>
                                <div className="p-3 rounded-xl border flex justify-between items-center">
                                    <p>Bank •••• 4821</p>
                                    <Button variant="outline" className="rounded-xl">Remove</Button>
                                </div>
                            </div>

                            <Button className="w-full mt-4 rounded-xl">Add New Method</Button>
                        </CardContent>
                    </Card>

                    {/* RECENTLY PAID WORKERS */}
                    <Card className="rounded-2xl shadow-md">
                        <CardContent className="p-4 space-y-3">
                            <h2 className="font-semibold">Recently Paid</h2>

                            {recentlyPaid.map((payment, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between p-3 rounded-xl border bg-white"
                                >
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-300" />

                                        <div className="flex flex-col justify-between text-sm text-gray-600">
                                            <p className="font-medium text-black text-[1.05rem]">{payment.name}</p>
                                            <p>Payment: {payment.type}</p>
                                            <div className="text-sm text-gray-500">Ref: {payment.reference}</div>
                                        </div>
                                    </div>
                                    <p>Price: ₱{payment.price.toLocaleString()}</p>
                                    
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Top Up Modal */}
            {showTopUp && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-4">
                    <Card className="p-6 rounded-2xl w-full max-w-sm">
                        <p className="font-semibold mb-4">Top Up Wallet</p>
                        <Input placeholder="Enter amount" className="mb-4" />
                        <div className="flex gap-3">
                            <Button className="flex-1 rounded-xl">Confirm</Button>
                            <Button variant="outline" className="flex-1 rounded-xl" onClick={() => setShowTopUp(false)}>Cancel</Button>
                        </div>
                    </Card>
                </div>
            )}

            {/* Withdraw Modal */}
            {showWithdraw && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-4">
                    <Card className="p-6 rounded-2xl w-full max-w-sm">
                        <p className="font-semibold mb-4">Withdraw Funds</p>
                        <Input placeholder="Enter amount" className="mb-4" />
                        <div className="flex gap-3">
                            <Button className="flex-1 rounded-xl">Withdraw</Button>
                            <Button variant="outline" className="flex-1 rounded-xl" onClick={() => setShowWithdraw(false)}>Cancel</Button>
                        </div>
                    </Card>
                </div>
            )}
        </main>
    );
}