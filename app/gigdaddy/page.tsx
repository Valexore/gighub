"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ImageCard from "../../components/landingpage/ImageCard";
import Button from "../../components/landingpage/Button";
import Input from "../../components/landingpage/Input";
import router from "next/router";
import Head from "next/head";

// Updated services data with salary and category
const services = [
  {
    id: 1,
    imageUrl: "/images/Lawnmower.png",
    title: "Lawn Care",
    subtitle: "Part-time/Flexible",
    description: "Taga tanggal ng damo sa bahay namin.",
    location: "Mandaluyong City",
    salary: "₱500/day",
    category: "Gardening",
  },
  {
    id: 2,
    imageUrl: "/images/Barista.png",
    title: "Barista",
    subtitle: "Full-time Position",
    description:
      "Taga shake ng kape at iba pang inumin sa aming cafe. Training provided.",
    location: "Mandaluyong City",
    salary: "₱15,000/month",
    category: "Food & Beverage",
  },
  {
    id: 3,
    imageUrl: "/images/Construction.png",
    title: "Construction Laborer",
    subtitle: "Full-time Position",
    description: "Pagod na ako foreman.",
    location: "Mandaluyong City",
    salary: "₱600/day",
    category: "Construction",
  },
  {
    id: 4,
    imageUrl: "/images/Housework.png",
    title: "House Chores Specialist",
    subtitle: "Experienced Required",
    description: "LF taga linis ng bahay namin.",
    location: "Mandaluyong City",
    salary: "₱450/day",
    category: "Household",
  },
  {
    id: 5,
    imageUrl: "/images/Laundryclerk.png",
    title: "Laundry Clerk",
    subtitle: "Full-time Position",
    description:
      "Responsible for washing, drying, and folding clothes. Attention to detail required.",
    location: "Mandaluyong City",
    salary: "₱12,000/month",
    category: "Household",
  },
  {
    id: 6,
    imageUrl: "/images/Pastry.png",
    title: "Bakery Worker",
    subtitle: "Full-time Position",
    description:
      "Assist in baking and decorating pastries. Previous bakery experience is a plus.",
    location: "Mandaluyong City",
    salary: "₱13,000/month",
    category: "Food & Beverage",
  },
  {
    id: 7,
    imageUrl: "/images/Shopclerk.png",
    title: "Shop Clerk",
    subtitle: "Full-time Position",
    description:
      "Manage sales and customer service in a retail environment. Good communication skills needed.",
    location: "Mandaluyong City",
    salary: "₱14,000/month",
    category: "Retail",
  },
  {
    id: 8,
    imageUrl: "/images/Tutor.png",
    title: "Tutor",
    subtitle: "Experienced Required",
    description:
      "Provide academic support to students in various subjects. Patience and knowledge are essential.",
    location: "Mandaluyong City",
    salary: "₱200/hour",
    category: "Education",
  },
];

