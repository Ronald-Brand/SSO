import { Link } from "react-router-dom";
import UserService from "../services/UserService";

const Menu = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">HackDefense Applicaties</Link>
      </div>
      <div id="navbar">
        <button className="btn btn-success navbar-btn navbar-right" style={{ marginRight: 0 }} onClick={() => UserService.doLogout()}>
          Logout
        </button>
        <p className="navbar-text navbar-right text-capitalize" style={{ marginRight: 15 }}>
          Role: {UserService.getRoles()}
        </p>
        <p className="navbar-text navbar-right text-capitalize" style={{ marginRight: 15 }}>
          Signed in as: {UserService.getUsername()}
        </p>
      </div>
    </div>
  </nav>
)

export default Menu
