import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Selamat datang di website Rio Al Rasyid-React A</p>
        <a
          className="App-link"
          href="https://github.com/riorasyid23/react_rio-al-rasyid"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
      </header>
    </div>
  );
}

export default App;
