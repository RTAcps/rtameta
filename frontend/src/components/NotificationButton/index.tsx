import axios from "axios";
import iconNotification from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";

import "./style.css";

type Props = {
  saleId: number;
};

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {
    console.log("Sucesso!");
  });
}

function NotificationButton({ saleId }: Props) {
  return (
    <div className="rtameta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={iconNotification} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
