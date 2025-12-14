"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  SearchIcon,
  CircleUser,
  Bell,
  BadgePlus,
  Smartphone,
  House,
  LayoutList,
  Ellipsis,
  Hammer,
  NotepadText,
  PhilippinePeso,
  MessageSquare,
  ChevronRight,
  CheckCircle,
  BrushCleaning,
  Clock,
  TrendingUp,
  Users,
  Star,
  MapPin,
  Heart,
  ArrowRight,
  ArrowLeft,
  UserRoundSearch,
  Mail,
  CreditCard,
  Package 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import Nav from "@/components/gigbosspage/Nav";

export default function Bosses() {
  const router = useRouter();
  const [active, setActive] = useState<"grid" | "list">("grid");
  const [open, setOpen] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const gigDaddyProfile = useRef<HTMLDivElement>(null);

  const scrollAmount = 425;
  const scrollAmountProfile = 426;

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollProfileLeft = () => {
    gigDaddyProfile.current?.scrollBy({
      left: -scrollAmountProfile,
      behavior: "smooth",
    });
  };

  const scrollProfileRight = () => {
    gigDaddyProfile.current?.scrollBy({
      left: scrollAmountProfile,
      behavior: "smooth",
    });
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const boxes = [
    {
      id: 1,
      title: "Pack 100 medium sized orders",
      button: "Add Details",
      details: "Details",
      icon: <Package  className="w-5 h-5" color="blue" />,
      color: "bg-primary-50",
    },
    {
      id: 2,
      title: "Fix leaking faucet",
      button: "Add Budget",
      details: "Add your budget to continue",
      icon: <Hammer  className="w-5 h-5" color="blue" />,
      color: "bg-primary-50",
    },
    {
      id: 3,
      title: "House Cleaning",
      button: "Add Contact",
      details: "Add your contact to continue",
      icon: <BrushCleaning className="w-5 h-5" color="blue"/>,
      color: "bg-primary-50",
    },
    {
      id: 4,
      title: "Power wash my lawn",
      button: "Add Skills",
      details: "Add the skills you need to continue",
      icon: <BrushCleaning  className="w-5 h-5" color="blue"/>,
      color: "bg-primary-50",
    },
  ];

  const setupCards = [
    {
      id: 1,
      title: "Verify Phone Number",
      description: "Confirm it's you, to be able to publish your first gig post.",
      icon: <Smartphone className="w-6 h-6" />,
      action: () => setOpen(true),
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      id: 2,
      title: "Add Billing Method",
      description: "Increase hiring speed by up to 3x. No cost until you hire.",
      icon: <CreditCard className="w-6 h-6" />,
      action: () => { },
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      id: 3,
      title: "Verify Email Address",
      description: "Confirm your email for updates and notifications.",
      icon: <Mail className="w-6 h-6" />,
      action: () => setOpenEmail(true),
      color: "bg-purple-500/10 text-purple-600",
    },
  ];

  const gigDaddy = [
    {
      id: 1,
      name: "Matt Perez",
      location: "Manila",
      jobSuccess: 100,
      jobs: "56",
      hourly: "₱70/hr",
      title: "Manual Labor | Knitting | Dishwasher",
      description: "This is a description of my profile, i do varous task with complete and trustable information using verified account information.",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Jay Untalan",
      location: "Quezon City",
      jobSuccess: 60,
      jobs: "11",
      hourly: "₱50/hr",
      title: "Cleaning | Knitting | Dishwasher",
      description: "This is a description of my profile, i do varous task with complete and trustable information using verified account information.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Matthew Perez",
      location: "San Mateo",
      jobSuccess: 80,
      jobs: "45",
      hourly: "₱80/hr",
      title: "Construction | Knitting | Dishwasher",
      description: "This is a description of my profile, i do varous task with complete and trustable information using verified account information.",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Hans Dela cruz",
      location: "Marikina",
      jobSuccess: 60,
      jobs: "63",
      hourly: "₱40/hr",
      title: "Writing Services | Knitting | Dishwasher",
      description: "This is a description of my profile, i do varous task with complete and trustable information using verified account information.",
      rating: 4.3,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20 md:pb-0">
      <Nav />

      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-20 right-4 z-40 md:hidden flex flex-col gap-2">
        <Button
          onClick={() => router.push("/gigbosses/postgig")}
          className="bg-primary-600 text-white rounded-full p-3 shadow-lg"
          size="icon"
        >
          <BadgePlus className="w-5 h-5" />
        </Button>
        <Button
          onClick={() => router.push("/gigbosses/search")}
          className="bg-white text-primary-600 border border-primary-600 rounded-full p-3 shadow-lg"
          size="icon"
        >
          <UserRoundSearch className="w-5 h-5" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-6 mt-20 pt-2 lg:px-8 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <section className="mt-6 md:mt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Welcome back, Matt 👋
              </h1>
              <p className="text-gray-600 mt-2">
                Ready to find the perfect GigDaddy for your tasks?
              </p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button
                onClick={() => router.push("/gigbosses/postgig")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md"
              >
                <BadgePlus className="w-4 h-4 mr-2" />
                Post a Gig
              </Button>
              <Button
                onClick={() => router.push("/gigbosses/search")}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <UserRoundSearch className="w-4 h-4 mr-2" />
                Find GigDaddy
              </Button>
            </div>
          </div>
        </section>

        {/* Setup Progress */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Complete your setup
            </h2>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium">2 of 3 completed</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          <Progress value={66} className="h-2 mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {setupCards.map((card) => (
              <div
                key={card.id}
                onClick={card.action}
                className="group cursor-pointer bg-white rounded-xl border border-gray-200 p-5 hover:border-primary-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg ${card.color}`}>
                    {card.icon}
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mt-4 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Overview Section */}
        <section className="mt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Your Gig Overview
            </h2>

            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <div className="bg-white rounded-lg border border-gray-200 p-1 flex">
                <button
                  onClick={() => setActive("grid")}
                  className={`p-2 rounded-md transition-all ${active === "grid"
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  <House className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActive("list")}
                  className={`p-2 rounded-md transition-all ${active === "list"
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  <LayoutList className="w-5 h-5" />
                </button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900"
              >
                View All
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {active === "grid" ? (
            <div className="relative">
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div
                ref={containerRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              >
                {boxes.map((box) => (
                  <div
                    key={box.id}
                    className="flex-shrink-0 w-[300px] md:w-[320px] bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${box.color} bg-opacity-10`}>
                        <div className={`${box.color.replace('bg-', 'text-')}`}>
                          {box.icon}
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Ellipsis className="w-5 h-5" />
                      </button>
                    </div>

                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                      {box.title}
                    </h3>

                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-600 border-blue-200 mb-4"
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      Draft
                    </Badge>

                    <p className="text-sm text-gray-600 mb-6">
                      {box.details}
                    </p>

                    <Button
                      variant="outline"
                      className="w-full border-primary-600 text-primary-600 hover:bg-primary-50"
                    >
                      {box.button}
                    </Button>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {boxes.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${item.color} bg-opacity-10`}>
                        <div className={`${item.color.replace('bg-', 'text-')}`}>
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-4">
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-600 border-blue-200"
                          >
                            Draft
                          </Badge>
                          <span className="text-sm text-gray-600">
                            {item.details}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary-600 text-primary-600 hover:bg-primary-50"
                      >
                        {item.button}
                      </Button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Ellipsis className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Featured GigDaddy Section */}
        <section className="mt-12 mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Top Rated GigDaddies
              </h2>
              <p className="text-gray-600 mt-1">
                Book with confidence from our highest-rated professionals
              </p>
            </div>
            <Button
              variant="ghost"
              className="text-primary-600 hover:text-primary-700 hover:bg-primary-50"
            >
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="relative">
            <button
              onClick={scrollProfileLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div
              ref={gigDaddyProfile}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            >
              {gigDaddy.map((profile) => (
                <div
                  key={profile.id}
                  className="flex-shrink-0 w-[280px] md:w-[300px] bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* Header with favorite button */}
                  <div className="relative h-32 bg-gradient-to-r from-blue-500 to-blue-600">
                    <button
                      onClick={() => toggleFavorite(profile.id)}
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                    >
                      <Heart
                        className={`w-5 h-5 ${favorites.includes(profile.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                          }`}
                      />
                    </button>

                    <div className="absolute -bottom-8 left-6">
                      <Avatar className="h-16 w-16 border-4 border-white">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {profile.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="pt-10 px-6 pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {profile.name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {profile.location}
                        </div>
                      </div>
                      <div className="flex items-center bg-amber-50 text-amber-700 px-2 py-1 rounded-md">
                        <Star className="w-4 h-4 mr-1 fill-amber-500" />
                        <span className="font-medium">{profile.rating}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">
                          {profile.jobSuccess}%
                        </div>
                        <div className="text-xs text-gray-600">Success</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">
                          {profile.jobs}
                        </div>
                        <div className="text-xs text-gray-600">Jobs</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">
                          {profile.hourly}
                        </div>
                        <div className="text-xs text-gray-600">Rate</div>
                      </div>
                    </div>

                    {/* Skills */}
                    <p className="text-sm font-medium text-gray-900 mb-3">
                      {profile.title}
                    </p>

                    <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                      {profile.description}
                    </p>

                    <Button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800">
                      Book Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollProfileRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
        <div className="flex justify-around py-3">
          <button
            onClick={() => router.push("/gigbosses")}
            className="flex flex-col items-center text-primary-600"
          >
            <House size={22} />
            <span className="text-xs mt-1">Home</span>
          </button>

          <button
            onClick={() => router.push("/gigbosses/browse")}
            className="flex flex-col items-center text-gray-600 hover:text-primary-600"
          >
            <NotepadText size={22} />
            <span className="text-xs mt-1">Gigs</span>
          </button>

          <button
            onClick={() => router.push("/gigbosses/")}
            className="flex flex-col items-center text-gray-600 hover:text-primary-600"
          >
            <PhilippinePeso size={22} />
            <span className="text-xs mt-1">Earnings</span>
          </button>

          <button
            onClick={() => router.push("/gigbosses/messages")}
            className="flex flex-col items-center text-gray-600 hover:text-primary-600"
          >
            <MessageSquare size={22} />
            <span className="text-xs mt-1">Messages</span>
          </button>
        </div>
      </div>

      {/* Modals */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Verify Phone Number
            </h3>
            <p className="text-gray-600 mb-6">
              We'll text you a code to verify your number.
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Phone Number
                </label>
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 focus-within:border-primary-600 focus-within:ring-1 focus-within:ring-primary-600">
                  <Image
                    src="/philippines.png"
                    width={24}
                    height={16}
                    alt="Philippines Flag"
                    className="rounded"
                  />
                  <span className="font-medium text-gray-700">+63</span>
                  <Input
                    type="text"
                    placeholder="912 345 6789"
                    className="flex-1 border-0 p-0 focus-visible:ring-0"
                  />
                </div>
              </div>

              <p className="text-xs text-gray-500">
                Messaging rates may apply. We'll use this number for verification purposes only.
              </p>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => setOpen(false)}
                  className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700"
                >
                  Send Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {openEmail && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <button
                onClick={() => setOpenEmail(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Verify Email Address
            </h3>
            <p className="text-gray-600 mb-6">
              We'll send you a link to verify your email.
            </p>

            <div className="space-y-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">We've sent an email to</p>
                <p className="font-medium text-gray-900 mt-1">
                  Babida.cij.bscs@gmail.com
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setOpenEmail(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => setOpenEmail(false)}
                  className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700"
                >
                  Send Again
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}