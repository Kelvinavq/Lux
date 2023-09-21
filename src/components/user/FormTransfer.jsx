import { useState, useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";
import swal from "sweetalert";

import "../../styles/transfer.css";

export const FormTransfer = () => {
  const { language } = useContext(LanguageContext);

  const [formData, setFormData] = useState({
    desde: "desde",
    amount: "",
    user: "",
    wallet: "",
    network: "TRC20",
    note: "",
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
      formData.desde === "desde" ||
      formData.user === "" ||
      formData.amount === "" ||
      formData.wallet === "" ||
      formData.note === ""
    ) {
      swal(
        Translation[language].transferSwal1,
        Translation[language].transferSwal2,
        "error"
      );
      return;
    } else {
      console.log("Formulario enviado con éxito:", formData);
    }
  };

  return (
    <>
      <section className="formTransfer">
        <div className="title">
          <h2>{Translation[language].transferTitleForm}</h2>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="grupo-input">
              <select
                name="desde"
                value={formData.desde}
                onChange={handleInputChange}
              >
                <option value="desde">
                  {Translation[language].transferSelect}
                </option>
              </select>
            </div>

            <div className="grupo-input">
              <input
                type="text"
                name="amount"
                autoComplete="off"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder={Translation[language].transferInputAmount}
              />
            </div>

            <div className="grupo-input">
              <select
                name="user"
                value={formData.user}
                onChange={handleInputChange}
              >
                <option value="">
                  {Translation[language].transferInputUser}
                </option>
              </select>
            </div>
          </div>

          <div className="inputs">
            <div className="grupo-input">
              <input
                type="text"
                name="wallet"
                value={formData.wallet}
                onChange={handleInputChange}
                placeholder={Translation[language].transferInputWallet}
              />
            </div>

            <div className="grupo-input">
              <select
                name="network"
                value={formData.network}
                onChange={handleInputChange}
              >
                <option value="TRC20">TRC20</option>
              </select>
            </div>
          </div>

          <div className="inputs">
            <div className="grupo-input">
              <textarea
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                placeholder={Translation[language].transferTextNote}
              />
            </div>
          </div>

          <div className="btn-input">
            <input type="submit" value={Translation[language].transferButton} />
          </div>
        </form>
      </section>
    </>
  );
};
