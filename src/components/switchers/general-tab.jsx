"use client";
import { useState } from "react";
import GameExplanationTab from "./game-explanation-tab";
import GlowingButton from "../buttons/glowing-button";

export default function TabComponent({
  tabs,
  useFlexLayout = false,
  fullscreen = false,
  zonesTab = false,
}) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex flex-col">
      {/* Conditionally render the part based on zonesTab prop */}
      {zonesTab && (
        <div
          className="flex flex-col sticky z-20 pb-36 top-0 gap-10"
          style={{
            background:
              "linear-gradient(180deg, #161616 66.9%, rgba(22, 22, 22, 0.00) 100%)",
          }}
        >
          <div className="pt-12 flex flex-col justify-center items-center z-30 gap-10">
            <GlowingButton title={"naber"} />
            <h2 className="font-semibold max-w-[700px] text-2xl sm:text-[32px] text-center text-white">
              baklavanın tam zamanı
            </h2>
          </div>
          <div className="flex sm:justify-center space-x-4 overflow-x-auto px-1 whitespace-nowrap scroll-smooth scroll-snap-x">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-[23px] py-[10px] text-base text-white rounded-[83px] ${
                  activeTab === index
                    ? "bg-gradient-to-r from-[#FBB040] to-[#F15A29] border border-[#FBB040]"
                    : "bg-[#282828]"
                }  scroll-snap-align-start`}
                onClick={() => setActiveTab(index)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tab Buttons */}
      {!zonesTab && (
        <div className="flex sm:justify-center space-x-4 overflow-x-auto px-1 whitespace-nowrap scroll-smooth scroll-snap-x">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-[23px] py-[10px] text-base text-white rounded-[83px] ${
                activeTab === index
                  ? "bg-gradient-to-r from-[#FBB040] to-[#F15A29] border border-[#FBB040]"
                  : "bg-[#282828]"
              }  scroll-snap-align-start`}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      )}

      {/* Tab Content */}
      <div className="mt-4 flex items-center justify-center">
        <div
          className={`w-full text-white ${fullscreen ? "" : "max-w-[1300px]"}`}
          key={activeTab} // Add key to force rerender when tab changes
        >
          {useFlexLayout ? (
            <div className="flex flex-col gap-4">
              {tabs[activeTab].content.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
          ) : (
            <GameExplanationTab tabsData={tabs[activeTab].content} />
          )}
        </div>
      </div>
    </div>
  );
}
