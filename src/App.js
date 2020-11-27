import './App.css';
import Button from '@material-ui/core/Button';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <Button variant="contained" color="primary">Hello World</Button>
      </body>
    </div>
  );
}

export default App;
