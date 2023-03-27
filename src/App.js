import logo from "./logo.svg";
import "./App.css";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

function App() {
  const { t } = useTranslation();
  const handleEnglish = () => {
    i18next.changeLanguage("en");
    localStorage.setItem("language", "en");
  };
  const handleJapanese = () => {
    i18next.changeLanguage("ja");
    localStorage.setItem("language", "ja");
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t("first")} <code>src/App.js</code> {t("second")} {t("third")}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button style={{ backgroundColor: "red" }} onClick={handleEnglish}>
        English
      </button>
      <button onClick={handleJapanese}>Japanese</button>
    </div>
  );
}

export default App;
