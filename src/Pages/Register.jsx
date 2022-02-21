import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Register = () => {

  const [confirmVisibility, setCOnfirmVisibilty] = useState(true);
  const [visibility, setVisibilty] = useState(true);
  const useStyles = makeStyles({
    root: {
      borderRadius: "50px",
      color: "#085044 !important",
      fontWeight: "600 !important",
      padding: "20px !important",
      margin: " 0px 60px 5px 60px",
      width: "23vw",
      borderColor: "#085044 !important",
      backgroundColor: "white",
      height: "1.1876em",
    },
  });
  const classes = useStyles();

  // const [age, setAge] = React.useState("");
  const initialValues = {
    usertype: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [checkOut, setCheckOut] = useState(true);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 20) {
      errors.password = "Password cannot exceed more than 20 characters";
    } else if (!regex.test(values.password)) {
      errors.password =
        "Password must have eight character,one number, lower and uppercase letters and special characters!";
    }
    if (!values.fullname) errors.fullname = "Fullname is required !";
    if (!values.usertype) {
      errors.usertype = "Usertype is required !";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required!";
    }
    if (!(values.password === values.confirmPassword)) {
      errors.confirmPassword = "Confirm password not matched with password!";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setIsSubmit(true);
    }
  };

  if (isSubmit) {
    alert("form submitted ! Thanks");
  }

  const handleVisiblity = () => {
    if (visibility) {
      setVisibilty(false);
    } else {
      setVisibilty(true);
    }
  };

  const handleConfirmVisiblity = () => {
    if (confirmVisibility) {
      setCOnfirmVisibilty(false);
    } else {
      setCOnfirmVisibilty(true);
    }
  };

  return (
    <>
      <form className="formBody" onSubmit={handleSubmit}>
        <h4 className="logintoyouraccount">Create an Account</h4>
        <FormControl>
          <InputLabel id="demo-simple-select-label " className="user_type">
            User Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            onChange={handleChange}
            name="usertype"
            value={formValues.usertype}
            className={classes.root}
          >
            <MenuItem value={10}>Clinic</MenuItem>
            <MenuItem value={20}>Doctor</MenuItem>
            <MenuItem value={30}>Patient</MenuItem>
          </Select>
        </FormControl>
        <p className="usererrormsg">{formErrors.usertype}</p>
        <div className="nameWithEmailBox">
          <div className="mb-2">
            <input
              type="text"
              id="exampleInputEmail1"
              className="register_name"
              placeholder="Full Name"
              onChange={handleChange}
              name="fullname"
              value={formValues.fullname}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              id="exampleInputEmail1"
              className="register_email"
              placeholder="Email Address"
              onChange={handleChange}
              name="email"
              value={formValues.email}
            />
          </div>
        </div>
        <p className="errormsgfullname">{formErrors.fullname}</p>
        <p className="errormsgemail">{formErrors.email}</p>
        <div className="mb-2">
          <input
            type={`${visibility ? "password" : "text"}`}
            id="exampleInputEmail1"
            className="register_password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={formValues.password}
          />
          <span className="Register_visibilityIcon" onClick={handleVisiblity}>
            {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
        </div>
        <p className="registerpassworderror">{formErrors.password}</p>
        <div className="mb-2">
          <input
            type={`${confirmVisibility ? "password" : "text"}`}
            id="exampleInputEmail1"
            className="register_password"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
            value={formValues.confirmPassword}

          />
          <span className="Register_visibilityIcon" onClick={handleConfirmVisiblity}>
            {confirmVisibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
        </div>
        <p className="registercpassworderror">{formErrors.confirmPassword}</p>
        <button type="submit" className="registerbtn">
          Submit
        </button>
        <p className="registernoaccount">Don't have account</p>
        <a href="#" className="alreadyRegister">
          Already Register
        </a>
      </form>
    </>
  );
};

export default Register;
