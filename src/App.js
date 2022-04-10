import logo from "./logo.svg";
import "./App.css";
import ContentBox from "./components/contentbox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContentBox />
        <a
          className="App-link"
          href="https://youtu.be/dhNFoDpc62I"
          target="_blank"
          rel="noopener noreferrer"
        >
          Doom Battle Arena Video
        </a>
      </header>
    </div>
  );
}

export default App;
