import { createFileRoute, redirect } from "@tanstack/react-router";
import AuthLayout from "../layouts/auth-layout";
import MeterProduksiCard from "../components/MeterProduksi/meter-produksi-card";
import ShiftPicker from "../components/shift-picker";
export const Route = createFileRoute("/")({
  component: IndexComponent,
  loader: async () => {
    throw redirect({
      to: "/login",
    });
  },
});

function IndexComponent() {
  return (
    <AuthLayout>
      <MeterProduksiCard
        title="Meter Produksi"
        lokasi="PEMDA"
        chartData={[3000, 6000, 7000, 8000, 5000]} // simulasi
        meterAwal={13485}
        meterAkhir={17485}
        kubikasi={4000}
        nextInputTime="02 Juli 2025, 11:45"
        countdown="00:15"
        produksiInfo="PROD 2850 M3 per hari"
        className="mt-2"
      />
      <ShiftPicker />
    </AuthLayout>
  );
}
