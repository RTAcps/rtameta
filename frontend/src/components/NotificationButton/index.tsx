import iconNotification from "../../assets/img/notification-icon.svg";

import "./style.css";

function NotificationButton() {
  return (
    <div className="rtameta-red-btn">
      <img src={iconNotification} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
