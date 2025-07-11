import { createFileRoute } from "@tanstack/react-router";
import TimeInfo from "../components/time-info";
import Kubikasi from "../components/ui/kubikasi";
import { useState } from "react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import AuthLayout from "../layouts/auth-layout";
import { CameraIcon } from "@heroicons/react/24/outline";
export const Route = createFileRoute("/input-meter")({
  component: RouteComponent,
});

function RouteComponent() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [standAkhir, setStandAkhir] = useState("");

  const handleTakePhoto = async () => {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: 80,
      });
      setPhotoUrl(photo.dataUrl!);
    } catch (err) {
      console.error("Camera error", err);
    }
  };
  return (
    <AuthLayout>
      <div className="w-full p-4 overflow-hidden shadow-none bg-whiteCust rounded-xl">
        <TimeInfo
          nextTime="12:00"
          countdown="00:59"
          label="Sisa waktu menuju jam berikutnya"
        />
        <Kubikasi total={10} selesai={5} />
        <div className="flex items-center justify-center">
          <div className="w-full p-4 space-y-3 bg-white shadow-md rounded-2xl">
            <h2 className="text-sm font-bold text-center">METER PEMDA</h2>

            <button
              type="button"
              onClick={handleTakePhoto}
              className="flex items-center justify-center w-full py-2 space-x-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-lg text-center"
            >
              <CameraIcon className="w-5 h-5 mb-0.5" />
              <span className="text-center">Foto Stand</span>
            </button>

            {photoUrl && (
              <img
                src={photoUrl}
                alt="Stand Meter"
                className="object-cover w-full rounded-md h-96"
              />
            )}

            {!photoUrl && (
              <div className="flex items-center justify-center w-full text-sm text-gray-400 bg-gray-200 rounded-md h-36">
                Belum ada foto
              </div>
            )}

            <div>
              <label className="block mb-1 text-sm font-medium">
                Stand Awal
              </label>
              <input
                type="number"
                placeholder="Input Stand Awal Meter"
                className="w-full px-3 py-2 text-sm text-gray-400 bg-gray-100 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Stand Akhir
              </label>
              <input
                type="number"
                value={standAkhir}
                onChange={(e) => setStandAkhir(e.target.value)}
                placeholder="Input Stand Akhir Meter"
                className="w-full px-3 py-2 text-sm placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-semibold text-white transition rounded-lg bg-primary hover:bg-primary/80"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
