'use client'
import SideNav from "@/components/gigbosspage/browse/SideNav";
import Nav from "@/components/gigbosspage/Nav";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const workers = [
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
        availability: "available",
        status: "highest success",

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
        availability: "available",
        status: "top rated"
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
        availability: "unavailable",
        status: "highest success"
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
        availability: "available",
        status: "most experienced"
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
        availability: "unavailable",
        status: "none"
    }
];


export default function Browse() {
    const router = useRouter();

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
                                <Button onClick={() => router.push('/gigbosses/search')}className="bg-blue-600 hover:bg-blue-200 hover:text-black hover:border hover:border-blue-600">
                                    <i className="ri-search-ai-line"></i> Look for more
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 gap-6 mt-6">
                                {workers.map((worker) => (
                                    <div
                                        key={worker.id}
                                        className="border p-5 rounded-xl shadow-sm hover:shadow-md transition"
                                    >
                                        {/* Top section */}
                                        <div className="flex items-start gap-4">
                                            {/* Avatar */}
                                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                                                {worker.avatar ? (
                                                    <img src={worker.avatar} className="w-full h-full rounded-full" />
                                                ) : (
                                                    <span className="text-gray-500">No Img</span>
                                                )}
                                            </div>

                                            {/* Name + title */}
                                            <div className="flex-1">
                                                <h2 className="text-lg font-semibold">{worker.name}</h2>
                                                <p className="text-sm text-gray-500">{worker.title}</p>

                                                <p className="text-sm text-gray-400">{worker.location}</p>
                                            </div>

                                            {/* Status badge */}
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
        </main>
    )
}