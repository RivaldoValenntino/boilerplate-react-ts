import { Link, useRouter } from "@tanstack/react-router";
import IcHome from "../assets/nav/ic_home.svg";
import IcLabBeaker from "../assets/nav/ic_lab_beaker.svg";
import IcGraph from "../assets/nav/ic_graph.svg";
import IcUser from "../assets/nav/ic_user.svg";

export default function NavigationBar() {
  const { state } = useRouter();
  const currentPath = state.location.pathname;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 w-full max-w-3xl mx-auto bg-white border-t shadow-md">
      <div className="flex justify-between px-8 py-2">
        <Link
          to="/dashboard"
          className={`flex flex-col items-center text-xs ${
            currentPath === "/dashboard" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <img src={IcHome} alt="Dashboard" className="w-6 h-6 mb-1" />
          Dashboard
        </Link>

        <Link
          to="/lab"
          className={`flex flex-col items-center text-xs ${
            currentPath === "/lab" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <img src={IcLabBeaker} alt="Lab" className="w-6 h-6 mt-1" />
          Lab
        </Link>

        <Link
          to="/grafik"
          className={`flex flex-col items-center text-xs ${
            currentPath === "/grafik" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <img src={IcGraph} alt="Grafik" className="w-6 h-6 mb-1" />
          Grafik
        </Link>

        <Link
          to="/profil"
          className={`flex flex-col items-center text-xs ${
            currentPath === "/profil" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <img src={IcUser} alt="Profil" className="w-6 h-6 mb-1" />
          Profil
        </Link>
      </div>
    </nav>
  );
}
