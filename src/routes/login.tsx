import { createFileRoute, useNavigate } from "@tanstack/react-router";
import LoginIc from "../assets/login_ic.svg";
import { useState } from "react";
import FloatingInput from "../components/ui/floating-input";

export const Route = createFileRoute("/login")({
  component: LoginComponent,
});

function LoginComponent() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate({ to: "/dashboard" });
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-poppins px-4">
      <div className="w-full max-w-md py-6">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-2 px-2 mb-12">
          <p>Masuk Akun</p>
        </div>

        <div className="flex items-center justify-center mb-6">
          <img src={LoginIc} alt="Login" width={300} height={300} />
        </div>

        <h1 className="mb-2 text-2xl font-bold text-gray-800 text-center">
          Masuk ke Aplikasi
        </h1>
        <p className="w-3/4 px-2 mb-4 mx-auto text-sm text-center text-gray-600">
          Masukan informasi pengguna Anda di bawah ini untuk melanjutkan
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <form onSubmit={submitForm} className="space-y-4">
            <FloatingInput
              id="username"
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <FloatingInput
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-white font-semibold bg-primary rounded-xl hover:bg-primary/90 transition disabled:opacity-50"
            >
              {loading ? "Loading..." : "Masuk"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
