import { FaRegUserCircle, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const user = localStorage.getItem("user");

  const navigate = useNavigate();
  return (
    <div className="container d-flex justify-content-between mt-2 mb-3">
      <Link to="/" className=" text-decoration-none text-black ">
        <h3>Echo Blog</h3>
      </Link>

      {user ? (
        <div className="d-flex column-gap-4">
          <Link
            to="/user"
            className="d-flex align-items-center column-gap-1 text-decoration-none text-black"
          >
            <FaRegUserCircle size={22} />
          </Link>

          <div className="d-flex column-gap-4">
            <Link
              to={"/"}
              className="d-flex align-items-center column-gap-1 text-decoration-none text-black"
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/");
              }}
            >
              <FaSignOutAlt size={22} /> <h4>Logout</h4>
            </Link>
          </div>
        </div>
      ) : (
        <div className="d-flex column-gap-4">
          <Link
            to="/login"
            className="d-flex align-items-center column-gap-1 text-decoration-none text-black"
          >
            <FaSignInAlt size={22} /> <h4>Login</h4>
          </Link>
          <Link
            to="/register"
            className="d-flex align-items-center column-gap-1 text-decoration-none text-black"
          >
            <FaRegUserCircle size={22} /> <h4>Register</h4>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
