import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onchange = (e: any) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onsubmit = async (e: any) => {
    e.preventDefault();
    const { email, name, password, password2 } = formData;
    console.log(formData);

    if (!email || !name || !password || !password2) {
      alert("Fill all elements");
      return;
    }

    await axios
      .post("/api/user/", { email, name, password })
      .then((response) => {
        localStorage.setItem("user", response.data.token);
        localStorage.setItem("email", response.data.email);
      });

    navigate("/");
  };

  return (
    <div>
      <form className="container w-75 mt-5" onSubmit={onsubmit}>
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="John"
            onChange={onchange}
          />
        </div>
        <div className="mt-3">
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
        <div className="mt-3">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password"
            className="form-control"
            onChange={onchange}
          />
        </div>
        <div className="container w-50 mt-5">
          <button className="btn btn-success w-100  ">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
