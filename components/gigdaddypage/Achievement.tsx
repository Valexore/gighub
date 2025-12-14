"use client";

import React, { useState } from "react";
import { Trophy, X, Award, Calendar, Lock, Check, Star, Zap, Users, Target } from "lucide-react";

interface AchievementProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  unlocked: boolean;
  dateUnlocked: string | null;
  onToggle?: (id: number, unlocked: boolean) => void;
  isEditing?: boolean;
  rarity?: "common" | "rare" | "epic" | "legendary";
  category?: string;
  progress?: number;
  total?: number;
}

const Achievement: React.FC<AchievementProps> = ({
  id,
  title,
  description,
  imageUrl,
  unlocked,
  dateUnlocked,
  onToggle,
  isEditing = false,
  rarity = "common",
  category = "",
  progress,
  total
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggle && isEditing) {
      onToggle(id, !unlocked);
    }
  };

  // GitHub-style rarity colors
  const rarityColors = {
    common: "border-gray-300 bg-gray-50",
    rare: "border-blue-400 bg-blue-50",
    epic: "border-purple-500 bg-purple-50",
    legendary: "border-yellow-500 bg-yellow-50"
  };

  const rarityIcons = {
    common: null,
    rare: <Star className="w-3 h-3 text-blue-500" />,
    epic: <Zap className="w-3 h-3 text-purple-500" />,
    legendary: <Trophy className="w-3 h-3 text-yellow-500" />
  };

  return (
    <>
      <div className="relative group">
        <div
          className={`relative cursor-pointer transition-all duration-300 ${
            unlocked 
              ? "hover:scale-105" 
              : "opacity-60 hover:opacity-80"
          }`}
          onClick={() => setShowDetails(true)}
        >
          <div className="relative w-32 h-32 mx-auto">
            {/* Outer ring with rarity color */}
            <div className={`absolute inset-0 rounded-full border-4 ${
              unlocked 
                ? `${rarityColors[rarity]} border-opacity-100` 
                : "border-gray-300 border-dashed"
            } transition-all duration-300 group-hover:rotate-12`}>
              
              <div className={`absolute inset-2 rounded-full overflow-hidden ${
                unlocked ? "" : "grayscale"
              }`}>
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/150/${
                        unlocked ? "4ade80" : "9ca3af"
                      }?text=${encodeURIComponent(title.charAt(0))}`;
                    }}
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${
                    unlocked 
                      ? rarity === "legendary" ? "bg-gradient-to-br from-yellow-100 to-yellow-300" :
                        rarity === "epic" ? "bg-gradient-to-br from-purple-100 to-purple-300" :
                        rarity === "rare" ? "bg-gradient-to-br from-blue-100 to-blue-300" :
                        "bg-gradient-to-br from-gray-100 to-gray-300"
                      : "bg-gray-200"
                  }`}>
                    <Trophy className={`w-12 h-12 ${
                      unlocked 
                        ? rarity === "legendary" ? "text-yellow-600" :
                          rarity === "epic" ? "text-purple-600" :
                          rarity === "rare" ? "text-blue-600" :
                          "text-gray-600"
                        : "text-gray-400"
                    }`} />
                  </div>
                )}
              </div>

              <div className={`absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center ${
                unlocked 
                  ? "bg-green-500 border-2 border-white" 
                  : "bg-gray-400 border-2 border-white"
              }`}>
                {unlocked ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <Lock className="w-4 h-4 text-white" />
                )}
              </div>

              {unlocked && rarity !== "common" && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-md">
                  {rarityIcons[rarity]}
                </div>
              )}

              {!unlocked && progress !== undefined && total !== undefined && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                  {progress}/{total}
                </div>
              )}
            </div>
          </div>

          {/* Title and description */}
          <div className="mt-4 text-center">
            <h3 className={`font-semibold text-sm mb-1 ${
              unlocked ? "text-gray-900" : "text-gray-500"
            }`}>
              {title}
            </h3>
            <p className={`text-xs line-clamp-2 ${
              unlocked ? "text-gray-600" : "text-gray-400"
            }`}>
              {description}
            </p>
            
            {/* Category tag */}
            <div className="mt-2">
              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                unlocked 
                  ? "bg-gray-100 text-gray-700" 
                  : "bg-gray-50 text-gray-400"
              }`}>
                {category}
              </span>
            </div>
          </div>

          {isEditing && onToggle && (
            <div className="mt-2 flex justify-center">
              <button
                onClick={handleToggle}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  unlocked
                    ? "bg-red-100 text-red-700 hover:bg-red-200"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                {unlocked ? "Lock" : "Unlock"}
              </button>
            </div>
          )}
        </div>
      </div>

      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center gap-3">
                <div className={`relative w-12 h-12 rounded-full border-4 ${
                  unlocked 
                    ? `${rarityColors[rarity]} border-opacity-100` 
                    : "border-gray-300 border-dashed"
                }`}>
                  <div className={`absolute inset-1 rounded-full overflow-hidden ${
                    unlocked ? "" : "grayscale"
                  }`}>
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${
                        unlocked 
                          ? rarity === "legendary" ? "bg-gradient-to-br from-yellow-100 to-yellow-300" :
                            rarity === "epic" ? "bg-gradient-to-br from-purple-100 to-purple-300" :
                            rarity === "rare" ? "bg-gradient-to-br from-blue-100 to-blue-300" :
                            "bg-gradient-to-br from-gray-100 to-gray-300"
                          : "bg-gray-200"
                      }`}>
                        <Trophy className={`w-6 h-6 ${
                          unlocked 
                            ? rarity === "legendary" ? "text-yellow-600" :
                              rarity === "epic" ? "text-purple-600" :
                              rarity === "rare" ? "text-blue-600" :
                              "text-gray-600"
                            : "text-gray-400"
                        }`} />
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                      unlocked
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {unlocked ? (
                        <>
                          <Award className="w-3 h-3" />
                          Unlocked
                        </>
                      ) : (
                        <>
                          <Lock className="w-3 h-3" />
                          Locked
                        </>
                      )}
                    </span>
                    {unlocked && rarity !== "common" && (
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                        rarity === "legendary" ? "bg-yellow-100 text-yellow-800" :
                        rarity === "epic" ? "bg-purple-100 text-purple-800" :
                        "bg-blue-100 text-blue-800"
                      }`}>
                        {rarityIcons[rarity]}
                        {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowDetails(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto">
              {/* Achievement Details */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-gray-400" />
                  <h4 className="font-semibold text-gray-900">Description</h4>
                </div>
                <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{description}</p>
              </div>

              {/* Progress Bar (if applicable) */}
              {!unlocked && progress !== undefined && total !== undefined && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm text-gray-500">{progress}/{total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(progress / total) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Requirements */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-gray-400" />
                  <h4 className="font-semibold text-gray-900">Requirements</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <div className={`w-2 h-2 rounded-full ${
                      unlocked ? "bg-green-500" : "bg-gray-300"
                    }`} />
                    Complete required training modules
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <div className={`w-2 h-2 rounded-full ${
                      unlocked ? "bg-green-500" : "bg-gray-300"
                    }`} />
                    Demonstrate proficiency in related skills
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <div className={`w-2 h-2 rounded-full ${
                      unlocked ? "bg-green-500" : "bg-gray-300"
                    }`} />
                    Complete minimum number of jobs in this category
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <div className={`w-2 h-2 rounded-full ${
                      unlocked ? "bg-green-500" : "bg-gray-300"
                    }`} />
                    Maintain high rating in related services
                  </li>
                </ul>
              </div>

              {/* Date Unlocked */}
              {unlocked && dateUnlocked && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Unlocked on</span>
                    <span className="text-gray-900">{dateUnlocked}</span>
                  </div>
                </div>
              )}

              {/* Benefits */}
              {unlocked && (
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Benefits Unlocked
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-blue-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Increased visibility in job searches
                    </li>
                    <li className="flex items-center gap-2 text-blue-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Higher earning potential
                    </li>
                    <li className="flex items-center gap-2 text-blue-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Access to premium jobs
                    </li>
                    <li className="flex items-center gap-2 text-blue-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Trust badge on profile
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t">
              <button
                onClick={() => setShowDetails(false)}
                className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Achievement;