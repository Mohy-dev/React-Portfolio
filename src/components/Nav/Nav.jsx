import { Link } from "react-router-dom";
import logo from "../../assets/images/source.gif";

const Nav = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <Link
          to={"/"}
          class="row justify-content-center align-items-center"
          className="nav-item text-black h4"
        >
          <div class="col">
            <img id="logo" src={logo} alt="Loading...." />
          </div>
          <div class="font-weight-bold">
            <span class="text-light font-weight-bold text-decoration-none">
              React-Portfolio
            </span>
          </div>
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/counter"} className="nav-link">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/todo"} className="nav-link">
                Todo List
              </Link>
            </li>
            <li className="nav-item d-flex flex-reverse">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
