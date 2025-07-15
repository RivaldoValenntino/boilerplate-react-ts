import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDashboardStore } from "../store/dashboard-store";

const options = [
  { label: "Meter Produksi", value: "MTR" },
  { label: "Stand Meter PLN", value: "MTRPLN" },
  // { label: "Ampere Pompa Distribusi", value: "AMPD" },
  // { label: "Ampere Pompa Intake", value: "AMPDI" },
  { label: "Intake Sungai", value: "SGAI" },
];

const DropdownDashboard = () => {
  const { selectedDashboard, setDashboard } = useDashboardStore();
  const [open, setOpen] = useState(false);

  const selected =
    options.find((opt) => opt.value === selectedDashboard)?.label || "";

  return (
    <div className="relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-whiteCust rounded-lg px-4 py-2 flex justify-between items-center focus:outline-none"
      >
        <span className="font-semibold text-gray-800">{selected}</span>
        <ChevronDownIcon
          className={`w-8 h-8 text-gray-500 transform transition-transform duration-200 ease-in-out ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                setDashboard(option.value);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-semibold text-gray-800"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownDashboard;
