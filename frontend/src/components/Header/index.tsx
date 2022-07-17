import logo from "../../assets/img/logo.svg";

import "./style.css";

function Header() {
  return (
    <>
      <header>
        <div className="rtameta-logo-container">
          <img src={logo} alt="DSMeta" />
          <h1>RTAMeta</h1>
          <p>
            Desenvolvido por{" "}
            <a href="https://www.instagram.com/rodrigo_teixeira_de_andrade/">
              @rodrigo_teixeira_de_andrade
            </a>
            <br />
            Na Semana Spring React da{" "}
            <a href="https://www.instagram.com/devsuperior.ig">
              @devsuperior.ig
            </a>
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
