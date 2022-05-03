import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

function App() {
   const { t, i18n } = useTranslation();
   const [lang, setLang] = useState<any>("zh-TW");

   const changeLanguage = () => {
      switch (lang) {
         case "zh-TW":
            i18n.changeLanguage("en");
            setLang("en");
            break;

         case "en":
            i18n.changeLanguage("zh-TW");
            setLang("zh-TW");
            break;

         default:
            break;
      }
   };
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{t("quickAdd.title")}</p>
            <button
               onClick={() => {
                  changeLanguage();
               }}
            >
               切換語言
            </button>
         </header>
      </div>
   );
}

export default App;
