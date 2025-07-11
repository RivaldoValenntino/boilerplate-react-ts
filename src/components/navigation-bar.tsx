import { Link, useRouter } from "@tanstack/react-router";
import IcHome from "../assets/nav/ic_home.svg?react";
import IcLabBeaker from "../assets/nav/ic_beaker.svg?react";
import IcGraph from "../assets/nav/ic_graph.svg?react";
import IcUser from "../assets/nav/ic_user.svg?react";

export default function NavigationBar() {
  const { state } = useRouter();
  const currentPath = state.location.pathname;

  const getLinkClass = (path: string) =>
    `flex flex-col items-center text-xs ${
      currentPath === path ? "text-primary" : "text-gray-500"
    }`;

  const getIconClass = (path: string) =>
    `w-6 h-6 mb-1 fill-current ${
      currentPath === path ? "text-primary" : "text-gray-500"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 w-full max-w-3xl mx-auto bg-white border-t shadow-md">
      <div className="flex justify-between px-8 py-2">
        <Link to="/dashboard" className={getLinkClass("/dashboard")}>
          <IcHome className={getIconClass("/dashboard")} />
          Dashboard
        </Link>

        <Link to="/form-stand" className={getLinkClass("/form-stand")}>
          <IcLabBeaker className={getIconClass("/form-stand")} />
          Lab
        </Link>

        <Link to="/form-meter" className={getLinkClass("/form-meter")}>
          {/* <IcGraph className={getIconClass("/grafik")} /> */}
          <IcGraph className={`w-6 h-6 mb-1`} />
          Grafik
        </Link>

        <Link to="/input-meter" className={getLinkClass("/input-meter")}>
          <IcUser className={getIconClass("/input-meter")} />
          Profil
        </Link>
      </div>
    </nav>
  );
}
