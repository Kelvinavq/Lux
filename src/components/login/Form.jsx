import React, { useContext,useState } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";
import swal from "sweetalert";

export const Form = () => {
  const { language } = useContext(LanguageContext);

// States to store user-entered email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expression to validate email format
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regexEmail.test(email)) {
       // Display an alert if the email does not have the correct format
      swal("Error", "El correo debe contener el formato correcto", "error");
      return;
    } else if (password.length < 8) {
 // Display an alert if the password is less than 8 characters
      swal(
        "Error",
        "La contraseña debe contener al menos 8 carácteres.",
        "error"
      );
      return;
    } else {
      // Submit the form if all validations pass
      console.log("Form submitted successfully");
    }
  };

  // Function to handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

   // Function to manage the state of the input field label
  function handleChange(input) {
    const label = input.nextElementSibling;

    if (input.value.trim() !== "") {
      label.classList.add("filled");
    } else {
      label.classList.remove("filled");
    }
  }
  return (
    <section className="form">

      <div className="head">
        <span>{Translation[language].loginLink}</span>
        <a href="https://office.luxinternational.us/auth/login">{Translation[language].loginLink2}</a>
      </div>

      <form className="login" id="login" onSubmit={handleSubmit}>
        <h2>{Translation[language].loginTitleForm}</h2>
        <div className="inputs">
          <div className="grupo-input">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => {
                handleInputChange(e);
                handleChange(e.target);
              }}
            />
            <label htmlFor="email">{Translation[language].loginInput1}</label>
          </div>

          <div className="grupo-input">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => {
                handleInputChange(e);
                handleChange(e.target);
              }}
            />
            <label htmlFor="password">{Translation[language].loginInput2}</label>
          </div>
        </div>

        <div className="enlace">
          <a href="#">{Translation[language].loginLink3}</a>
        </div>
        <div className="btn-input">
          <input type="submit" value={Translation[language].loginButton}  />
        </div>
      </form>
    </section>
  );
};
