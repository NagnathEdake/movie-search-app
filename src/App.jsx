import React from "react";
import "./App.css";
import Input from "./components/Input";
import Movies from "./components/Movies";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [movieName, setMovieName] = useState("");
  return (
    <div className="d-flex flex-column align-items-center  justify-content-center mt-4">
      <h2 className="heading gradient-text pe-2">
        <a href="/">
          Mov
          <span>
            ieSp
            <span>ace</span>
          </span>
        </a>
      </h2>

      <Input setMovie={setMovieName} Name={movieName} />
      <Movies Movies={movieName} />
      <Footer Movie={movieName} />
    </div>
  );
}

export default App;
