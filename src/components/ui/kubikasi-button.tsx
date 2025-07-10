import React from "react";

interface KubikasiButtonProps {
  onFilterChange: (filter: "sudah" | "belum") => void;
  activeFilter: "sudah" | "belum";
  btnDoneColor?: string;
  btnUndoneColor?: string;
  className?: string;
}

const KubikasiButton: React.FC<KubikasiButtonProps> = ({
  onFilterChange,
  activeFilter,
  btnDoneColor = "bg-blue-600",
  btnUndoneColor = "bg-gray-400",
  className = "",
}) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          className={`w-full py-2 rounded-md text-white text-sm font-semibold transition ${
            activeFilter === "sudah" ? btnDoneColor : "bg-gray-300"
          }`}
          onClick={() => onFilterChange("sudah")}
        >
          SUDAH
        </button>

        <button
          type="button"
          className={`w-full py-2 rounded-md text-white text-sm font-semibold transition ${
            activeFilter === "belum" ? btnUndoneColor : "bg-gray-300"
          }`}
          onClick={() => onFilterChange("belum")}
        >
          BELUM
        </button>
      </div>
    </div>
  );
};

export default KubikasiButton;