function EmployeeDashboard() {
  const router = useRouter();
  const handlePageButtonClick = () => {};
  // Mock user data
  const user = {
    name: "Juan Dela Cruz",
    balance: "₱2,500.00",
  };

  // State for search and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [salaryRange, setSalaryRange] = useState("All");

  // Get unique categories for filter
  const categories = [
    "All",
    ...new Set(services.map((service) => service.category)),
  ];

  // Filter services based on search and filters
  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;

    const matchesSalary =
      salaryRange === "All" ||
      (salaryRange === "Low" &&
        (service.salary.includes("₱450") || service.salary.includes("₱500"))) ||
      (salaryRange === "Medium" &&
        (service.salary.includes("₱12,000") ||
          service.salary.includes("₱13,000") ||
          service.salary.includes("₱14,000"))) ||
      (salaryRange === "High" && service.salary.includes("₱15,000"));

    return matchesSearch && matchesCategory && matchesSalary;
  });

  // Create custom subtitle for ImageCard
  const createSubtitle = (service: any) => {
    return (
      <div className="flex flex-col gap-1">
        <span className="text-primary-600 font-semibold text-sm">
          {service.salary}
        </span>
        <span className="text-gray-500 text-xs">{service.subtitle}</span>
        <span className="text-primary-600 text-xs bg-primary-50 px-2 py-1 rounded-full mt-1 inline-block">
          {service.category}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar: hidden on mobile, visible on md+ */}
      <div className="w-64 bg-linear-to-b from-primary-50 to-white shadow-xl border-r border-gray-200 flex-col sticky top-0 h-screen hidden md:flex">
        {/* Enhanced Logo Section */}
        <div className="p-6 border-b border-primary-100 bg-white">
          <div className="flex items-center space-x-3">
            <div>
              <img src="/gigdaddy-logo2.png" alt="Gigdaddy Logo" className="w-64 h-16" />
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Menu */}
        {/* Remix Icon CDN Head */}
        <Head>
          <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
        </Head>
        <nav className="flex-1 p-4">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
              Main Menu
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-primary-700 bg-primary-50 rounded-lg border border-primary-200 shadow-sm"
                >
                  <i className="ri-home-2-line mr-3 text-lg"></i>
                  <span className="font-semibold">Dashboard</span>
                </a>
              </li>
              <li>
                <div
                  className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-primary-600 hover:shadow-sm rounded-lg transition-all duration-200 group"
                  onClick={() => router.push("/gigdaddy/myjobs")}
                >
                  <i className="ri-briefcase-line mr-3 text-lg group-hover:scale-110 transition-transform"></i>
                  <span>My Jobs</span>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-primary-600 hover:shadow-sm rounded-lg transition-all duration-200 group"
                >
                  <i className="ri-file-list-2-line mr-3 text-lg group-hover:scale-110 transition-transform"></i>
                  <span>Applications</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-primary-600 hover:shadow-sm rounded-lg transition-all duration-200 group"
                >
                  <i className="ri-money-dollar-circle-line mr-3 text-lg group-hover:scale-110 transition-transform"></i>
                  <span>Earnings</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-primary-600 hover:shadow-sm rounded-lg transition-all duration-200 group"
                >
                  <i className="ri-message-2-line mr-3 text-lg group-hover:scale-110 transition-transform"></i>
                  <span>Message</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
              Account
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-primary-600 hover:shadow-sm rounded-lg transition-all duration-200 group"
                >
                  <i className="ri-settings-3-line mr-3 text-lg group-hover:scale-110 transition-transform"></i>
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Enhanced User Profile Section */}
        <div className="p-4 border-t border-primary-100 bg-white">
          <div className="flex items-center space-x-3 p-3 bg-linear-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-100">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-semibold text-sm">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {user.name}
              </p>
              <p className="text-xs text-primary-600 font-medium">
                Balance: {user.balance}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
           {/* Mobile header */}
          <div className="flex md:hidden items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <img src="/gigdaddy-logo2.png" alt="Gigdaddy Logo" className="h-10 w-auto" />
            </div>
            <div className="w-9 h-9 bg-primary-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-semibold text-sm">
                {user.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
          </div>
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex justify-between items-center px-8 py-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Dashboard Overview
              </h2>
              <p className="text-sm text-gray-500">
                Manage your jobs and applications
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="primary"
                size="sm"
                onClick={() => console.log("Browse jobs clicked")}
              >
                Help
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Welcome Section - Preserved as requested */}
          <section className="mb-8">
            <div className="bg-primary-600 rounded-2xl p-8 text-white shadow-lg">
              <h2 className="text-3xl font-bold mb-2">
                Welcome back, {user.name}!
              </h2>
              <p className="text-primary-100 mb-4">
                Ready to find your next job opportunity?
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => console.log("Browse jobs clicked")}
              >
                Browse Available Jobs
              </Button>
            </div>
          </section>

          {/* Available Services Section with Search and Filters */}
          <section className="mb-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Available Services
              </h2>

              {/* Search and Filter Controls */}
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                {/* Search Input */}
                <div className="text-black flex-1 min-w-[200px]">
                    <Input
                      placeholder="Search jobs..."
                      value={searchTerm}
                      onChange={setSearchTerm}
                      icon={<i className="ri-search-line text-lg text-gray-400"></i>}
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="text-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                {/* Salary Range Filter */}
                <select
                  value={salaryRange}
                  onChange={(e) => setSalaryRange(e.target.value)}
                  className="text-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="All">All Salaries</option>
                  <option value="Low">Low (₱450-500/day)</option>
                  <option value="Medium">Medium (₱12k-14k/month)</option>
                  <option value="High">High (₱15k+/month)</option>
                </select>
              </div>
            </div>

            {/* Services Grid with custom gap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="flex justify-center">
                  <ImageCard
                    imageUrl={service.imageUrl}
                    imageAlt={service.title}
                    title={service.title}
                    subtitle={createSubtitle(service)}
                    description={service.description}
                    location={service.location}
                    size="md"
                    imageFit="cover"
                    action={
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => console.log("Apply for", service.title)}
                      >
                        Apply Now
                      </Button>
                    }
                    onClick={() => console.log("Card clicked", service.id)}
                    className="w-full max-w-[280px] hover:shadow-lg transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No jobs found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </section>

          {/* Recent Activity */}
          <section className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-checkbox-circle-line text-primary-600"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Lawn Care Job Completed
                    </p>
                    <p className="text-sm text-gray-500">
                      Yesterday at 2:30 PM
                    </p>
                  </div>
                </div>
                <span className="text-primary-600 font-medium">+₱500</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-time-line text-blue-600"></i>
                  </div>
                                  <div className="text-gray-400 text-6xl mb-4"><i className="ri-search-eye-line"></i></div>
                  <div>
                    <p className="font-medium text-gray-900">
                      New Lawn Care Job Available
                    </p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Apply
                </Button>
              </div>
            </div>
          </section>
        </main>

      </div>
      {/* Bottom Navigation Bar (Mobile Only) */}
<div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md">
  <div className="flex justify-around py-3 text-gray-600">

    {/* Dashboard */}
    <button
      className="flex flex-col items-center text-sm text-primary-600"
      onClick={() => router.push("/gigdaddy/dashboard")}
    >
      <i className="ri-home-4-line text-2xl"></i>
      <span className="text-xs">Home</span>
    </button>

    {/* My Jobs */}
    <button
      className="flex flex-col items-center text-sm"
      onClick={() => router.push("/gigdaddy/myjobs")}
    >
      <i className="ri-briefcase-line text-2xl"></i>
      <span className="text-xs">My Jobs</span>
    </button>

    {/* Applications */}
    <button
      className="flex flex-col items-center text-sm"
      onClick={() => router.push("/gigdaddy/applications")}
    >
      <i className="ri-file-list-3-line text-2xl"></i>
      <span className="text-xs">Apply</span>
    </button>

   

    {/* Earnings */}
    <button
      className="flex flex-col items-center text-sm"
      onClick={() => router.push("/gigdaddy/profile")}
    >
      <i className="ri-money-dollar-circle-line text-2xl"></i>
      <span className="text-xs">Earnings</span>
    </button>

     {/* Messages */}
    <button
      className="flex flex-col items-center text-sm"
      onClick={() => router.push("/gigdaddy/messages")}
    >
      <i className="ri-message-2-line text-2xl"></i>
      <span className="text-xs">Messages</span>
    </button>
  </div>
</div>

    </div>
  );
}

export default EmployeeDashboard;
