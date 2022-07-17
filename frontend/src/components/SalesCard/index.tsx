import NotificationButton from "../NotificationButton";
import "./style.css";

function SalesCard() {
  return (
    <>
      <div className="rtameta-card">
        <h2 className="rtameta-sales-title">Vendas</h2>
        <div>
          <div className="rtameta-form-control-container">
            <input className="rtameta-form-control" type="text" />
          </div>
          <div className="rtameta-form-control-container">
            <input className="rtameta-form-control" type="text" />
          </div>
        </div>

        <div>
          <table className="rtameta-sales-table">
            <thead>
              <tr>
                <th className="show992">ID</th>
                <th className="show576">Data</th>
                <th>Vendedor</th>
                <th className="show992">Visitas</th>
                <th className="show992">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="show992">#341</td>
                <td className="show576">08/07/2022</td>
                <td>Anakin</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="rtameta-red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show992">#341</td>
                <td className="show576">08/07/2022</td>
                <td>Anakin</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="rtameta-red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show992">#341</td>
                <td className="show576">08/07/2022</td>
                <td>Anakin</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="rtameta-red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SalesCard;
