import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from './Quiz';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <h1 className="Nav">Online Quiz Game</h1>
        
      </div>
      <Routes>
          <Route path="/" element={<Quiz />} />
        </Routes>
        <footer className="footer">
    <div className="copy">© 2023 CodePro</div>
    <div className="bottom-links">
      <div className="links">
        <span>More Info</span>
        <a href={"/"}>Home</a>
        
      </div>
       
    </div>
  </footer>
    </BrowserRouter>

  );
}

export default App;
