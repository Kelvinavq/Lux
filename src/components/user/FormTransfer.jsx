import { useState } from "react";
import swal from "sweetalert";

import "../../styles/transfer.css";

export const FormTransfer = () => {
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
      swal("Error", "Por favor, complete todos los campos.", "error");
      return;
    } else {
      console.log("Formulario enviado con éxito:", formData);
    }
  };

  return (
    <>
      <section className="formTransfer">
        <div className="title">
          <h2>Solicitud de transferencia de fondos</h2>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="grupo-input">
              <select
                name="desde"
                value={formData.desde}
                onChange={handleInputChange}
              >
                <option value="desde">Desde</option>
              </select>
            </div>

            <div className="grupo-input">
              <input
                type="text"
                name="amount"
                autoComplete="off"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Monto"
              />
            </div>

            <div className="grupo-input">
              <select
                name="user"
                value={formData.user}
                onChange={handleInputChange}
              >
                <option value="">Seleccionar Usuario</option>
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
                placeholder="Dirección de billetera USDT"
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
                placeholder="Nota"
              />
            </div>
          </div>

          <div className="btn-input">
            <input type="submit" value="Enviar Solicitud" />
          </div>
        </form>
      </section>
    </>
  );
};
