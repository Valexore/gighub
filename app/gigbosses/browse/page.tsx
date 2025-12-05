'use client'
import SideNav from "@/components/gigbosspage/browse/SideNav";
import Nav from "@/components/gigbosspage/Nav";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Worker = {
    id: number;
    avatar: string;
    name: string;
    title: string;
    location: string;
    jobSuccess: string;
    jobCount: string;
    tags: string[];
    description: string;
    availability: string;
    status: string;
    workingOn: string;
};

const workers: Worker[] = [
    {
        id: 1,
        avatar: "",
        name: "Sophia R.",
        title: "Cleaning | E-Commerce",
        location: "Quezon City",
        jobSuccess: "92%",
        jobCount: "48",
        tags: ["Packing", "Shipping", "Inventory Management", "Restocking", "Order Fulfillment"],
        description: "Reliable gig worker handling multiple tasks efficiently. I specialize in shipping and packing but am skilled in inventory management and restocking for e-commerce businesses.",
        availability: "working",
        status: "highest success",
        workingOn: "Pack 30 Medium sizd orders"
    },
    {
        id: 2,
        avatar: "",
        name: "Daniel M.",
        title: "E-Commerce | Digital Tasks",
        location: "Makati",
        jobSuccess: "85%",
        jobCount: "60",
        tags: ["Labeling", "Sorting", "Inventory Tracking", "Quality Check", "Delivery"],
        description: "Experienced in warehouse operations and e-commerce order fulfillment. I can manage labeling, sorting, and quality checks while ensuring timely deliveries.",
        availability: "working",
        status: "top rated",
        workingOn: "Manage Inventory"
    },
    {
        id: 3,
        avatar: "",
        name: "Ava L.",
        title: "Cleaning | Digital Tasks",
        location: "Pasig",
        jobSuccess: "90%",
        jobCount: "52",
        tags: ["Packing", "Labeling", "Inventory Audit", "Restocking", "Shipping"],
        description: "Efficient operations specialist for e-commerce tasks. I excel in packing and labeling while keeping inventory organized and performing audits for smooth operations.",
        availability: "working",
        status: "highest success",
        workingOn: "Label and Pack 100 Items for shipping"
    },
    {
        id: 4,
        avatar: "",
        name: "Ethan C.",
        title: "Delivery | E-Commerce",
        location: "Taguig",
        jobSuccess: "88%",
        jobCount: "41",
        tags: ["Order Picking", "Packaging", "Labeling", "Inventory Management", "Delivery"],
        description: "Dedicated fulfillment specialist ready to handle multiple short fulfillment tasks. Skilled in packaging, order picking, labeling, and timely delivery.",
        availability: "working",
        status: "most experienced",
        workingOn: "Manage Order Processing"
    },
    {
        id: 5,
        avatar: "",
        name: "Isabella P.",
        title: "Digital Tasks | E-Commerce",
        location: "Mandaluyong",
        jobSuccess: "95%",
        jobCount: "70",
        tags: ["Packing", "Sorting", "Stock Replenishment", "Shipping", "Quality Control"],
        description: "Organized and dependable logistics coordinator. I manage packing, sorting, and stock replenishment while maintaining quality control in all e-commerce tasks.",
        availability: "working",
        status: "none",
        workingOn: "Pack and Label 34 large items for shipping"
    }
];


