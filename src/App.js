import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome, unfortunately this is a place placeholder.
        </p>
        <a
          className="App-link"
          href="https://dev.to/nabeelahmed"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my blog, I've got something coming soon 
        </a>
      </header>
    </div>
  );
}

export default App;
