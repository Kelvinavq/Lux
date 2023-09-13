import { useState } from "react";
import swal from "sweetalert";
import "../../styles/request.css";

export const FormRequest = () => {

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
      swal("Error", "Por favor, complete todos los campos.", "error");
      return;
    } else {
      console.log("Formulario enviado con éxito:", formData);
    }
  };
  return (
    <>
      <section className="formRequest">
        <div className="title">
          <h2>Solicitar Pago</h2>
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
                placeholder="Monto a Retirar $"
              />
            </div>

            <div className="grupo-input">
              <select
                name="coin"
                value={formData.coin}
                onChange={handleInputChange}
              >
                <option value="">Tipo de moneda</option>
              </select>
            </div>
          </div>

          <div className="btn-input">
            <input type="submit" value="Solicitar" />
          </div>
        </form>
      </section>
    </>
  );
};
