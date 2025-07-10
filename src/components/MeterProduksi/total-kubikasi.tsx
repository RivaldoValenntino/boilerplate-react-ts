import IcPipe from "../../assets/pipe.svg";

const TotalKubicasi = ({ value }: { value: number }) => {
  return (
    <div className="w-full h-full overflow-hidden shadow-md rounded-xl">
      {/* Header */}
      <div className="bg-[#2563eb] text-white flex justify-between items-start p-4 relative rounded-t-xl">
        <p className="font-medium leading-4 text-md">
          Total
          <br />
          kubikasi
        </p>
        <img
          src={IcPipe}
          alt="Pipe Icon"
          className="absolute bottom-0 right-0 w-12 h-12 opacity-50"
        />
      </div>

      {/* Value Section */}
      <div className="bg-[#CAE2F9] p-6 flex flex-col justify-center items-center text-center rounded-b-xl">
        <div className="flex items-baseline space-x-1">
          <p className="text-3xl sm:text-4xl font-bold">
            {value.toLocaleString()}
          </p>
          <span className="text-sm sm:text-base font-medium">m³</span>
        </div>
      </div>
    </div>
  );
};

export default TotalKubicasi;
