import React, { useContext, useState } from "react";
import CustomLayout from "../components/layout/CustomLayout";
import {
  Button,
  Description,
  Form,
  Heading,
  Input,
  InputContainer,
} from "./SignUpPage";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { MoviesContext } from "../context/MoviesContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
  });

  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const {setMessage,setOpen} =  useContext(MoviesContext)


  const handleChange = (event: any) => {
    setFormDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleBlur = () => {
    setError({
      emailError: false,
      passwordError: false,
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password} = formDetails;
    if (email && password ) {
      setSubmitButtonDisabled(true);
       signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setSubmitButtonDisabled(false);
        if (res) {
          setErrorMessage("");
          setOpen(true)
          setMessage("successfully logged in !!!!!")
          navigate("/home");
        }
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMessage(err.message);
      });
      setError({
        emailError: false,
        passwordError: false,
      });
      return;
    }
    if (!email) setError((prev) => ({ ...prev, emailError: true }));
    if (!password) setError((prev) => ({ ...prev, passwordError: true }));
  };
  return (
    <CustomLayout>
      <Heading>Login</Heading>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input type="email" placeholder="Email address" value={formDetails.email}
            name="email"
            onChange={handleChange}
            error={error.emailError}
            onBlur={handleBlur}
            onFocus={handleBlur}/>
          {error.emailError && <div className="error">Can’t be empty</div>}
        </InputContainer>
        <InputContainer>
          <Input type="password" placeholder="Password" value={formDetails.password}
            name="password"
            onChange={handleChange}
            error={error.passwordError}
            onBlur={handleBlur}
            onFocus={handleBlur} />
          {error.passwordError && <div className="error">Can’t be empty</div>}
        </InputContainer>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <Button type="submit" disabled={submitButtonDisabled}>Login to your account</Button>
      </Form>
      <Description>
        <span className="message">Don’t have an account?</span>{" "}
        <span>
          <Link to="/signup">Sign Up</Link>
        </span>
      </Description>
    </CustomLayout>
  );
};

export default LoginPage;
