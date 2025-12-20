import React, { useState } from "react";

const cards = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
];

const BASE_OFFSET = 40;
const EXPAND_DELTA = 160;
const COLLAPSED_HEIGHT = 80;
const EXPANDED_HEIGHT = 200;

const AllTasks = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <h2 className="text-xl md:text-2xl text-center mt-8 mb-5 font-bold">
        All Tasks
      </h2>

      <div
        className="relative bg-[#1c1c1c] w-full rounded-md overflow-hidden"
        style={{
          height: `${
            BASE_OFFSET * (cards.length - 1) + 2.9 * COLLAPSED_HEIGHT
          }px`,
        }}
      >
        {cards.map((bg, index) => {
          const isActive = index === activeIndex;

          const baseY = index * BASE_OFFSET;
          let translateY = baseY;

          if (activeIndex !== null) {
            if (index < activeIndex) {
              translateY = -EXPANDED_HEIGHT / 5 + baseY;
            } else if (index > activeIndex) {
              translateY = baseY + EXPAND_DELTA;
            }
          }

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(isActive ? null : index)}
              className="absolute inset-x-0 px-4 transition-all duration-300 ease-in-out cursor-pointer"
              style={{
                transform: `translateY(${translateY}px)`,
                height: isActive ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT,
                zIndex: cards.length - index,
                overflow: "hidden",
              }}
            >
              <div className={`h-full rounded-md p-4 ${bg}`}>
                <h2 className="font-semibold">Task {index + 1}</h2>
                <p className="text-sm">
                  This is a brief description of Task {index + 1}.
                </p>

                {isActive && (
                  <p className="mt-2 text-sm">
                    Detailed information about Task {index + 1}. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
