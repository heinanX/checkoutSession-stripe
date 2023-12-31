import { useSocket as useSocketUser } from "../../../context/userContext";
import BtnClose from "../../_shared_components/BtnClose/BtnClose";
import EmailInput from "../../_shared_components/Form_inputs/EmailInput";
import PasswordInput from "../../_shared_components/Form_inputs/PasswordInput";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  const { setLoginVisibility, setSignUpVisibility, signUp } = useSocketUser();

  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { pathname } = useLocation();

  const switchForm = () => {
    setLoginVisibility(true);
    setSignUpVisibility(false);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signUp(uname, email, pass);
  };

  return (
    <form className="SignUpForm" onSubmit={handleSubmit}>
      <span>
        <h3>New here?</h3>
        <h1>Create an account</h1>
      </span>

      {pathname === "/checkout" ? (
        <Link to="/">
          <BtnClose />
        </Link>
      ) : (
        <BtnClose />
      )}

      <input
        type="text"
        placeholder="Enter Name"
        name="uname"
        onChange={(e) => {
          setUname(e.target.value);
        }}
        required
      />

      <EmailInput setEmail={setEmail} />

      <PasswordInput setPass={setPass} />

      <p>
        Already a customer?{" "}
        <a className="a-styling" onClick={switchForm}>
          Login here
        </a>
      </p>

      <button className="signUp--btn" type="submit">
        create
      </button>
    </form>
  );
};

export default SignUpForm;
