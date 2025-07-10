import React from "react";
import NavigationBar from "../components/navigation-bar";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <div id="index-body" className="w-full max-w-3xl h-dvh">
        <div className="circle-decoration-right"></div>
        <div className="circle-decoration-left"></div>

        <div className="flex flex-col items-center justify-center max-w-xl px-4 mx-auto content-layer">
          {children}
        </div>
        <NavigationBar />
      </div>
    </div>
  );
};

export default AuthLayout;
