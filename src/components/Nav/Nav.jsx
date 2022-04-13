import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to={"/"} className="nav-link text-black h4">
          React-Portfolio
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
