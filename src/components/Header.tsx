import { FC } from 'react';
import { FaBtc, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
  const isAuth = true;
  return (
    <div className="flex items-center bg-slate-800 p-4 shadow-sm backdrop-blur-sm">
      <Link to="/">
        <FaBtc />
      </Link>

      {isAuth && (
        <nav className="ml-auto mt-10">
          <ul className="flex items-center gap-5">
            <li>
              <NavLink to={'/'} className={({ isActive }) => isActive ? "text-white" : "text-white/50"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/transactions'}>Transactions</NavLink>
            </li>
            <li>
              <NavLink to={'/categories'}>Categories</NavLink>
            </li>
          </ul>
        </nav>
      )}

      {isAuth ? (
        <button className="btn btn-red">
          <span>Log Out</span>
          <FaSignOutAlt />
        </button>
      ) : (
        <Link to={'auth'} className="py-2 ml-auto text-white/50 hover:text-white">
          Log In / Sign In
        </Link>
      )}
    </div>
  );
};

export default Header;