import IcPipe from "../../assets/pipe.svg";

const TotalKubicasi = ({ value }: { value: number }) => {
  return (
    <div className="w-full h-full overflow-hidden shadow-md rounded-xl">
      <div className="bg-[#2563eb] text-white flex justify-between items-start p-4 relative">
        <p className="font-medium leading-4 text-md">
          Total
          <br />
          kubikasi
        </p>
        <img
          src={IcPipe}
          alt="Pipe Icon"
          className="absolute bottom-0 right-0 w-12 h-12"
        />
      </div>

      <div className="bg-[#CAE2F9] px-4 py-6 rounded-b-xl flex justify-center items-center">
        <p className="text-3xl font-bold leading-none">
          {value.toLocaleString()}{" "}
        </p>
        <span className="mx-1 text-sm font-medium text-center">m³</span>
      </div>
    </div>
  );
};

export default TotalKubicasi;
