import React, { useState } from "react";

const ShiftPicker: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>("12:00");

  const timeSlots = [
    { time: "07:00", available: true, val: 7 },
    { time: "08:00", available: true, val: 8 },
    { time: "09:00", available: true, val: 9 },
    { time: "10:00", available: true, val: 10 },
    { time: "11:00", available: true, val: 11 },
    { time: "12:00", available: true, val: 12 },
    { time: "13:00", available: false, val: 13 },
    { time: "14:00", available: false, val: 14 },
    { time: "15:00", available: false, val: 15 },
    { time: "16:00", available: false, val: 16 },
    { time: "17:00", available: false, val: 17 },
    { time: "18:00", available: false, val: 18 },
    // { time: "19:00", available: false, val: 19 },
    // { time: "20:00", available: false, val: 20 },
    // { time: "21:00", available: false, val: 21 },
    // { time: "22:00", available: false, val: 22 },
    // { time: "23:00", available: false, val: 23 },
    // { time: "00:00", available: false, val: 24 },
  ];

  const handleClick = (time: string, available: boolean) => {
    if (!available) return;
    setSelectedTime((prev) => (prev === time ? null : time));
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <div className=" rounded-xl w-full p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-lg">Shift Pagi</h2>
          {/* <span className="material-icons text-gray-400">chevron_right</span> */}
        </div>
        <div className="border-b border-gray-300 mb-4" />

        <div className="grid grid-cols-4 gap-4">
          {timeSlots.map(({ time, available }) => {
            const isSelected = selectedTime === time;

            let bgColor = "bg-gray-200 text-gray-400";
            if (available && isSelected) bgColor = "bg-orangeCust text-white";
            else if (available) bgColor = "bg-greenCust text-black";

            return (
              <button
                key={time}
                onClick={() => handleClick(time, available)}
                disabled={!available}
                className={`rounded-xl py-2 text-sm font-semibold shadow-sm ${bgColor} transition duration-200`}
              >
                {time}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShiftPicker;
