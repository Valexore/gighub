"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "../../../components/landingpage/Button";
import Input from "../../../components/landingpage/Input";
import Card from "../../../components/landingpage/Card";
import ConfirmationModal from "../../../components/landingpage/ConfirmationModal";
import SavedJobCard from "./components/SavedJobCard";
import ActiveJobCard from "./components/ActiveJobCard";
import CompletedJobCard from "./components/CompletedJobCard";
import CanceledJobCard from "./components/CanceledJobCard";
import Head from "next/head";

// Define specific TypeScript interfaces for each job type
interface BaseJob {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  salary: string;
  category: string;
}

interface SavedJob extends BaseJob {
  postedDate: string;
  savedDate: string;
}

interface ActiveJob extends BaseJob {
  status: string;
  startDate: string;
  employer: string;
  progress: number;
}

interface CompletedJob extends BaseJob {
  status: string;
  completionDate: string;
  employer: string;
  rating: number;
  earnings: string;
}

interface CanceledJob extends BaseJob {
  status: string;
  cancelDate: string;
  employer: string;
  reason: string;
}

type Job = SavedJob | ActiveJob | CompletedJob | CanceledJob;

// Updated jobs data with proper typing
const jobsData = {
  saved: [
    {
      id: 1,
      imageUrl: "/images/Lawnmower.png",
      title: "Lawn Care",
      subtitle: "Part-time/Flexible",
      description: "Taga tanggal ng damo sa bahay namin.",
      location: "Mandaluyong City",
      salary: "₱500/day",
      category: "Gardening",
      postedDate: "2024-01-15",
      savedDate: "2024-01-16",
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
      postedDate: "2024-01-10",
      savedDate: "2024-01-14",
    },
  ] as SavedJob[],
  active: [
    {
      id: 3,
      imageUrl: "/images/Construction.png",
      title: "Construction Laborer",
      subtitle: "Full-time Position",
      description: "Pagod na ako foreman.",
      location: "Mandaluyong City",
      salary: "₱600/day",
      category: "Construction",
      status: "In Progress",
      startDate: "2024-01-20",
      employer: "BuildRight Construction",
      progress: 65,
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
      status: "Starting Soon",
      startDate: "2024-01-25",
      employer: "Maria Santos",
      progress: 0,
    },
  ] as ActiveJob[],
  completed: [
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
      status: "Completed",
      completionDate: "2024-01-18",
      employer: "CleanWash Laundry",
      rating: 5,
      earnings: "₱12,000",
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
      status: "Completed",
      completionDate: "2024-01-12",
      employer: "SweetBakes Cafe",
      rating: 4,
      earnings: "₱13,000",
    },
  ] as CompletedJob[],
  canceled: [
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
      status: "Canceled",
      cancelDate: "2024-01-16",
      employer: "RetailPlus Store",
      reason: "Schedule conflict",
    },
  ] as CanceledJob[],
};

