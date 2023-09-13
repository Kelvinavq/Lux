import usdtLogo from "../../assets/icons/tether-usdt-logo.svg";
import "../../styles/transfer.css"

export const CardsTransfer = () => {
  return (
    <section className="container-cardsTransfer">

      <div className="title">
        <h2>Transferencia de Fondos</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="contenedor-circulos">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="contenido">
            <div className="img">
              <div className="circle">
                <img src={usdtLogo} alt="" />
              </div>
            </div>

            <div className="content-card">
              <h2>Saldo de la Billetera</h2>
              <span>$ 145</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="contenedor-circulos">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="contenido">
            <div className="img">
              <div className="circle">
                <img src={usdtLogo} alt="" />
              </div>
            </div>

            <div className="content-card">
              <h2>Saldo de la Billetera para Depósito</h2>
              <span>$ 1.150</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
