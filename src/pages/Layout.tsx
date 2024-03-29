import { Outlet } from "react-router-dom";
import Header from "../components/Header.tsx";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-900 pb-20 font-roboto text-white">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;