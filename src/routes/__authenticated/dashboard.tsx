import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "../../layouts/auth-layout";
import ShiftPicker from "../../components/shift-picker";
import DashboardInfoCard from "../../components/MeterProduksi/dashboard-info-card";
import { useQuery } from "@tanstack/react-query";
import { fetchRefJenisQuery } from "../../queries/dashboard/fecth-ref-jenis";

export const Route = createFileRoute("/__authenticated/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: response } = useQuery(fetchRefJenisQuery());
  console.log(response?.data);
  return (
    <AuthLayout>
      <DashboardInfoCard
        lokasi="PEMDA"
        chartData={[3000, 6000, 7000, 8000, 5000]} // simulasi
        nilaiAwal={13485}
        nilaiAkhir={17485}
        nilai={4000}
        nextInputTime="02 Juli 2025, 11:45"
        countdown="00:15"
        info="PROD 2850 M3 per hari"
        className="mt-2"
      />
      <ShiftPicker />
    </AuthLayout>
  );
}
