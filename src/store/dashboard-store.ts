import { create } from "zustand";
import { persist } from "zustand/middleware";

type DashboardType = "MTR" | "MTRPLN" | "AMPD" | "AMPDI" | "SGAI";

interface DashboardState {
  selectedDashboard: DashboardType;
  setDashboard: (type: DashboardType) => void;
}

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set) => ({
      selectedDashboard: "MTR",
      setDashboard: (type) => set({ selectedDashboard: type }),
    }),
    {
      name: "dashboard-storage",
    }
  )
);
