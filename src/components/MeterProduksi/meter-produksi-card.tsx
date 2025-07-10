import React from "react";
import Header from "./header";
import Chart from "./chart";
import StandMeterInfo from "./stand-meter-info";
import TotalKubicasi from "./total-kubikasi";
import NextInputInfo from "./next-input-info";

type MeterProduksiProps = {
  title: string;
  lokasi: string;
  chartData: number[];
  meterAwal: number;
  meterAkhir: number;
  kubikasi: number;
  nextInputTime: string;
  countdown: string;
  produksiInfo: string;
  className?: string;
};

const MeterProduksiCard: React.FC<MeterProduksiProps> = ({
  title,
  lokasi,
  chartData,
  meterAwal,
  meterAkhir,
  kubikasi,
  nextInputTime,
  countdown,
  produksiInfo,
  className = "",
}) => {
  return (
    <div
      className={`bg-whiteCust rounded-xl shadow-md overflow-hidden p-4 w-full ${className}`}
    >
      <Header title={title} />
      <Chart data={chartData} lokasi={lokasi} produksiInfo={produksiInfo} />
      <div className="grid items-stretch grid-cols-12 gap-4 mt-4">
        <div className="col-span-12 xs:col-span-8">
          <StandMeterInfo awal={meterAwal} akhir={meterAkhir} />
        </div>
        <div className="col-span-12 xs:col-span-4">
          <TotalKubicasi value={kubikasi} />
        </div>
      </div>

      <NextInputInfo time={nextInputTime} countdown={countdown} />
    </div>
  );
};

export default MeterProduksiCard;
