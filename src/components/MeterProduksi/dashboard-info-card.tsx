import React from "react";
import Header from "./header";
import Chart from "./chart";
import StandMeterInfo from "./stand-meter-info";
import TotalKubicasi from "./total-kubikasi";
import NextInputInfo from "./next-input-info";
import DropdownDashboard from "../drodpdown-dashboard";

type DashboardInfoProps = {
  lokasi: string;
  chartData: number[];
  nilaiAwal: number;
  nilaiAkhir: number;
  nilai: number;
  nextInputTime: string;
  countdown: string;
  info: string;
  className?: string;
};

const DashboardInfoCard: React.FC<DashboardInfoProps> = ({
  lokasi,
  chartData,
  nilaiAwal,
  nilaiAkhir,
  nilai,
  nextInputTime,
  countdown,
  info,
  className = "",
}) => {
  return (
    <div
      className={`bg-whiteCust rounded-xl shadow-none overflow-hidden p-4 w-full ${className}`}
    >
      <Header title={<DropdownDashboard />} />
      <Chart data={chartData} lokasi={lokasi} chartInfo={info} />
      <div className="grid items-stretch grid-cols-12 gap-4 mt-4">
        <div className="col-span-12 xs:col-span-8">
          <StandMeterInfo awal={nilaiAwal} akhir={nilaiAkhir} />
        </div>
        <div className="col-span-12 xs:col-span-4">
          <TotalKubicasi value={nilai} />
        </div>
      </div>

      <NextInputInfo time={nextInputTime} countdown={countdown} />
    </div>
  );
};

export default DashboardInfoCard;
