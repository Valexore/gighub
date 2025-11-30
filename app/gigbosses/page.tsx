"use client";

import { useState, useRef } from "react";

import Link from "next/link"
import Image from "next/image"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "@/components/ui/select"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import {
    SearchIcon,
    CircleUser,
    Bell,
    BadgePlus,
    Smartphone,
    LayoutGrid,
    LayoutList,
    Ellipsis,
    Axe
} from "lucide-react"
import { ArrowLeft, ArrowRight } from "lucide-react";
interface TreeBox {
    id: number;
    title: string;
    details: string;
}

export default function Bosses() {
    const [active, setActive] = useState<"grid" | "list">("grid");
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollAmount = 432; // adjust to your box width + gap

    const scrollLeft = () => {
        containerRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    };

    const scrollRight = () => {
        containerRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    const boxes = [
        { id: 1, title: "Cut 10 meter tree", details: "Details" },
        { id: 2, title: "Cut 8 meter tree", details: "Details" },
        { id: 3, title: "Cut 12 meter tree", details: "Details" },
        { id: 4, title: "Cut 6 meter tree", details: "Details" },
        { id: 5, title: "Cut 8 meter tree", details: "Details" },
        { id: 6, title: "Cut 12 meter tree", details: "Details" },
        { id: 7, title: "Cut 6 meter tree", details: "Details" }, // slider triggers now
    ];
    return (
        <main>
            <nav className="bg-white sticky top-0 z-50">
                <div className="">
                    <div className="flex items-center justify-between w-full h-20 px-10">
                        {/* left Side */}
                        <div className="flex gap-8">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <Image src="/gigdaddy-logo.png" alt="GigDaddy Logo" height={150} width={150} />
                                </Link>
                            </div>

                            <div className="flex items-center gap-4">
                                <Select>
                                    <SelectTrigger
                                        className="w-[100px] border-0 shadow-none px-0 text-black data-[placeholder]:text-black data-[placeholder]:opacity-100"
                                    >
                                        <SelectValue placeholder="Post a gig" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Post a gig</SelectLabel>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                                <Select>
                                    <SelectTrigger
                                        className="w-[100px] border-0 shadow-none px-0 text-black data-[placeholder]:text-black data-[placeholder]:opacity-100"
                                    >
                                        <SelectValue placeholder="Manage gig" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Manage gig</SelectLabel>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger
                                        className="w-[100px] border-0 shadow-none px-0 text-black data-[placeholder]:text-black data-[placeholder]:opacity-100"
                                    >
                                        <SelectValue placeholder="Reports" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Reports</SelectLabel>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger
                                        className="w-[100px] border-0 shadow-none px-0 text-black data-[placeholder]:text-black data-[placeholder]:opacity-100"
                                    >
                                        <SelectValue placeholder="Messages" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Messages</SelectLabel>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <InputGroup>
                                <InputGroupInput placeholder="Search..." />
                                <InputGroupAddon>
                                    <SearchIcon />
                                </InputGroupAddon>
                                <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
                            </InputGroup>
                            <div><Bell /></div>
                            <div><CircleUser /></div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="mt-3">
                <div className="flex items-center justify-between px-25">
                    <header className="text-[1.5rem] font-[500]">Welcome, Ivanotch</header>
                    <Button className="bg-primary-600 text-white w-[150px] h-[45px] text-[1.1rem] gap-2" variant="outline">
                        <BadgePlus />
                        Post a gig
                    </Button>
                </div>
            </div>

            <div className="px-25">
                <header className="text-[1.95rem] font-[400] my-[1rem]">Finish setting up to hire a GigDaddy</header>
                <div className="flex gap-4">
                    <div className="flex border-1 rounded-md p-5">
                        <div className="flex flex-col ">
                            <p className="text-slate-600 text-[0.9rem] font-[400]">Required to publish a gig</p>
                            <header className="text-[1.3rem]">Verify Phone Number</header>
                            <p className="text-[1rem]">
                                Confirm it's you, to be able to publish your first gig post.
                            </p>
                        </div>
                        <Smartphone size={50} strokeWidth={1.3} />
                    </div>
                    <div className="flex border-1 rounded-md p-5">
                        <div className="flex flex-col ">
                            <p className="text-slate-600 text-[0.9rem] font-[400]">Required to publish a gig</p>
                            <header className="text-[1.3rem]">Add a Billing Method</header>
                            <p className="text-[1rem]">
                                This can increase your hiring speed by up to 3x. There's no cost untile you hire.
                            </p>
                        </div>
                        <i className="ri-bank-card-line text-[2rem] "></i>
                    </div>
                    <div className="flex border-1 rounded-md p-5">
                        <div className="flex flex-col ">
                            <p className="text-slate-600 text-[0.9rem] font-[400]">Required to publish a gig</p>
                            <header className="text-[1.3rem]">Verify Email Address</header>
                            <p className="text-[1rem]">
                                Confirm your email, this will be used to update and notify you.
                            </p>
                        </div>
                        <i className="ri-mail-ai-line text-[2rem]"></i>
                    </div>
                </div>
            </div>

            <div className="px-25 mt-[3rem]">
                <div className="flex justify-between items-center">
                    <header className="text-[1.95rem] font-[400] my-[1rem]">Overview</header>

                    {/* Tabs */}
                    <div className="flex rounded-full border border-gray-300 overflow-hidden">

                        {/* GRID TAB */}
                        <button
                            onClick={() => setActive("grid")}
                            className={`flex items-center justify-center w-10 h-10 transition ${active === "grid" ? "bg-primary-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                        >
                            <LayoutGrid className="w-5 h-5" />
                        </button>

                        {/* LIST TAB */}
                        <button
                            onClick={() => setActive("list")}
                            className={`flex items-center justify-center w-10 h-10 transition ${active === "list" ? "bg-primary-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                        >
                            <LayoutList className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {active === "grid" ? (
                    <div className="relative">
                        {/* Left Arrow */}
                        {boxes.length > 3 && (
                            <button
                                onClick={scrollLeft}
                                className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow z-10"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                        )}

                        {/* Boxes Container */}
                        <div
                            ref={containerRef}
                            className={`flex gap-4 overflow-hidden`}
                        >
                            {boxes.map((box) => (
                                <div
                                    key={box.id}
                                    className="min-w-[416px] flex-shrink-0 border border-slate-400 rounded-sm p-5"
                                >
                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-primary-100 rounded-full p-3">
                                                <Axe />
                                            </div>
                                            <p>{box.title}</p>
                                        </div>
                                        <Ellipsis />
                                    </div>

                                    {/* Details */}
                                    <div className="mb-2">{box.details}</div>

                                    {/* Action */}
                                    <div>Button Action</div>
                                </div>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        {boxes.length > 3 && (
                            <button
                                onClick={scrollRight}
                                className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow z-10"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                ) : (
                    <div>list</div>
                )}
            </div>
        </main>
    )
}