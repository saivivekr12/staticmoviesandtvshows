import React, { useContext, useState } from "react";
import CustomLayout from "../components/layout/CustomLayout";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";
import { MoviesContext } from "../context/MoviesContext";

export const Heading = styled("div")({
  fontSize: "32px",
  fontWeight: 300,
  letterSpacing: "-0.5px",
  color: "#fff",
  marginBottom: "40px",
});

export const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  '& .error-message':{
    fontSize: "13px",
    fontWeight: "300",
    color: "#fc4747",
  }
});
export const InputContainer: any = styled("div")({
  position: "relative",
  "& .error": {
    color: "#fc4747",
    position: "absolute",
    top: "0",
    right: "30px",
    fontSize: "13px",
    fontWeight: "300",
  },
});
export const Input: any = styled("input")((props: any) => {
  return {
    border: 0,
    outline: 0,
    borderBottom: `1px solid ${props.error ? "#fc4747" : "#5a698f"}`,
    width: "100%",
    background: "#161d2f",
    paddingBottom: "17px",
    paddingRight: "5px",
    color: "#fff",
    fontSize: "15px",
    fontWeight: 300,
    fontFamily: "Outfit",
    caretColor: "#fc4747",
    "&::placeholder": {
      opacity: 0.5,
      fontSize: "15px",
      fontWeight: 300,
      color: "#fff",
      fontFamily: "Outfit",
    },
    "&:hover": {
      borderBottom: "1px solid #fff",
      cursor: "pointer",
    },
  };
});

export const Button = styled("button")({
  height: "48px",
  background: "#fc4747",
  padding: "16px",
  display: "grid",
  placeItems: "center",
  border: 0,
  outline: 0,
  color: "#fff",
  marginBottom: "24px",
  cursor: "pointer",
  borderRadius: "6px",
  "&:hover": {
    background: "#fff",
    color: "#10141e",
  },
  "&:disabled":{
    backgroundColor:"grey",
    color:"black"
  }
});

export const Description = styled("div")({
  fontSize: "15px",
  fontWeight: 300,
  color: "#fff",
  textAlign: "center",
  a: {
    color: "#fc4747",
    textDecoration: "none",
    marginLeft: "8px",
  },
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
    repeatedPasswordError: false,
  });

  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    repeatedPassword: "",
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
      repeatedPasswordError: false,
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password, repeatedPassword } = formDetails;
    if (email && password && password === repeatedPassword) {
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setSubmitButtonDisabled(false);
          if (res) {
            setErrorMessage("");
            setOpen(true);
            setMessage("Successfully Sign Up!!!!")
            navigate("/login");
          }
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMessage(err.message);
        });
      setError({
        emailError: false,
        passwordError: false,
        repeatedPasswordError: false,
      });
      return;
    }
    if (password !== repeatedPassword)
      alert("password and repeated password should be equal");
    if (!email) setError((prev) => ({ ...prev, emailError: true }));
    if (!password) setError((prev) => ({ ...prev, passwordError: true }));
    if (!repeatedPassword)
      setError((prev) => ({ ...prev, repeatedPasswordError: true }));
  };
  return (
    <CustomLayout>
      <Heading>Sign Up</Heading>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="email"
            placeholder="Email address"
            value={formDetails.email}
            name="email"
            onChange={handleChange}
            error={error.emailError}
            onBlur={handleBlur}
            onFocus={handleBlur}
          />
          {error.emailError && <div className="error">Can’t be empty</div>}
        </InputContainer>
        <InputContainer>
          <Input
            type="password"
            placeholder="Password"
            value={formDetails.password}
            name="password"
            onChange={handleChange}
            error={error.passwordError}
            onBlur={handleBlur}
            onFocus={handleBlur}
          />
          {error.passwordError && <div className="error">Can’t be empty</div>}
        </InputContainer>
        <InputContainer>
          <Input
            type="password"
            placeholder="Repeat Password"
            value={formDetails.repeatedPassword}
            name="repeatedPassword"
            onChange={handleChange}
            error={error.repeatedPasswordError}
            onBlur={handleBlur}
            onFocus={handleBlur}
          />
          {error.repeatedPasswordError && (
            <div className="error">Can’t be empty</div>
          )}
        </InputContainer>
        {errorMessage&& <div className="error-message">{errorMessage}</div>}
        <Button type="submit" disabled={submitButtonDisabled}>
          Create an account
        </Button>
      </Form>

      <Description>
        <span className="message">Already have an account?</span>{" "}
        <span>
          <Link to="/login">Login</Link>
        </span>
      </Description>
    </CustomLayout>
  );
};

export default SignUpPage;
