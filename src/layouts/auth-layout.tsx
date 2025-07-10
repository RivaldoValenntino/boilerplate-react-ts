import React from "react";
import NavigationBar from "../components/navigation-bar";
import Profile from "../components/ui/profile";
import ShiftInfo from "../components/shift-info";
import Avatar from "../assets/ic_akun_avatar.svg";
type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center pb-12">
      <div
        id="index-body"
        className="relative w-full h-screen max-w-3xl min-h-full px-4 pb-8 mx-auto overflow-x-hidden"
      >
        <div className="circle-decoration-right"></div>
        <div className="circle-decoration-left"></div>
        <Profile cabang="Cabang Utama" nama="Nama Pengguna" avatar={Avatar} />
        <ShiftInfo shift="Shift 1" tanggal="02 Juli 2023, 11:45" jam="08:00" />
        <div className="relative z-10">{children}</div>
        <NavigationBar />
      </div>
    </div>
  );
};

export default AuthLayout;
