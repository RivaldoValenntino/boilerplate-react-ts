import { createFileRoute } from "@tanstack/react-router";
import Profile from "../components/ui/profile";
import Avatar from "../assets/ic_akun_avatar.svg";
import AuthLayout from "../layouts/auth-layout";
import MeterProduksiCard from "../components/MeterProduksi/meter-produksi-card";
import NavigationBar from "../components/navigation-bar";
import ShiftInfo from "../components/shift-info";
export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <AuthLayout>
      <Profile
        avatar={Avatar}
        cabang="Cabang Utama"
        nama="Nama Pengguna"
        className="self-start mb-2"
      />
      <ShiftInfo
        shift="Shift 1"
        tanggal="02 Juli 2023, 11:45"
        jam="08:00 - 17:00"
      />
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
      />
    </AuthLayout>
  );
}
