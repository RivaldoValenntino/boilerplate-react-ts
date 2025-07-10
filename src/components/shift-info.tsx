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
    <div className="flex items-center justify-between w-full px-4 py-2 font-medium text-white text-nowrap">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <BriefcaseIcon className="w-5 h-5" />
          <span className="text-sm">
            Shift: <span className="font-bold">{shift}</span>
          </span>
        </div>

        <span className="text-white">|</span>

        <div className="flex items-center space-x-2">
          <ClipboardDocumentListIcon className="w-5 h-5" />
          <span className="text-sm">
            Terakhir input: <span className="font-bold">{tanggal}</span>
          </span>
        </div>
      </div>

      <div className="px-2 py-1 mx-4 text-sm font-bold text-white bg-orange-400 rounded-full ">
        {jam}
      </div>
    </div>
  );
};

export default ShiftInfo;