function MyJobsPage() {
  const router = useRouter();

  // Mock user data
  const user = {
    name: "Juan Dela Cruz",
    balance: "₱2,500.00",
  };

  // State management
  const [activeTab, setActiveTab] = useState<
    "saved" | "active" | "completed" | "canceled"
  >("saved");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Get unique categories for filter
  const allJobs = [
    ...jobsData.saved,
    ...jobsData.active,
    ...jobsData.completed,
    ...jobsData.canceled,
  ];
  const categories = ["All", ...new Set(allJobs.map((job) => job.category))];

  // Get current jobs based on active tab with proper typing
  const currentJobs = jobsData[activeTab];

  // Filter jobs based on search and filters
  const filteredJobs = currentJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ('employer' in job && job.employer.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Handle job actions with proper typing
  const handleRemoveSaved = (job: SavedJob) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleConfirmRemove = () => {
    console.log("Removing job:", selectedJob);
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleApplyJob = (job: SavedJob) => {
    console.log("Applying for job:", job);
    // Add application logic here
  };

  const handleViewDetails = (job: Job) => {
    console.log("Viewing details for job:", job);
    // Add view details logic here
  };

  const handleHelpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Help clicked");
  };

  const handleBrowseJobsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/gigdaddy");
  };

  // Type guard functions
  const isSavedJob = (job: Job): job is SavedJob => {
    return 'savedDate' in job;
  };

  const isActiveJob = (job: Job): job is ActiveJob => {
    return 'progress' in job;
  };

  const isCompletedJob = (job: Job): job is CompletedJob => {
    return 'rating' in job;
  };

  const isCanceledJob = (job: Job): job is CanceledJob => {
    return 'reason' in job;
  };

  // Render appropriate card based on active tab
  const renderJobCard = (job: Job) => {
    switch (activeTab) {
      case "saved":
        if (isSavedJob(job)) {
          return (
            <SavedJobCard
              key={job.id}
              job={job}
              onApply={handleApplyJob}
              onRemove={handleRemoveSaved}
              onViewDetails={handleViewDetails}
            />
          );
        }
        return null;
      case "active":
        if (isActiveJob(job)) {
          return (
            <ActiveJobCard
              key={job.id}
              job={job}
              onViewDetails={handleViewDetails}
            />
          );
        }
        return null;
      case "completed":
        if (isCompletedJob(job)) {
          return (
            <CompletedJobCard
              key={job.id}
              job={job}
              onViewDetails={handleViewDetails}
            />
          );
        }
        return null;
      case "canceled":
        if (isCanceledJob(job)) {
          return (
            <CanceledJobCard
              key={job.id}
              job={job}
              onViewDetails={handleViewDetails}
            />
          );
        }
        return null;
      default:
        return null;
    }
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
                <div
                  className="flex items-center px-4 py-3 text-gray-600 hover:bg-white hover:text-primary-600 hover:shadow-sm rounded-lg transition-all duration-200 group cursor-pointer"
                  onClick={() => router.push("/gigdaddy")}
                >
                  <i className="ri-home-2-line mr-3 text-lg"></i>
                  <span>Dashboard</span>
                </div>
              </li>
              <li>
                <div className="flex items-center px-4 py-3 text-primary-700 bg-primary-50 rounded-lg border border-primary-200 shadow-sm cursor-pointer">
                  <i className="ri-briefcase-line mr-3 text-lg"></i>
                  <span className="font-semibold">My Jobs</span>
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
        {/* Responsive Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          {/* Desktop header */}
          <div className="hidden md:flex justify-between items-center px-8 py-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                My Jobs Management
              </h2>
              <p className="text-sm text-gray-500">
                Track and manage your job applications and work history
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="primary" size="sm" onClick={handleHelpClick}>
                Help
              </Button>
              {/* Profile avatar */}
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-semibold text-sm">
                  {user.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
            </div>
          </div>
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
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Jobs Management Section */}
          <section className="mb-8">
            {/* Tab Navigation */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="flex border-b border-gray-200">
                {[
                  {
                    key: "saved" as const,
                    label: "Saved Jobs",
                    count: jobsData.saved.length,
                  },
                  {
                    key: "active" as const,
                    label: "Active Jobs",
                    count: jobsData.active.length,
                  },
                  {
                    key: "completed" as const,
                    label: "Completed",
                    count: jobsData.completed.length,
                  },
                  {
                    key: "canceled" as const,
                    label: "Canceled",
                    count: jobsData.canceled.length,
                  },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                      activeTab === tab.key
                        ? "text-primary-600 border-b-2 border-primary-600 bg-primary-50"
                        : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                    }`}
                  >
                    {tab.label}
                    <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Search and Filter Controls */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-4">
              {/* Section label only on desktop */}
              <h2 className="hidden md:block text-2xl font-bold text-gray-900">
                {activeTab === "saved" && "Your Saved Jobs"}
                {activeTab === "active" && "Active Jobs"}
                {activeTab === "completed" && "Completed Jobs"}
                {activeTab === "canceled" && "Canceled Jobs"}
              </h2>

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
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSelectedCategory(e.target.value)
                  }
                  className="text-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Jobs Grid with Enhanced Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredJobs.map(renderJobCard)}
            </div>

            {/* No Results Message */}
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">
                  {activeTab === "saved" && <i className="ri-bookmark-line"></i>}
                  {activeTab === "active" && <i className="ri-flashlight-line"></i>}
                  {activeTab === "completed" && <i className="ri-checkbox-circle-line"></i>}
                  {activeTab === "canceled" && <i className="ri-close-circle-line"></i>}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No {activeTab} jobs found
                </h3>
                <p className="text-gray-500">
                  {activeTab === "saved" &&
                    "Start saving jobs that interest you!"}
                  {activeTab === "active" &&
                    "You currently have no active jobs."}
                  {activeTab === "completed" &&
                    "Your completed jobs will appear here."}
                  {activeTab === "canceled" && "No canceled jobs found."}
                </p>
              </div>
            )}
          </section>
        </main>
 {/* Bottom Navigation Bar (Mobile Only) */}
<div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md">
  <div className="flex justify-around py-3 text-gray-600">

    {/* Dashboard */}
    <button
      className="flex flex-col items-center text-sm"
      onClick={() => router.push("/gigdaddy")}
    >
      <i className="ri-home-4-line text-2xl"></i>
      <span className="text-xs">Home</span>
    </button>

    {/* My Jobs */}
    <button
      className="flex flex-col items-center text-sm text-primary-600"
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

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmRemove}
        title="Remove Saved Job"
        message="Are you sure you want to remove this job from your saved list?"
        confirmText="Remove"
        cancelText="Keep"
        variant="warning"
      />
    </div>
  );
}

export default MyJobsPage;