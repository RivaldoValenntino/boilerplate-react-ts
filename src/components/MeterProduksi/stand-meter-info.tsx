import IcMeter from "../../assets/meter.svg";

type Props = {
  awal: number;
  akhir: number;
};

const StandMeterInfo = ({ awal, akhir }: Props) => {
  return (
    <div className="bg-[#CEDAFF] rounded-xl px-4 py-3 flex items-center space-x-4 w-full h-full shadow-md gap-4">
      <div className="flex-shrink-0 ml-4">
        <img src={IcMeter} alt="Meter Icon" className="w-18 h-18" />
      </div>

      <div className="flex flex-col w-full space-y-1">
        <div>
          <p className="text-xs text-white bg-[#2563eb] p-1.5 rounded-md w-fit font-medium">
            Update Stand Meter Awal :
          </p>
          <p className="mt-1 text-xl font-semibold text-gray-500">
            {awal.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-xs text-white bg-[#f97316] p-1.5 rounded-md w-fit font-medium">
            Update Stand Meter Akhir :
          </p>
          <p className="mt-1 text-xl font-bold text-black">
            {akhir.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandMeterInfo;
