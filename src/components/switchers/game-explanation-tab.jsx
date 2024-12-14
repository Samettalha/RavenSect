"use client";

import { useState, useEffect, useRef } from "react";

// Simple Tab Component with dynamic content and auto-switching
export default function TabComponent({ tabsData, intervalTime = 3000 }) {
  const [activeTab, setActiveTab] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Set up automatic tab switching
    setActiveTab(0);

    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % tabsData.length);
      }, intervalTime);
    };

    startInterval();

    return () => clearInterval(intervalRef.current);
  }, [tabsData, intervalTime]);

  const handleTabClick = (index) => {
    setActiveTab(index);

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabsData.length);
    }, intervalTime);
  };

  return (
    <div className="tab-component w-full  mx-auto">
      {/* Tab Content */}
      <div className="tab-content text-center py-8">{tabsData[activeTab]}</div>

      {/* Tab Indicators */}
      <div className="tab-indicators flex justify-center gap-2">
        {tabsData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`tab-indicator h-2 w-16 rounded-sm  ${
              activeTab === index
                ? "bg-gradient-to-r from-[#F6EB16] to-[#F15A29]"
                : "bg-[rgba(255,255,255,0.20)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
