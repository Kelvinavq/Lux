import { useState, useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import swal from "sweetalert";
import "../../styles/request.css";

export const FormRequest = () => {

  const { language } = useContext(LanguageContext);


  const [formData, setFormData] = useState({
    amount: "",
    coin: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.amount === "" ||
      formData.coin === ""
    ) {
      swal(Translation[language].requestSwal1,
        Translation[language].requestSwal2, "error");
      return;
    } else {
      console.log("Formulario enviado con éxito:", formData);
    }
  };
  return (
    <>
      <section className="formRequest">
        <div className="title">
          <h2>{Translation[language].requestTitleForm}</h2>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="grupo-input">
              <input
                type="number"
                name="amount"
                autoComplete="off"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder={Translation[language].requestInputAmount}
              />
            </div>

            <div className="grupo-input">
              <select
                name="coin"
                value={formData.coin}
                onChange={handleInputChange}
              >
                <option value="">{Translation[language].requestSelectUser}</option>
              </select>
            </div>
          </div>

          <div className="btn-input">
            <input type="submit" value={Translation[language].requestButton} />
          </div>
        </form>
      </section>
    </>
  );
};
