import { NavLink } from "react-router-dom";
import { FiHome, FiBriefcase, FiFileText } from "react-icons/fi";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo"></h2>

      <NavLink to="/" end className="menu">
        <FiHome /> Dashboard
      </NavLink>

      <NavLink to="/carteira" className="menu">
        <FiBriefcase /> Carteira
      </NavLink>

      <NavLink to="/simulador" className="menu">
        <FiFileText /> Simulador
      </NavLink>
    </div>
  );
}