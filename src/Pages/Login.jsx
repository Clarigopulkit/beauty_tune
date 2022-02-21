import React, { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [visibility , setVisibilty] = useState(true);
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [checkOut, setCheckOut] = useState(true);

  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
     const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$')
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } 
    else if (!validPassword.test(values.password)) {
      errors.password =
        "Password must have eight character,one number, lower and uppercase letters and special characters!";
    } 
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckOut = () => {
    setCheckOut(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formErrors)
    setIsSubmit(true);
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0 && isSubmit && checkOut) {
      navigate('./dashboard')
      setIsSubmit(true);
    }
  };



  const handleVisiblity = () => {
   if(visibility){
     setVisibilty(false);
   }
   else{
     setVisibilty(true);
   }
  }

  return (
    <>
      <div className="formBody">
        <form className="input_fields" onSubmit={handleSubmit}>
          <h4 className="logintoyouraccount">Log In to your Account</h4>
          <div className="mb-3">
            <input
              type="email"
              className="form_control_text"
              placeholder="Email Id"
              onChange={handleChange}
              name="email"
              value={formValues.email}
            />
          </div>
          <p className="loginemailerror">{formErrors.email}</p>
          <div className="mb-3">
            <input
            type={
              `${visibility ? "password" : "text"}` 
            }
              className="form-control"
              className="form_control_text"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={formValues.password}
            />
            <span className="visibilityIcon" onClick={handleVisiblity}>{ visibility ? <VisibilityIcon/> : <VisibilityOffIcon/> }</span>
          </div>
          <p className="loginpassworderror">{formErrors.password}</p>
          <div className="checkboxForgotPassword">
            <div className="mb-3 form-check ">
              <input
                type="checkbox"
                className="check_me_out text-success"
                onClick={handleCheckOut}
                onChange={handleChange}
                checked
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
              {checkOut ? (
                ""
              ) : (
                <p className="errormsg">Check Out is compulsory</p>
              )}
            </div>
            <p className="forgotpassword">Forgot your password?</p>
          </div>
          <button type="submit" className="Loginbtn">
            Login
          </button>
          <p className="noaccount">Don't have account</p>
          <a href="#" className="registornow">
            Register Now
          </a>
        </form>
      </div>
    </>
  );
};

export default Login;
