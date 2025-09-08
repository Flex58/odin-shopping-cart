import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PropTypes from "prop-types";
import classes from "./App.module.css";
import NavBar from "./components/NavBar";
import main from "./css/LayoutMain.module.css";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className={main.main}>
        <div>
          <div>Test</div>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className={classes.logo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img
              src={reactLogo}
              className={classes.logo + " " + classes.react}
              alt="React logo"
            />
          </a>
        </div>
        <h1>our first test</h1>
        <div className={classes.card}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className={classes["read-the-docs"]}>
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App;
