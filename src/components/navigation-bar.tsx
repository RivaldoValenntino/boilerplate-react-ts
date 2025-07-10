import { HomeIcon as HomeIconSolid } from "@heroicons/react/20/solid";
import {
  BeakerIcon,
  ChartBarIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Tabbar, TabbarLink } from "konsta/react";
import { useState } from "react";

export default function NavigationBar() {
  const activeTab: "dashboard" | "lab" | "grafik" | "profil" = "dashboard";

  return (
    <Tabbar labels className="mt-8 bg-white safe-bottom">
      <TabbarLink
        active={activeTab === "dashboard"}
        label="Dashboard"
        icon={
          activeTab === "dashboard" ? (
            <HomeIconSolid className="w-6 h-6" />
          ) : (
            <HomeIcon className="w-6 h-6" />
          )
        }
        className={
          activeTab === "dashboard" ? "text-blue-600" : "text-gray-500"
        }
      />
      <TabbarLink
        active={activeTab === "lab"}
        label="Lab"
        icon={<BeakerIcon className="w-6 h-6" />}
        className={activeTab === "lab" ? "text-blue-600" : "text-gray-500"}
      />
      <TabbarLink
        active={activeTab === "grafik"}
        label="Grafik"
        icon={<ChartBarIcon className="w-6 h-6" />}
        className={activeTab === "grafik" ? "text-blue-600" : "text-gray-500"}
      />
      <TabbarLink
        active={activeTab === "profil"}
        label="Profil"
        icon={<UserIcon className="w-6 h-6" />}
        className={activeTab === "profil" ? "text-blue-600" : "text-gray-500"}
      />
    </Tabbar>
  );
}
