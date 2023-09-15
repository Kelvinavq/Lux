import imgTravel from "../../assets/travel/travel.jpg";
import "../../styles/travel.css";

export const BannerTravel = () => {
  const bannerStyle = {
    backgroundImage: `url(${imgTravel})`,
  };

  const data = [
    {
      user: "Nombre Apellido 1",
      destination: "Destino 1",
      date: "15/10/2023",
    },
    {
      user: "Nombre Apellido 2",
      destination: "Destino 2",
      date: "15/10/2023",
    },
    {
      user: "Nombre Apellido 3",
      destination: "Destino 3",
      date: "15/10/2023",
    },
  ];

  return (
    <>
      <div className="container-banner">
        <div className="head">
          <h2>Lux Travel</h2>
          <p>
            En <strong>Lux</strong> reconocemos tu esfuerzo y te vamos a premiar
            con las mejores experiencias
          </p>
        </div>

        <div className="banner" style={bannerStyle}></div>

        <div className="head">
          <h2>Ganadores del próximo viaje</h2>
        </div>

        <div className="tabla">
          <table >
            <thead>
              <tr>
                <th scope="col">Usuario</th>
                <th scope="col">Destino</th>
                <th scope="col">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td data-label="Usuario">{user.user}</td>
                  <td data-label="Destino">{user.destination}</td>
                  <td data-label="Fecha">{user.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