export default function Browse() {
    const router = useRouter();
    const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);

    return (
        <main>
            <Nav />
            <div className="flex flex-col mx-23 pt-10">
                <div className="flex mt-6">
                    <SideNav />

                    <div className="w-[75%]">
                        <div>
                            <div className="pl-2 flex justify-between items-center">
                                <div>
                                    <div className="text-[1.5rem] font-semibold leading-none">Your GigDaddy</div>
                                    <p className="text-[1.1rem] text-gray-500">Look up people you're currently working with</p>
                                </div>
                                <Button onClick={() => router.push('/gigbosses/search')} className="bg-blue-600 hover:bg-blue-200 hover:text-black hover:border hover:border-blue-600">
                                    <i className="ri-search-ai-line"></i> Look for more
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 gap-6 mt-6">
                                {workers.map((worker) => (
                                    <div
                                        key={worker.id}
                                        onClick={() => setSelectedWorker(worker)}
                                        className="border p-5 rounded-xl shadow-sm hover:shadow-md transition bg-white cursor-pointer"
                                    >
                                        {/* Top section */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                                                {worker.avatar ? (
                                                    <img src={worker.avatar} className="w-full h-full rounded-full" />
                                                ) : (
                                                    <span className="text-gray-500">No Img</span>
                                                )}
                                            </div>

                                            <div className="flex-1">
                                                <h2 className="text-lg font-semibold">{worker.name}</h2>
                                                <p className="text-sm text-gray-500">{worker.title}</p>
                                                <p className="text-sm text-gray-400">{worker.location}</p>
                                            </div>

                                            {worker.status !== "none" && (
                                                <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full capitalize">
                                                    {worker.status}
                                                </span>
                                            )}
                                        </div>

                                        {/* Success + job count */}
                                        <div className="flex gap-6 mt-4 text-sm text-gray-700">
                                            <p><span className="font-semibold">{worker.jobSuccess}</span> job success</p>
                                            <p><span className="font-semibold">{worker.jobCount}</span> jobs</p>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {worker.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-gray-600 mt-4">
                                            {worker.description}
                                        </p>

                                        {/* Currently Working On */}
                                        <div className="mt-5 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                                            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                                                Currently Working On
                                            </p>
                                            <p className="text-sm text-blue-900 mt-1 font-medium">
                                                {worker.workingOn}
                                            </p>
                                        </div>

                                        {/* Availability */}
                                        <div className="mt-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs ${worker.availability === "available"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-600"
                                                    }`}
                                            >
                                                {worker.availability}
                                            </span>
                                        </div>
                                    </div>

                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {selectedWorker && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                    onClick={() => setSelectedWorker(null)}
                />
            )}
            {/* Slide-over Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[28rem] bg-white shadow-2xl border-l 
                transform transition-transform duration-300 z-50 
                ${selectedWorker ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b">
                    <h2 className="text-xl font-semibold">Gig Worker Details</h2>
                    <button
                        onClick={() => setSelectedWorker(null)}
                        className="text-gray-500 hover:text-black text-xl"
                    >
                        &times;
                    </button>
                </div>

                {/* Content */}
                {selectedWorker && (
                    <div className="p-5">

                        {/* Name */}
                        <h3 className="text-2xl font-bold">{selectedWorker.name}</h3>
                        <p className="text-gray-500">{selectedWorker.title}</p>
                        <p className="text-gray-400 mt-1">{selectedWorker.location}</p>

                        {/* Working On */}
                        <div className="mt-6 p-4 bg-blue-50 flex items-center justify-between border border-blue-100 rounded-xl">
                            <div>
                                <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                                    Currently Working On
                                </p>
                                <p className="text-sm text-blue-900 mt-1 font-medium">
                                    {selectedWorker.workingOn}
                                </p>
                            </div>
                            <div className="rounded-md bg-blue-800">
                                <i className="ri-arrow-right-double-line text-[2.5rem] text-white leading-none"></i>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-sm mt-5">
                            {selectedWorker.description}
                        </p>

                        {/* Tags */}
                        <div className="mt-6">
                            <p className="font-semibold mb-2">Skills</p>
                            <div className="flex flex-wrap gap-2">
                                {selectedWorker.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-6 flex gap-6">
                            <div>
                                <p className="text-lg font-bold">{selectedWorker.jobSuccess}</p>
                                <p className="text-sm text-gray-500">Job Success</p>
                            </div>
                            <div>
                                <p className="text-lg font-bold">{selectedWorker.jobCount}</p>
                                <p className="text-sm text-gray-500">Jobs Completed</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="font-semibold mb-2">Location</p>

                            <iframe
                                width="100%"
                                height="200"
                                loading="lazy"
                                allowFullScreen
                                className="rounded-lg border"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.679441751652!2d121.02001667592806!3d14.554729978216341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90b3d8d1c93%3A0x6a68132e9e339392!2sMakati%20City!5e0!3m2!1sen!2sph!4v1704094000000!5m2!1sen!2sph"
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}