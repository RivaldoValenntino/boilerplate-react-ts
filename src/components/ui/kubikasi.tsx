interface StandKubikasiProgressProps {
  total: number;
  selesai: number;
  className?: string;
}

const Kubikasi: React.FC<StandKubikasiProgressProps> = ({
  total,
  selesai,
  className,
}) => {
  return (
    <div
      className={`flex justify-between items-center mb-4 w-full rounded-xl bg-white shadow-none bg-white p-4 ${className}`}
    >
      <span className="font-bold text-gray-800 text-sm">
        Stand Meter Kubikasi
      </span>
      <span className="text-sm text-gray-600 font-bold">
        {selesai}/{total}
      </span>
    </div>
  );
};

export default Kubikasi;
