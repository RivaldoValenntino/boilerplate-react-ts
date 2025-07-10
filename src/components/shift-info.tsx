import {
  BriefcaseIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

type ShiftInfoProps = {
  shift: string;
  tanggal: string;
  jam: string;
};

const ShiftInfo: React.FC<ShiftInfoProps> = ({ shift, tanggal, jam }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full px-4 py-2 font-medium text-white gap-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <BriefcaseIcon className="w-5 h-5" />
          <span className="text-sm">
            Shift: <span className="font-bold">{shift}</span>
          </span>
        </div>

        <span className="hidden sm:block text-white">|</span>

        <div className="flex items-center space-x-2">
          <ClipboardDocumentListIcon className="w-5 h-5" />
          <span className="text-sm">
            Terakhir input: <span className="font-bold">{tanggal}</span>
          </span>
          <div className="px-2 py-1 text-sm font-bold text-white bg-orangeCust rounded-full text-center w-fit">
            {jam}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShiftInfo;
