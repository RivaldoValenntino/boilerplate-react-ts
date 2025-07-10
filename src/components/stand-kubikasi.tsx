import Kubikasi from "./ui/kubikasi";

interface StandKubikasiProps {
  total: number;
  selesai: number;
}

const StandKubikasi: React.FC<StandKubikasiProps> = ({ total, selesai }) => {
  return (
    <div className="rounded-xl bg-white shadow-none px-4 py-3 mb-4 flex items-center w-full justify-center">
      <Kubikasi total={total} selesai={selesai} />
    </div>
  );
};

export default StandKubikasi;
