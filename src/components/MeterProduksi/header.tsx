import { ReactNode } from "react";

const Header = ({ title }: { title: ReactNode }) => (
  <div className="flex justify-between items-center font-semibold text-lg mb-2">
    {typeof title === "string" ? <h3>{title}</h3> : title}
  </div>
);

export default Header;
