import { createFileRoute } from "@tanstack/react-router";
import TimeInfo from "../components/time-info";
import IcWm from "../assets/ic_wm.svg";
import IcPln from "../assets/ic_pln.svg";
import IcAmpere from "../assets/ic_ampere.svg";
import IcSungai from "../assets/ic_sungai.svg";
import AuthLayout from "../layouts/auth-layout";

const meterItems = [
  {
    title: "Stand Meter Kubikasi",
    image: "ic_wm.svg",
    progress: "4/4",
    progressColor: "bg-primary",
  },
  {
    title: "Stand Meter PLN",
    image: "ic_pln.svg",
    progress: "1/4",
    progressColor: "bg-orangeCust",
  },
  {
    title: "Ampere dan Tekanan Pompa",
    image: "ic_ampere.svg",
    progress: "0/4",
    progressColor: "bg-orangeCust/80",
  },
  {
    title: "Intake Sungai",
    image: "ic_sungai.svg",
    progress: "0/4",
    progressColor: "bg-orangeCust/80",
  },
];

const imageMap: Record<string, string> = {
  "ic_wm.svg": IcWm,
  "ic_pln.svg": IcPln,
  "ic_ampere.svg": IcAmpere,
  "ic_sungai.svg": IcSungai,
};

export const Route = createFileRoute("/form-meter")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <div className="w-full p-4 overflow-hidden shadow-md bg-whiteCust rounded-xl">
        {/* Header Waktu */}
        <TimeInfo
          nextTime="12:00"
          countdown="00:59"
          label="Sisa waktu menuju jam berikutnya"
        />
        {/* Grid */}
        <div className="grid grid-cols-2 gap-3">
          {meterItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-3 text-center bg-white rounded-md shadow-none"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-2 rounded-lg custom-gradient-shadow">
                <img
                  src={imageMap[item.image]}
                  alt={item.title}
                  className="object-contain w-16 h-16"
                />
              </div>

              <div
                className={`text-white text-xs font-semibold px-2 py-1 rounded-full w-full mb-1 mt-2 ${item.progressColor}`}
              >
                {item.progress}
              </div>
              <p className="text-sm font-medium text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </AuthLayout>
  );
}
