import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onchange = (e: any) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onsubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = formData;
    await axios
      .post("/api/user/login", { email, password })
      .then((response: any) => {
        localStorage.setItem("user", response.data.token);
        localStorage.setItem("email", response.data.email);
      })
      .catch((e) => {
        throw new Error(e);
        return;
      });

    navigate("/");
  };

  return (
    <div>
      <form className="container w-75 mt-5" onSubmit={onsubmit}>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="example@mail.com"
            onChange={onchange}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            onChange={onchange}
          />
        </div>
        <div className="container w-50 mt-5">
          <button className="btn btn-success w-100  ">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
