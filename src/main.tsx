import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import { router } from "./router";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import InstallPrompt from "./components/install-prompt";
import { useAuthStore } from "./store/auth";

defineCustomElements(window);
export const queryClient = new QueryClient();

function App() {
  const auth = useAuthStore();
  return <RouterProvider router={router} context={{ queryClient, auth }} />;
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <InstallPrompt />
      <App />
    </QueryClientProvider>
  );
}
