interface MeterCardProps {
  title: string;
  meterAwal: number;
  meterAkhir?: number;
  pemakaian?: number;
  onAction?: () => void;
  titleAction?: string;
  image?: string;
}

const MeterCard: React.FC<MeterCardProps> = ({
  title,
  meterAwal,
  meterAkhir,
  pemakaian,
  onAction,
  titleAction,
  image,
}) => {
  return (
    <div className="p-4 mb-4 bg-white shadow-none rounded-xl">
      <p className="mb-2 text-sm font-semibold text-center text-gray-700">
        {title}
      </p>
      <div className="flex h-full gap-4">
        {/* Gambar wrapper */}
        <div className="w-32 aspect-[4/3] h-auto flex-shrink-0">
          <div className="w-full h-full overflow-hidden rounded-md">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Konten kanan */}
        <div className="flex flex-col justify-between flex-1 text-xs text-gray-600">
          <div>
            <p className="flex justify-between py-1">
              <span>Stand Meter Awal:</span>
              <span className="font-semibold">
                {meterAwal.toLocaleString()}
              </span>
            </p>
            <div className="my-1 border-b border-gray-300" />
            <p className="flex justify-between py-1">
              <span>Stand Meter Akhir:</span>
              <span>{meterAkhir !== undefined ? meterAkhir : "–"}</span>
            </p>
            <div className="my-1 border-b border-gray-300" />
            <p className="flex justify-between py-1">
              <span>Pemakaian:</span>
              <span>{pemakaian !== undefined ? pemakaian : "–"}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={onAction}
            className="w-full px-4 py-2 mt-2 font-semibold text-white transition rounded-md bg-greenCust hover:bg-greenCust/80"
          >
            {titleAction}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeterCard;
