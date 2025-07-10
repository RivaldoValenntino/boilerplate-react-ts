import { createFileRoute } from "@tanstack/react-router";
import TimeInfo from "../components/time-info";
import Kubikasi from "../components/ui/kubikasi";
import KubikasiButton from "../components/ui/kubikasi-button";
import MeterCard from "../components/meter-card";
import GambarMeter from "../assets/images/contoh_meter.png";
import { useState } from "react";
import AuthLayout from "../layouts/auth-layout";
export const Route = createFileRoute("/form-stand")({
  component: RouteComponent,
});

function RouteComponent() {
  const [filter, setFilter] = useState<"sudah" | "belum">("belum");
  console.log(filter);
  const meters = [
    {
      title: "METER PEMDA",
      awal: 13485,
      akhir: undefined,
    },
    {
      title: "METER BCE",
      awal: 13485,
      akhir: 13800,
    },
  ];
  return (
    <AuthLayout>
      <div className="w-full p-4 overflow-hidden shadow-xs bg-whiteCust rounded-xl">
        <TimeInfo
          nextTime="12:00"
          countdown="00:59"
          label="Sisa waktu menuju jam berikutnya"
        />
        <div className="relative w-full">
          <Kubikasi total={4} selesai={1} />

          <KubikasiButton
            className="absolute left-0 right-0 px-4 -bottom-8"
            activeFilter={"belum"}
            btnDoneColor="bg-primary"
            btnUndoneColor="bg-orangeCust"
            onFilterChange={setFilter}
          />
        </div>

        <div className="mt-12">
          {meters.map((meter, idx) => (
            <MeterCard
              titleAction="Catat Meter"
              image={GambarMeter}
              key={idx}
              title={meter.title}
              meterAwal={meter.awal}
              meterAkhir={meter.akhir}
              pemakaian={meter.akhir ? meter.akhir - meter.awal : undefined}
            />
          ))}
        </div>
      </div>
    </AuthLayout>
  );
}
