import ThemeToggleBtn from "./ThemeToggleBtn";
import React, { useEffect, useState } from "react";
import { getCurrentDateTime } from "../utils/Common";

const Header = () => {
  const [greeting, setGreeting] = useState("");
  const [currentDataTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const getGreeting = () => {
      const hours = new Date().getHours();
      if (hours < 12) {
        return "Good Morning";
      } else if (hours < 18) {
        return "Good Afternoon";
      } else {
        return "Good Evening";
      }
    };

    setGreeting(getGreeting());
    setCurrentDateTime(getCurrentDateTime());
  }, []);

  return (
    <nav className="flex justify-between items-center">
      <div>
        <h2 className="font-bold text-2xl">👋 {greeting}</h2>
        <h2 className="font-medium text-base italic">
          Current Date & Time: {currentDataTime}
        </h2>
      </div>
      <h1 className="font-bold text-3xl basis-[33%]">TODO LIST</h1>
      <div className="tooltip tooltip-right" data-tip="Change Theme">
        <ThemeToggleBtn />
      </div>
    </nav>
  );
};

export default Header;
