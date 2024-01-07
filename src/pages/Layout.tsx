import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-900 pb-20 font-roboto text-white">
      <h1>HEADER</h1>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;