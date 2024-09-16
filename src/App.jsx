import React from "react";
import "./App.css";
import bg from "../public/image/discordBackground.png";
import { Navbar } from "./components/Navbar";
import { ButtonDownload } from "./components/ButtonDownload";
import { ButtonOpen } from "./components/ButtonOpen";

function App() {
  return (
    <>
      <Navbar />
      <main className="containerMain">
        <div>
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. aA place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <ButtonDownload />
        <ButtonOpen />
        <img className="imgBg" src={bg} alt="fondo" />
      </main>
    </>
  );
}

export default App;
