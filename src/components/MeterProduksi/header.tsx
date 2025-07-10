const Header = ({ title }: { title: string }) => (
  <div className="flex justify-between items-center font-semibold text-lg mb-2">
    <h3>{title}</h3>
    {/* <span>⌄</span> */}
  </div>
);

export default Header;
