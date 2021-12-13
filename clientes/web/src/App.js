import logo from "./images/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p class="has-text-primary-light">
          Informando pacientes e profissionais de saúde.
        </p>
        <a
          className="App-link"
          href="https://github.com/kyriosdata/medicamentos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sistema Medicamentos
        </a>
      </header>
    </div>
  );
}

export default App;
