import { NavLink } from "react-router-dom";
import ModalComponent from "./ModalComponent";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary py-4 px-5  justify-content-between">
        <a className="navbar-brand">Navbar</a>
        <ModalComponent />
      </nav>
    </>
  );
};
export default Navbar;
